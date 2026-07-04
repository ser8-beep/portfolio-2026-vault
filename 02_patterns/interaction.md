# INTERACTION SYSTEM — PORTFOLIO WEBSITE

This document defines motion, scroll, and text interaction rules for the portfolio experience.
It prioritizes clarity, performance, and accessibility across mobile and desktop.

---

# 1. DESIGN PRINCIPLES

## 1.1 Motion Philosophy
- Motion is **functional, not decorative**
- Animations reinforce **reading hierarchy and narrative pacing**
- Every animation must have a **content-driven trigger**
- No continuous motion without user intent (scroll, hover, focus)

## 1.2 Performance Constraints
- 60fps target on mid-range mobile devices
- Avoid layout thrashing (no layout-triggered animations on scroll)
- Use `transform` and `opacity` only for animation
- Reduce motion fallback must fully disable:
  - scroll velocity effects
  - scramble animations
  - type animations

## 1.3 Accessibility Rules
- Respect `prefers-reduced-motion: reduce`
- All animated text must remain **readable without animation**
- No critical information should depend on animation timing

---

# 2. GLOBAL INTERACTION MODEL

## 2.1 Scroll as Primary Driver
Scroll controls:
- Section transitions
- Text reveal sequencing
- Parallax velocity shifts (subtle)
- Narrative pacing

## 2.2 Interaction States

| State | Behavior |
|------|--------|
| Idle | Static, readable layout |
| Enter View | Fade + slight translate (12–24px) |
| Active View | Scroll-linked animations enabled |
| Exit View | Fade out or compress spacing |

---

# 3. TEXT ANIMATION SYSTEM

## 3.1 Scrambled Text (Emphasis Reveal)

Use for:
- Headings
- Key statements
- Section intros
- First-time visibility only

### Behavior
- Initial render: scrambled characters
- Resolve into final text on:
  - 40–60% element visibility
- Duration: 600–900ms
- Character set: A–Z, 0–9, symbols (limited set for readability)

### Rules
- Never apply to paragraphs longer than 1–2 lines
- Never re-trigger on scroll-up
- Should feel like **semantic decoding**, not random animation

### Desktop vs Mobile
- Desktop: full scramble effect
- Mobile: reduced scramble cycles (fewer iterations)

---

## 3.2 Scroll Velocity Text (Parallax Typography)

Inspired by scroll velocity-driven movement.

Use for:
- Section headers
- Large typographic elements
- Background text layers (decorative)

### Behavior
- Text shifts horizontally based on scroll delta
- Movement intensity depends on scroll speed:
  - Slow scroll → subtle drift (1–2px/frame)
  - Fast scroll → stronger drift (4–8px/frame cap)

### Direction Rules
- Alternating sections:
  - Section A → left drift
  - Section B → right drift

### Constraints
- Must never interfere with legibility
- Must not overlap interactive UI elements
- Clamp movement range to prevent disorientation

### Mobile Adaptation
- Reduce to **opacity shift + slight translateY only**
- Disable horizontal velocity drift on small screens

---

## 3.3 Text Type (Progressive Reveal)

Use for:
- Body content
- Case study descriptions
- Long-form narrative sections

### Behavior
- Characters appear progressively on scroll
- Triggered when:
  - 25% of element enters viewport
- Reveal speed tied to scroll position, not time

### Rules
- Must allow instant full reveal if user scrolls fast
- Must not lock scrolling
- Should feel like **reading emergence**, not typing simulation

### Desktop vs Mobile
- Desktop: smooth character-by-character reveal
- Mobile: line-by-line reveal (performance optimization)

---

# 4. SCROLL INTERACTION RULES

## 4.1 Section Transition Model

Each section follows:

1. Enter (fade + slight upward motion)
2. Active (text + scroll effects enabled)
3. Exit (fade out + compress spacing)

Timing:
- Entry threshold: 20–30% viewport
- Exit threshold: 70–85% viewport

---

## 4.2 Scroll Velocity Mapping

| Scroll Speed | Effect Strength |
|-------------|----------------|
| Low | 0.2x motion |
| Medium | 0.6x motion |
| High | 1.0x capped motion |

Hard cap:
- Max translate: 8px/frame equivalent
- Max opacity shift: 0.15 delta per frame

---

# 5. RESPONSIVE BEHAVIOR

## 5.1 Desktop (≥1024px)
- Full animation system enabled
- Scramble + velocity + type animations active
- Multi-layer text motion allowed

## 5.2 Tablet (768–1023px)
- Reduced velocity intensity
- Scramble simplified (fewer iterations)
- Type animation remains line-based

## 5.3 Mobile (≤767px)
- Disable:
  - horizontal scroll velocity text
  - heavy scramble iterations
- Keep:
  - fade + translate transitions
  - line-based type reveal
- Prefer performance over expressiveness

---

# 6. INTERACTION TIMING SYSTEM

## 6.1 Default Timings
- Fade in: 300–500ms
- Scramble resolve: 600–900ms
- Type reveal per line: scroll-driven (not time-based)
- Exit transitions: 250–400ms

## 6.2 Scroll Sensitivity
- Use normalized scroll delta (not raw pixels)
- Apply smoothing factor (0.08–0.12)

---

# 7. IMPLEMENTATION NOTES

## 7.1 Recommended Stack
- requestAnimationFrame for scroll loop
- IntersectionObserver for entry triggers
- transform: translate3d for GPU acceleration

## 7.2 Anti-patterns to avoid
- No scroll event spam handlers
- No layout-triggered animation updates
- No uncontrolled re-renders per frame
- No animation dependency for content comprehension

---

# 8. CONTENT PRIORITIZATION RULE

If animation conflicts with readability:

> Always degrade animation first, never content clarity.

Priority order:
1. Readability
2. Navigation stability
3. Performance
4. Motion richness

---

# 9. FINAL SYSTEM BEHAVIOR

The interface should feel like:

- Text that **emerges as you read it**
- Motion that **responds to attention, not distracts from it**
- A system where scroll is a **narrative input**, not just navigation

---
