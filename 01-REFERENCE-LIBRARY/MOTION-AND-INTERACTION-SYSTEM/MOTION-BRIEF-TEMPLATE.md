# Motion & Interaction Brief

Duplicate into the client project only when motion/interactions are relevant. Keep the brief proportional to project complexity.

## 1. Context
- Project/client:
- Goal and audience:
- Brand/experience qualities:
- Devices and constraints:
- Status: DRAFT / IN_REVIEW / APPROVED / BLOCKED

## 2. Decision
- Motion needed? Why / why not:
- Interaction needed? Which user task:
- Overall intensity: none / subtle / moderate / expressive
- Performance, accessibility or content constraints:

## 3. References
| Source/pattern | Evidence status | What transfers | What does not |
|---|---|---|---|

## 4. Selected motion
| Catalog ID | Element | UX purpose | Trigger | Desktop/mobile | Reduced-motion/fallback | Acceptance check |
|---|---|---|---|---|---|---|

## 5. Selected interactions
| Component ID | User task | Data/content | States | Keyboard/touch behavior | Test |
|---|---|---|---|---|---|

## 6. Implementation
- Existing stack:
- CSS/native API/framework:
- Additional dependency and justification:
- Components/recipes reused:
- Cleanup/lifecycle requirements:

## 7. QA evidence
- [ ] Selected effects behave as specified.
- [ ] Every control performs its stated action.
- [ ] Keyboard, focus and touch checked where applicable.
- [ ] Desktop and target mobile sizes checked.
- [ ] Reduced-motion checked.
- [ ] Content/function remains available without motion/JS where applicable.
- [ ] Performance/layout shift/console checked where tooling permits.
- [ ] Evidence and limitations recorded.

## 8. Exceptions and handoff
- Unimplemented item and reason:
- Alternative:
- Approved by:
- Files/components:
- Tests actually performed:
- Known limitations:
- Final state: APPROVED / APPROVED WITH LIMITATIONS / REJECTED

**Selection rule:** there is no universal minimum number of effects or interactions. Do not add effects to satisfy a quota. Quality, relevance, accessibility and performance matter more than quantity.
