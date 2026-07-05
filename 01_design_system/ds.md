# Design System

Tokens-first architecture: **primitives → semantic → component**. Values are consolidated to the smallest set that covers the real design — no near-duplicate colors, no invented font sizes.

Source of truth for typography, breakpoints, and accessibility rules: the `01_design_system` spec (Typography Engine + Breakpoints doc). Colors and radii are consolidated from the actual values found in the Figma file (`Portfolio-2026`, fileKey `O9k53BJS4f4pNUDd5FLmGc`).

## Layers

| Layer | File | Purpose |
|---|---|---|
| Primitive | [tokens/primitives.json](../tokens/primitives.json) | Raw, deduplicated values |
| Semantic | [tokens/semantic.json](../tokens/semantic.json) | Intent aliases + typography roles + responsive overrides |
| Component | [tokens/components.json](../tokens/components.json) | Button/card/tag/chip tokens, aliased only to semantic |

## Color consolidation

Original extraction from the Figma file had 14 distinct grays/blues; several were near-duplicates and were merged:

| Kept | Value | Merged from |
|---|---|---|
| `color.ink.900` | `#0F0E0E` | `#222222`, `#272727` (both within ~15 units of ink — same "primary ink" role) |
| `color.gray.700` | `#464646` | `#3C3C3C` (6-unit difference, same "strong border/secondary chrome" role) |
| `color.blue.600` | `#0011FF` | `#0021DA` (closer to bright accent than to the deep brand blue) |
| `color.blue.900` | `#002190` | `#17379F` (closer to deep brand blue) |

`color.paper.yellow/pink/sky` (`#F5E29A`/`#FFCBEA`/`#9DD5FB`) were **not** consolidated — verified against the actual file: all three live only in `Homepage/Second+2 Scroll`, on decorative "square paper" sticky-note elements in a notes/collage section, and render together side-by-side. They are **not** per-case-study branding (earlier drafts of this doc incorrectly called them "case-study accents" — corrected). No case-study frame uses any of these three colors.

## Typography — two layers only

- **Editorial (Archivo)** — headings and body/reading content. `400` regular, `700` bold. Never used for metadata.
- **System (Source Code Pro)** — metadata, labels, code-style annotations. `300` default, `400` only below 16px. `200` is forbidden except decorative text ≥32px (no current use case — no token defined for it).

Geist and Inter (found in the original file) are **out** — every text node maps to one of these two families. See [semantic.json](../tokens/semantic.json) `typography.*` for the fixed role → family/weight/size/lineHeight mapping (`heroTitle, pageTitle, sectionTitle, cardTitle, bodyLarge, body, bodySmall, caption, metadata, eyebrow, codeLabel`). Do not add new roles or invent new sizes — the scale is fixed by spec.

Two roles required assumptions because the spec didn't define their scale explicitly — see `_assumption` fields in [semantic.json](../tokens/semantic.json):
- `eyebrow` → mapped to `metadata` metrics (13px/20, Source Code Pro 300, uppercase, wide tracking)
- `codeLabel` → mapped to `micro` metrics (12px/18, Source Code Pro 300)

## Responsive tokens

Breakpoints (mobile-first, `min-width` gated):

| Name | Range |
|---|---|
| Mobile | 0–639px |
| Tablet | 640–1023px |
| Desktop | 1024px+ |

Base values in `typography.*` are **Desktop**. `typography.responsive.tablet` / `.mobile` in [semantic.json](../tokens/semantic.json) only override the four roles the spec re-scales (`heroTitle, pageTitle, sectionTitle, body`) — every other role and all `lineHeight`/`fontFamily`/`fontWeight` values stay fixed across breakpoints, per spec.

| Role | Desktop | Tablet | Mobile |
|---|---|---|---|
| heroTitle | 72 | 60 | 40 |
| pageTitle | 56 | 48 | 34 |
| sectionTitle | 44 | 38 | 28 |
| body | 18 | 18 | 16 (floor — spec gives 16–18 range, floor used) |

Mirrors 1:1 onto a Figma Variables collection with three modes (Desktop/Tablet/Mobile) bound to the corresponding frames/components.

