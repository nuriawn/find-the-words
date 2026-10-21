# Change management frameworks: notes for *Find the Words*

Research notes on the main change-management frameworks and how they apply to this exercise. The three scenarios are really about **AI adoption as an organizational change**. Each one puts the participant in a different spot on the change curve:

| Scenario | Who is changing | Where they are |
|---|---|---|
| The anti-AI client (Priya) | The client's organization | Has rejected the change after a bad experience (a data leak) |
| The hallucinated references (Sarah) | The agency's contractor workflow | Change was adopted with no guardrails. The first visible failure could set off a backlash |
| The quality burden (David) | The participant's own team | Sponsor is pushing adoption. Reinforcement and quality controls lag behind |

---

## 1. The frameworks

### Lewin's Change Model: Unfreeze → Change → Refreeze (1940s)
- **Idea:** Before people change, they need a reason to let go of the current state. After the change, it has to be locked in as the new norm.
- **Related tool:** *Force-field analysis*. List the forces driving the change and the forces restraining it. Weakening the restraining forces usually works better than pushing harder on the driving ones.
- **Strengths:** It's simple, and it's the root of most later models.
- **Weaknesses:** It treats change as one event. AI tooling keeps changing, so nothing stays "refrozen" for long.

### Kotter's 8-Step Model (1996, *Leading Change*; updated in 2014 as "8 Accelerators")
1. Create urgency 2. Build a guiding coalition 3. Form a strategic vision 4. Enlist a volunteer army 5. Remove barriers 6. Generate short-term wins 7. Sustain acceleration 8. Institute the change
- **Strengths:** A clear top-down playbook for leaders, and widely known.
- **Weaknesses:** Mostly sequential and leader-centric. It says little about individual resistance.

### Prosci ADKAR (Jeff Hiatt, ~1998–2006)
The individual has to move through **Awareness** (why change), **Desire** (wanting to take part), **Knowledge** (how), **Ability** (actually doing it), and **Reinforcement** (making it stick).
- **Key idea:** Find the *barrier point*, meaning the first element that is missing, and work on that. Teaching Knowledge to someone stuck at Desire won't help.
- **Strengths:** Focused on the individual and easy to diagnose. It pairs well with coaching conversations.
- **Weaknesses:** Light on the organizational system around the person.

### Bridges' Transition Model (William Bridges, 1991, *Managing Transitions*)
- Separates **change** (the external event) from **transition** (the internal psychological process).
- Three phases: **Ending / Losing / Letting go** → **Neutral Zone** → **New Beginning**.
- **Strengths:** Names what people *lose*, such as identity, craft, and status. That fits writers and editors well, since "my expertise is the writing" is a real loss under AI.

### Kübler-Ross Change Curve (adapted from the 1969 grief model)
- Denial → Anger → Bargaining → Depression → Acceptance (often simplified to shock → resistance → exploration → commitment).
- **Use with care:** It was never validated for organizational change. It works as a vocabulary for emotional reactions, not as a prediction.

### McKinsey 7-S (Waterman & Peters, ~1980)
- Strategy, Structure, Systems (hard). Shared values, Style, Staff, Skills (soft).
- **Use:** A diagnostic for *misalignment*. In the David scenario, Strategy ("adopt AI") changed but Systems (QC and reference verification) didn't. That gap is exactly where the editor's extra three hours come from.

### Rogers' Diffusion of Innovations (1962)
- Adopter categories: innovators (2.5%), early adopters (13.5%), early majority (34%), late majority (34%), laggards (16%).
- Five attributes predict adoption: **relative advantage, compatibility, complexity, trialability, observability**.
- **Use:** Priya isn't a "laggard". She is a rational late adopter whose *compatibility* concern (data governance) was validated by an incident. Treating her as resistant to change misreads her.

### Beckhard–Harris change formula (1987, from Gleicher)
**D × V × F > R**: Dissatisfaction × Vision × First steps must outweigh Resistance. If any factor is zero, the product is zero.
- **Use:** A quick self-check before a conversation. Does the other person feel the problem? Do they see a better state? Is there a concrete first step?

### Nudge / behavioral approaches (Thaler & Sunstein, 2008) and the EAST framework (UK Behavioural Insights Team)
- Make the desired behavior **Easy, Attractive, Social, Timely**.
- **Use:** For quality controls, a reference-verification checklist built into the template beats a policy memo.

### Others worth knowing
- **Satir Change Model:** Late status quo → foreign element → chaos → integration → new status quo. It predicts a performance *dip* after a change, which matches the scenario's "1 hr → 3 hrs".
- **Lippitt's Phases of Change** and **PDCA/Deming:** iterative, consultant-led cycles. PDCA suits ongoing AI process tweaks.
- **ITIL change enablement:** IT/service change control (risk assessment, change advisory). It's relevant if the agency formalizes AI tool approval, but it's a different sense of "change management".

