# Motion Pattern Catalog

Stable IDs for briefs, implementation notes and QA. The catalog is a menu, not a checklist. Select patterns only when they support the task and visual direction.

Evidence key: ANA = reported in user-supplied audit; UNIVERSAL = general reusable pattern, not attributed to that reference.

## Entry and first impression
| ID | Pattern | Purpose / caution |
|---|---|---|
| M-01 | Header Fade + Slide | Briefly introduces navigation; do not delay access. |
| M-02 | Hero Text Mask Reveal | Editorial heading reveal; preserve semantic text and responsive wrapping. |
| M-03 | Hero Stagger | Sequence headline, support, CTA and media. |
| M-04 | Hero Image Scale + Fade | Introduces media; reserve dimensions and avoid cropping subject. |
| M-05 | Split/Clip Reveal | Reveal image/block through a mask; ensure fallback. |
| M-06 | Blur-to-Sharp Reveal | Selective emphasis; avoid motion discomfort and blurry text. |
| M-07 | Load/Intro Sequence | Brand introduction; short, skippable/non-blocking, never gate essential content. |

## Scroll and narrative
| ID | Pattern | Purpose / caution |
|---|---|---|
| M-08 | Scroll Fade/Reveal | Enter-viewport reveal; content visible without JS. |
| M-09 | Stagger on Scroll | Grouped reveals; avoid excessive delay. |
| M-10 | Scroll-linked Transform | Progress tied to scroll; respect native scrolling. |
| M-11 | Sticky Storytelling | Fixed panel with adjacent narrative; provide predictable exit. |
| M-12 | Scroll Pinning | Pinned sequence; use only when it improves comprehension. |
| M-13 | Parallax Layers | Depth between layers; modest movement, mobile fallback. |
| M-14 | Horizontal Scroll Scene | Horizontal narrative; keyboard/touch and vertical fallback. |
| M-15 | Progress Indicator | Reading or step progress; reflect real state. |
| M-16 | Section Transition | Visual continuity between sections without hiding content. |

## Image, SVG and graphics
| ID | Pattern | Purpose / caution |
|---|---|---|
| M-17 | Image Reveal Mask | Image reveal; preserve image semantics and focal point. |
| M-18 | Image Scale on Scroll | Controlled scale during scroll; prevent clipping/CLS. |
| M-19 | Image Parallax | Separate media movement; evaluate subject crop and reduced motion. |
| M-20 | Image Crossfade | Change between media; announce meaningful content changes. |
| M-21 | Animated SVG Stroke | Draw line/path; decorative SVG should be hidden from AT. |
| M-22 | Organic SVG Divider | Connect sections; visual ornament only when brand-appropriate. |
| M-23 | Shape Morph | Shape transformation; do not obscure information. |
| M-24 | Cursor-follow Media | Desktop pointer effect; never essential and disable on touch. |

## Components and transitions
| ID | Pattern | Purpose / caution |
|---|---|---|
| M-25 | Card Slide Transition | Step/quiz/card state change; retain keyboard context. |
| M-26 | Content Crossfade | Tabs/filter state; keep content perceivable. |
| M-27 | Accordion Expansion | Disclosure; native details/summary preferred when adequate. |
| M-28 | Modal/Drawer Transition | Panel transition; correct focus and Escape behavior required. |
| M-29 | Navigation State Transition | Active navigation feedback; not the only state cue. |
| M-30 | Page/Route Transition | Route change; avoid delaying navigation/history. |
| M-31 | CTA Hover/Focus | Action feedback; equivalent keyboard focus/active states. |
| M-32 | Card/Image Hover | Pointer affordance; provide touch/focus equivalent. |
| M-33 | Magnetic Interaction | Decorative pointer response; use rarely and never as sole target. |
| M-34 | Custom Cursor | Portfolio-specific effect; preserve native cursor fallback. |

## Continuous motion and audiovisual
| ID | Pattern | Purpose / caution |
|---|---|---|
| M-35 | Infinite Marquee | Continuous track; pause control and reduced-motion behavior. |
| M-36 | Auto Carousel | Timed slide change; pause and manual control required. |
| M-37 | Video Autoplay Loop | Silent contextual video; poster, controls, reduced-motion fallback. |
| M-38 | Video Scrub | Scroll-controlled frames; high media/performance cost. |
| M-39 | Gallery Crossfade | Gallery transition; preserve controls and current item state. |
| M-40 | Ambient Motion | Background movement; do not compete with content. |

## Timing and composition
| ID | Pattern | Purpose / caution |
|---|---|---|
| M-41 | Stagger Timeline | Orchestrate related elements; preserve sensible reading order. |
| M-42 | Easing System | Coherent acceleration/deceleration across product. |
| M-43 | Micro Feedback | Response to action/loading/success; never communicate state only through motion. |
| M-44 | Counter/Number Transition | Animate verified changing values only; do not invent statistics. |
| M-45 | Scroll Progress Reveal | Progress line/indicator linked to actual progress. |

## Selection rules
1. Define the user/business purpose before selecting a pattern.
2. Prefer a coherent small set over a high count.
3. Consider content, assets, viewport, performance, reduced motion and maintainability.
4. Do not count repeated instances of one pattern as different patterns.
5. Record chosen IDs in Motion Brief only when a brief is warranted.
6. Keep the pattern IDs stable; add new IDs only with documented behavior, use, fallback and QA.
