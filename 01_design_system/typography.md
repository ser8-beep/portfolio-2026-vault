# Typography Engine (UX/UI Portfolio Design System)

This document defines a strict typography system for a UX/UI portfolio.  
It enforces semantic hierarchy, accessibility constraints, and font-role separation.

---

# 1. Core Design Model

This system has two typography layers:

## Layer A — Editorial Layer (Archivo)

Used for:
- Headings
- Page titles
- Narrative hierarchy

Font:
- Archivo 700 → headings
- Archivo 400 → body text

---

## Layer B — System Layer (Source Code Pro)

Used for:
- Metadata
- Labels
- System annotations
- UI descriptors

Font rules:
- Source Code Pro 300 (default)
- Source Code Pro 400 (only for text <16px)

**STRICT RULE:**  
Never use Source Code Pro for long-form reading content.

---

# 2. Semantic Typography Roles

All text MUST map to one of the following roles:

- heroTitle
- pageTitle
- sectionTitle
- cardTitle
- eyebrow
- bodyLarge
- body
- bodySmall
- caption
- metadata
- codeLabel

No custom roles allowed.

---

# 3. Type Scale (DO NOT MODIFY)

## heroTitle
- size: 72
- lineHeight: 84
- font: Archivo
- weight: 700

## pageTitle
- size: 56
- lineHeight: 68
- font: Archivo
- weight: 700

## sectionTitle
- size: 44
- lineHeight: 56
- font: Archivo
- weight: 700

## cardTitle
- size: 36
- lineHeight: 48
- font: Archivo
- weight: 700

## bodyLarge
- size: 20
- lineHeight: 34
- font: Archivo
- weight: 400

## body
- size: 18
- lineHeight: 30
- font: Archivo
- weight: 400

## bodySmall
- size: 16
- lineHeight: 28
- font: Archivo
- weight: 400

## caption
- size: 14
- lineHeight: 22
- font: Archivo
- weight: 400

## metadata
- size: 13
- lineHeight: 20
- font: Source Code Pro
- weight: 300

## micro
- size: 12
- lineHeight: 18
- font: Source Code Pro
- weight: 300

---

# 4. Accessibility Rules (MANDATORY)

- Minimum body font size: 16px
- Minimum line-height ratio: 1.5
- Maximum reading width: 75 characters (75ch)
- Minimum contrast: 4.5:1 (7:1 preferred for body text)
- No thin fonts (<300) for UI-critical text
- No stroke-only text as sole information carrier
- No animation on body text
- Must support 200% zoom without layout break

---

# 5. Font Weight Rules (Critical Update)

## Source Code Pro usage

- 300 (Light): default for metadata, labels, subheadings
- 400 (Regular): only when size < 16px and readability is reduced at 300
- 200 (Extra Light): forbidden except decorative text ≥ 32px

**Rule of thumb:** If unsure → use 300.

---

# 6. Layout Rules

- Body text: left-aligned
- Headings: left-aligned by default
- Center alignment: only for hero sections
- Never justify text
- Never exceed 75ch reading width

---

# 7. Spacing System

- Paragraph spacing: 16–24px
- Heading → paragraph: 24–40px
- Section spacing: 96–160px
- List spacing: 8–12px

---

# 8. Case Rules

- Headings: sentence case
- Metadata: sentence case
- Eyebrows: uppercase allowed
- Buttons: sentence case only
- Avoid ALL CAPS for long-form content

---

# 9. Stroke Typography Rules

Stroke text is decorative only.

Constraints:
- Minimum size: 36px
- Minimum stroke width: 1.5px
- Must have filled fallback
- Never used for body or metadata
- Must not carry meaning alone

---

# 10. Responsive Rules

## Desktop
- heroTitle: 72
- pageTitle: 56
- sectionTitle: 44
- body: 18

## Tablet
- heroTitle: 60
- pageTitle: 48
- sectionTitle: 38
- body: 18

## Mobile
- heroTitle: 40
- pageTitle: 34
- sectionTitle: 28
- body: 16–18

**Rule:** Body text must never go below 16px.

---

# 11. Output Constraints

When generating UI or typography systems:

- Use only defined semantic roles
- Do not invent new font sizes
- Do not mix fonts within a single sentence
- Do not override accessibility constraints
- Do not reduce readability for aesthetics

---

# 12. System Intent

This system enforces:

- Accessibility-first design
- System-driven hierarchy
- Editorial clarity
- Predictable UI structure
- Separation of narrative vs metadata language

**Archivo = human reading layer**  
**Source Code Pro = system information layer**
