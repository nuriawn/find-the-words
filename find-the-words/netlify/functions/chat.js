// Netlify serverless function: proxies chat requests to the Anthropic API.
// The API key lives in Netlify environment variables (ANTHROPIC_API_KEY),
// never in the browser.

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server is missing ANTHROPIC_API_KEY." }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: "Bad JSON." }) };
  }

  const { system, messages, max_tokens } = payload;

  if (!Array.isArray(messages) || messages.length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing messages array." }),
    };
  }

  // Lightweight protection: cap message count and total length.
  if (messages.length > 40) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Conversation too long." }),
    };
  }
  const totalChars = messages.reduce(
    (n, m) => n + (typeof m.content === "string" ? m.content.length : 0),
    0
  );
  if (totalChars > 40000) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Conversation content too long." }),
    };
  }

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: max_tokens || 600,
        system: system || "",
        messages,
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return {
        statusCode: resp.status,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
          error: data?.error?.message || "Anthropic API error.",
        }),
      };
    }

    const text =
      Array.isArray(data.content) && data.content[0]?.text
        ? data.content[0].text
        : "";

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ text }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: String(err) }),
    };
  }
};
