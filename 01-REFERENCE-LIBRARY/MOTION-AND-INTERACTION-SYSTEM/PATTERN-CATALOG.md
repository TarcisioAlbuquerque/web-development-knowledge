# Motion Pattern Catalog

Stable IDs for briefs, code comments and QA. Patterns are options, not a required checklist. Choose by purpose and verify feasibility in the actual project.

**Evidence:** ANA/REPORTED = listed in the supplied Ana Marques audit; UNIVERSAL/RECOMMENDED = a reusable design pattern, not attributed to that source. See `CASE-STUDY-ANA-MARQUES.md`.

## 1. Entry and first impression
| ID | Pattern | Behavior / possible use |
|---|---|---|
| M-01 | Header Fade + Slide | Brief header entrance |
| M-02 | Hero Text Mask Reveal | Editorial headline reveal |
| M-03 | Hero Stagger | Sequence headline, support, CTA and media |
| M-04 | Hero Image Scale + Fade | Subtle media entrance |
| M-05 | Split/Clip Reveal | Reveal image or block through a mask |
| M-06 | Blur-to-Sharp Reveal | Controlled focus transition; use sparingly |
| M-07 | Load/Intro Sequence | Short brand intro only when it adds value |

## 2. Scroll and narrative
| ID | Pattern | Behavior / possible use |
|---|---|---|
| M-08 | Scroll Fade/Reveal | Reveal content entering viewport |
| M-09 | Stagger on Scroll | Sequence related elements |
| M-10 | Scroll-linked Transform | Progress follows scroll position |
| M-11 | Sticky Storytelling | Sticky panel alongside advancing content |
| M-12 | Scroll Pinning | Pin a section during a defined sequence |
| M-13 | Parallax Layers | Different movement rates create depth |
| M-14 | Horizontal Scroll Scene | Vertical scroll controls horizontal track |
| M-15 | Progress Indicator | Show reading or step progress |
| M-16 | Section Transition | Visual continuity between sections |

## 3. Image, SVG and graphics
| ID | Pattern | Behavior / possible use |
|---|---|---|
| M-17 | Image Reveal Mask | Reveal photography through a mask |
| M-18 | Image Scale on Scroll | Scale responds to scroll |
| M-19 | Image Parallax | Image moves at a different rate |
| M-20 | Image Crossfade | Transition between images |
| M-21 | Animated SVG Stroke | Draw an SVG path |
| M-22 | Organic SVG Divider | Connect sections with a decorative line |
| M-23 | Shape Morph | Morph SVG geometry |
| M-24 | Cursor-follow Media | Pointer-linked media on desktop |

## 4. Components and transitions
| ID | Pattern | Behavior / possible use |
|---|---|---|
| M-25 | Card Slide Transition | Move between quiz/deck steps |
| M-26 | Content Crossfade | Transition between tabs/filters |
| M-27 | Accordion Expansion | Expand/collapse content |
| M-28 | Modal/Drawer Transition | Enter/exit overlay or panel |
| M-29 | Navigation State Transition | Active navigation feedback |
| M-30 | Page/Route Transition | Transition between routes |
| M-31 | CTA Hover/Focus | Feedback for interactive states |
| M-32 | Card/Image Hover | Pointer/focus response |
| M-33 | Magnetic Interaction | Subtle pointer attraction; rarely needed |
| M-34 | Custom Cursor | Contextual cursor; always provide fallback |

## 5. Continuous and audiovisual
| ID | Pattern | Behavior / possible use |
|---|---|---|
| M-35 | Infinite Marquee | Continuous horizontal track |
| M-36 | Auto Carousel | Timed slide progression; offer pause |
| M-37 | Video Autoplay Loop | Muted loop when contextually useful |
| M-38 | Video Scrub | Video frames respond to scroll |
| M-39 | Gallery Crossfade | Transition between gallery images |
| M-40 | Ambient Motion | Slow background movement |

## 6. Timing and finish
| ID | Pattern | Behavior / possible use |
|---|---|---|
| M-41 | Stagger Timeline | Sequenced elements |
| M-42 | Easing System | Consistent motion curves |
| M-43 | Micro Feedback | Response to action/loading/success |
| M-44 | Counter/Number Transition | Animate verified numerical data |
| M-45 | Scroll Progress Reveal | Animate reading/section progress |

## Selection guidance
Ask: what user/brand goal does this serve? Is it understandable without motion? Does it delay content, harm performance, reduce accessibility or create mobile friction? Is native CSS/API enough? If no clear benefit, omit it. Do not count effects or require a fixed baseline. Stable IDs exist for traceability, not quotas.