## Layout — spacing & padding

From spec Section 7 (Spacing System). Each rule there is a range, not a fixed value, so each gets a `tight`/`loose` pair in [semantic.json](../tokens/semantic.json) `layout.spacing.*` rather than one arbitrary number:

| Role | Spec range | Tight | Loose |
|---|---|---|---|
| `paragraph` | 16–24px | 16 | 24 |
| `headingToParagraph` | 24–40px | 24 | 40 |
| `section` | 96–160px | 96 | 160 |
| `list` | 8–12px | 8 | 12 |

`160px` was added to the primitive spacing scale (`spacing.16`) to cover the top of the section range — it didn't exist before.

`layout.padding.*` is a separate general-purpose container/frame padding scale (`compact` 8, `default` 16, `comfortable` 24, `section` 48) — distinct from `components.json`'s per-component `paddingX`/`paddingY`, which stay component-specific and don't change.

**Pushed to Figma**: full `spacing/0` – `spacing/160` primitive scale (scoped `GAP` — Figma has no separate padding scope; padding and gap share it) plus the 12 `layout.*` semantic aliases above, all in the existing `Primitives`/`Semantic` collections. Existing node padding/gap was rebound where the value exactly matched the scale: **651 padding sides** and **145 item-spacings** bound across all 6 frames, zero errors.

Values with no exact match were left as authored (not snapped) — off-scale padding: `10, 60, 90, 120, 206, 310, 320`; off-scale gap: `10, 28, 30, 38, 56, 120, 136, 328, 714, -40`. The `layout.spacing.*`/`layout.padding.*` semantic aliases were **not** retroactively assigned to matched nodes — a bare value like `24` could correctly mean `paragraph.loose` or `headingToParagraph.tight` depending on context, so matched nodes bind to the role-agnostic `spacing/N` primitive instead. The semantic layer stays as the recommended vocabulary for new work.

## Accessibility (mandatory, from spec)

- Body text minimum 16px, minimum line-height ratio 1.5
- Max reading width 75ch, never justified
- Minimum contrast 4.5:1 (7:1 preferred for body)
- No thin fonts (<300) on UI-critical text; 200-weight is decorative-only, ≥32px
- Must support 200% zoom without layout break

Contrast check for the consolidated pairings:
- `color.text.primary` (`ink.900`) on `color.bg.canvas` (white): ~19.8:1
- `color.text.secondary` (`gray.600`) on white: ~7.1:1
- `color.text.link` (`blue.600`) on white: ~5.6:1

## Component library (node 42:426)

Real components built in Figma, naming per the file's own `cs-`/`ds-` convention (case-study-specific vs. reusable design-system component — matches the vault's `cs_`/`ds_` doc prefixes):

