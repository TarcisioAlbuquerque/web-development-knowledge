# Interactive Component Catalog

Interaction is behavior; motion is animation. Plan and test them independently. IDs are stable reference labels, not requirements to include every component.

| ID | Component | Use when |
|---|---|---|
| I-01 | Anchor Navigation | Long page with section navigation. |
| I-02 | Responsive Menu | Compact navigation with controlled open/close and focus. |
| I-03 | Contextual CTA | User intent changes the next action or message. |
| I-04 | Interactive Tabs | Small set of peer content panels. |
| I-05 | Service/Goal Selector | Visitor benefits from choosing a need before reading a tailored path. |
| I-06 | Educational Quiz | Interactive learning/qualification materially helps. |
| I-07 | Swipe/Slide Cards | Sequential content works better as a deck. |
| I-08 | FAQ Accordion | Questions need progressive disclosure; native details/summary often suffice. |
| I-09 | Interactive Q&A | Curated questions guide an actual service path. |
| I-10 | WhatsApp Conversation Preview | Illustration of a workflow, clearly not a real conversation. |
| I-11 | Image Gallery | Visual work needs browsing/lightbox. |
| I-12 | Carousel/Slider | A bounded collection needs previous/next controls. |
| I-13 | Infinite Marquee | Decorative/brand strip has enough content and can be paused. |
| I-14 | Video Module | Video helps explain or show the service. |
| I-15 | Progress/Step Indicator | Multi-step flow has meaningful progress. |
| I-16 | Multi-step Form | Form length justifies grouping and step validation. |
| I-17 | Filterable Portfolio | Visitors need to narrow a sizeable set of work. |
| I-18 | Testimonial Switcher | Genuine authorized testimonials exist and need browsing. |
| I-19 | Before/After Slider | Two authorized images need direct comparison. |
| I-20 | Modal/Drawer | Secondary task needs a temporary panel. |

## Component quality rules
- Prefer semantic native HTML when it satisfies the task.
- State must be visible and represented semantically, not only by color/animation.
- Keyboard operation, focus order, Escape/close behavior, focus restore and touch alternatives where relevant.
- Forms have labels, instructions, validation, associated errors and confirmation.
- Empty/loading/error/success/disabled states are defined where applicable.
- Carousels have manual controls; swipe is never the only interaction. Autoplay needs pause.
- Marquee duplication must not create duplicate focus stops or screen-reader content.
- Video does not autoplay with sound; provide poster, controls and meaningful fallback.
- WhatsApp number, text and destination come from approved client data; encode messages.
- Simulation, mockup and illustrative conversation must be labeled honestly.
- Components stay usable without animation and under prefers-reduced-motion.

## Selection
Include only components that help visitors understand, choose, explore, complete a task or convert. Three static buttons are not three interaction patterns. Do not add a quiz, chatbot, slider or form merely to make a page feel interactive.
