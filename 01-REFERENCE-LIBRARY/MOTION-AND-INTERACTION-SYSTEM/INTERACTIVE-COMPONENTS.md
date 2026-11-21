# Interactive Components

Motion is movement; interaction is behavior. A component may be interactive without elaborate animation. Select components only when they support a real visitor task.

## Component catalog
| ID | Component | Core behavior | Suitable use |
|---|---|---|---|
| I-01 | Anchor Navigation | Navigate to sections with active state/header offset | Long pages |
| I-02 | Responsive Menu | Open/close, Escape, selection and focus handling | Compact navigation |
| I-03 | Contextual CTA | Route/message reflects user intent | Contact, WhatsApp, quote |
| I-04 | Interactive Tabs | Select panels; keyboard and ARIA | Services/categories |
| I-05 | Service/Goal Selector | Selection reveals relevant information/CTA | Professional services |
| I-06 | Educational Quiz | Questions, feedback, progress, result, restart | Education/health |
| I-07 | Swipe/Slide Cards | Navigate by touch, buttons and keyboard | Slides/steps |
| I-08 | FAQ Accordion | Expand/collapse; native details/summary often enough | FAQ |
| I-09 | Interactive Q&A | Predefined questions reveal answers | Service guidance |
| I-10 | WhatsApp Conversation Preview | Clearly illustrative simulation, separate real CTA | Explain process |
| I-11 | Image Gallery | Grid, filters, accessible lightbox | Photography/projects |
| I-12 | Carousel/Slider | Previous/next, position, pause if autoplay | Testimonials/media |
| I-13 | Infinite Marquee | Continuous loop with pause | Logos/photos |
| I-14 | Video Module | Poster, controls and conscious loading | Behind the scenes |
| I-15 | Progress/Step Indicator | Reflect real state/progress | Forms/process |
| I-16 | Multi-step Form | Validation, navigation and accessible errors | Briefing/quote |
| I-17 | Filterable Portfolio | Filter projects without losing context | Portfolio |
| I-18 | Testimonial Switcher | Navigate authorized real testimonials | Social proof |
| I-19 | Before/After Slider | Accessible comparison control | Authorized comparisons |
| I-20 | Modal/Drawer | Close, Escape and focus management | Details/forms |

## Quality requirements
- State is visible visually and semantically.
- Keyboard and touch are supported; focus is visible.
- Tabs use appropriate ARIA relationships and keyboard behavior.
- Quiz feedback is not color-only; score, progress, next and restart work.
- Prefer native `details/summary` for simple FAQ.
- Gallery/lightbox has accessible controls, Escape close and focus restoration.
- Swipe is never the only navigation method.
- Autoplay/marquee has clear pause controls.
- Video has poster, reserved dimensions, accessible controls and no unexpected audio.
- WhatsApp/contact destinations use approved data, never placeholders.
- Include empty/loading/error/success/disabled states where relevant.
- Keep content understandable without animation.

## Implementation
1. Prefer native HTML when it meets the need.
2. Separate logic, content and styling.
3. Keep components configurable and small.
4. Document data, states, events and accessibility behavior.
5. Test actual user tasks, not just visual appearance.

There is no universal minimum number of components per page. A few well-chosen interactions are better than unnecessary complexity.