| Component | Figma node | Variants | New roles introduced |
|---|---|---|---|
| `header` | 42:76 | — | `headerBrand` (Archivo Black 900 — violation), `headerNavLabel` (SCP Bold 700 — violation) |
| `footer` | 42:325 | — | `footerLabel` (SCP SemiBold 600 — violation) |
| `csHero` | 42:326 | — | `csHeroMeta` (14px, mixed style — size/lineHeight only, like `progressLabel`) |
| `loader` | 42:77 | — | none — 100% reuse of `loaderTagline`/`loaderBrand`/`progressLabel` |
| `csCard` | 42:70 | Default, Hover | `csCardMeta` (14px, SCP SemiBold Italic — consistent single style, fully tokenized) |
| `dsCard` | 42:120 | v01–v06 | `dsCardLabelSmall` (20px, SCP ExtraLight — violation, worse than `eyebrowLarge`'s 24px instance) |
| `csSection` | 42:331 | Title & Description, Verbatim, Title & Pointers, Eyebrow and Description | `csSectionHeading` (48px Archivo Bold — compliant), `csSectionLabel` (16px SCP Medium — violation) |
| `csImage` | 42:425 | number=1, number=3, number=4 (no number=2 — matches the file as built) | none |

New primitives added: `radius.small` (5px — a genuine third radius tier alongside `control`(8)/`card`(24)), `lineHeight.48`(60px), plus `fontWeight`/`fontStyle` for Black(900)/Bold(700, system)/Medium(500, system)/SemiBold Italic (system).

Two real values were consolidated rather than left as noise: the Loader's progress-track color `#CACACA` → `gray.200` (15-unit difference, same threshold as earlier gray merges), and 13 pure-black `#000000` fills in the footer → `ink.900` (imperceptible 15-unit difference).

Correction: `color.paper.*` was previously documented as homepage-only decoration. `ds-card` (v01/v04/v05) also uses it as a card background accent — comment updated in [primitives.json](../tokens/primitives.json), still not per-case-study branding.

**Pushed to Figma**: all values above are live in `Primitives`/`Semantic` — 14 fills, 21 radii, 56 font-size+line-height pairs, 133 paddings, 29 gaps bound across the 8 components, zero errors.

7 of the 8 new roles violate the spec's weight rules (only `csSectionHeading` is compliant) — same call as the earlier exception roles: sanction these weights in the spec, or push the actual nodes to compliant weights. Not changed without your say-so.

## Sync targets

- **Figma Variables**: three collections live in the file (`Portfolio-2026`, fileKey `O9k53BJS4f4pNUDd5FLmGc`):
  - `Primitives` — consolidated colors, radius (3 tiers), fixed-scale font sizes/line-heights, spacing scale (0–160px), plus `fontFamily`/`fontStyle` STRING variables.
  - `Semantic` — color/radius/elevation/layout aliases, and one set of variables per typography role (component-library roles included).
  - `Breakpoint` — 3 modes (Desktop/Tablet/Mobile), holding `fontSize` for the 4 roles the spec re-scales (`heroTitle`, `pageTitle`, `sectionTitle`, `body`).
- **Style Dictionary**: `style-dictionary.config.js` builds `src/styles/tokens.css` / `.ts` from the three JSON sources.
- **Figma rebind status**: complete across all 6 top-level frames (Homepage × 2, Loader, 3 case studies) plus the 8-component library — fills, corner radii, every in-scale font size, padding, and gap bound to variables; 81 non-Archivo/Source-Code-Pro text nodes (Geist, Inter) swapped to Archivo Regular. Zero errors throughout.

## Exception roles (off-scale sizes)

The spec says "do not invent new font sizes," but 31 real text nodes use sizes outside the fixed scale (10/24/32/64px). Rather than silently resizing them to the nearest defined role, they were tokenized as-is under a separate `_exceptionComment` block in [semantic.json](../tokens/semantic.json) — same binding treatment (fontSize/lineHeight variables), just outside the spec's sanctioned scale.

| Role | Size/LH | Family + weight | Used for | Spec-compliant? |
|---|---|---|---|---|
| `tagLabel` | 24/36 | Archivo SemiBold (600) | case tags ("Insurance", "maternity") | weight not in spec's 400/700 set |
| `eyebrowLarge` | 24/36 | Source Code Pro ExtraLight (200) | homepage section labels | **no** — 200 forbidden below 32px (Section 5) |
| `loaderTagline` | 24/36 | Source Code Pro SemiBold (600) | loader tagline strip | weight not in spec's 300/400 set |
| `footerSignature` | 24/36 | Archivo Regular (400) | case-study footer signature | yes |
| `heroCompact` | 64/76 | Archivo Bold (700) | secondary hero headline | yes |
| `heroCompactLight` | 64/76 | Archivo Light (300) | "Meditations..." variant | **no** — editorial layer is 400/700 only (Section 1) |
| `loaderBrand` | 32/44 | Archivo ExtraBold (800) | loader nameplate | **no** — editorial layer is 400/700 only (Section 1) |
| `progressLabel` | 10/16 | mixed (Italic + Bold, not tokenized) | loader progress text | size itself not in scale |

Three roles above are real spec violations, not just scale gaps — they need an explicit call: relax the spec's weight rules to sanction them, or push the two nodes each to a compliant weight (`eyebrowLarge`→Light 300, `heroCompactLight`→Bold or Regular 400, `loaderBrand`→Bold 700). Not changed yet — flag before I touch node-level weights, since that's a visual change beyond tokenization.