---

## 2. Comparison

| Framework | Level | Best for | Weak on |
|---|---|---|---|
| Lewin | Org | Big-picture framing, force-field | Continuous change |
| Kotter | Org / leader | Leading a rollout | Individual psychology |
| ADKAR | Individual | Diagnosing where one person is stuck | System alignment |
| Bridges | Individual / emotional | Loss, identity, transition | Execution steps |
| Change curve | Individual / emotional | Naming reactions | Evidence base |
| 7-S | Org | Finding misalignment | Sequencing |
| Diffusion | Market / population | Explaining adoption speed | Org dynamics |
| D×V×F>R | Conversation | Pre-conversation self-check | Detail |
| Nudge / EAST | Behavior | Designing guardrails that stick | Strategy |

**ADKAR and Bridges fit this exercise best.** Both work at the level of one person in one conversation, which is what the chatbot simulates. Lewin's force-field analysis and the Beckhard–Harris formula are good add-on tools for preparing beforehand.

---

## 3. Mapping to the existing five principles

The debrief already scores five principles (`PRINCIPLES` in `public/index.html`). They line up closely with established frameworks, which is useful backing for the session:

| Exercise principle | Framework support |
|---|---|
| **Be informed before you talk** | Lewin force-field (know the restraining forces). D×V×F (have a first step ready). The David scenario's "bring data, not vibes" is the *Dissatisfaction* term made concrete |
| **Lead with curiosity** | ADKAR barrier-point diagnosis. Bridges ("what are they losing?"). Priya's hidden data-leak story is the restraining force you only find by asking |
| **Don't transfer your judgment** | ADKAR: match information to the element they're stuck on. Giving Knowledge to someone stuck at Desire is overload |
| **Lead with the work, not the tool** | Rogers' *relative advantage* and *observability*: talk about outcomes. Bridges: avoid setting off identity loss |
| **Protect the space for good AI use** | Kotter steps 6–8 (short-term wins, institute change). Satir (the dip is expected, so don't abandon the change). Avoids the Sarah scenario's backlash ("ban AI entirely") |

### Per-scenario reading

- **Priya (anti-AI client):** In ADKAR terms her barrier is **Desire**, and the reason behind it is an earlier bad experience. In Bridges terms she is still in the *Ending* phase, where trust was lost. The right move is to stop trying to convert her. Listen, respect the boundary, and keep the relationship (and future change) possible.
- **Sarah (hallucinated references):** This is about **Reinforcement** failing. AI was adopted without QC, so it never got "refrozen" properly. The risk is a *Kübler-Ross anger / reversal* swing. Leading with the work (specific errors plus a fix) keeps the change from going backward.
- **David (quality burden):** A **7-S misalignment**: strategy moved and systems didn't. He's a Kotter-style sponsor, so present the issue as *removing a barrier* (step 5) and *protecting short-term wins* (step 6), not as resistance. The Satir dip explains why the problem is expected and fixable.

---

## 4. Possible uses in the app

Only the first is built. The others are options if the session wants to bring in change frameworks explicitly:

1. **Debrief add-on (implemented):** Below the five-principle scorecard, the debrief now shows a line like "In ADKAR terms, they seemed stuck at **Desire**." The judge prompt returns it as an `adkar` JSON field. The line is hidden if the field is missing or invalid, and it's included in the copied Slack reflection.
2. **Briefing screen hint:** A collapsible "Before you start: what might they be losing?" prompt (Bridges) on the scenario briefing card.
3. **A fourth scenario:** A writer who resists their *own* team's AI rollout. The participant plays the peer or manager, which reverses the direction of the other three.
4. **Slack reflection prompt:** Add "Which ADKAR element was the barrier?" to the copied reflection, to start cohort discussion.

---

## 5. Sources

- Lewin, K. (1947). "Frontiers in Group Dynamics." *Human Relations* 1(1).
- Kotter, J. P. (1996). *Leading Change.* Harvard Business School Press; Kotter (2014), *Accelerate.*
- Hiatt, J. (2006). *ADKAR: A Model for Change in Business, Government and Our Community.* Prosci.
- Bridges, W. (1991). *Managing Transitions: Making the Most of Change.*
- Kübler-Ross, E. (1969). *On Death and Dying.*
- Waterman, R., Peters, T., & Phillips, J. (1980). "Structure is not organization." *Business Horizons.*
- Rogers, E. M. (1962). *Diffusion of Innovations.*
- Beckhard, R. & Harris, R. (1987). *Organizational Transitions*, 2nd ed.
- Thaler, R. & Sunstein, C. (2008). *Nudge*; Behavioural Insights Team (2014), *EAST: Four simple ways to apply behavioural insights.*
- Satir, V. et al. (1991). *The Satir Model: Family Therapy and Beyond.*
