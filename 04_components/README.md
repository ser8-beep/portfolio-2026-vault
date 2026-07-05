# Component Name

## Description
What the component is, why it exists, and when to use it.

---

## Anatomy
List of all parts of the component.

Example:
- Container
- Icon
- Label
- Badge
- Supporting Text

---

## Variants
Different visual versions.

Example:
- Primary
- Secondary
- Ghost
- Destructive

---

## Sizes
Supported sizes.

Example:
- XS
- S
- M
- L

Include:
- height
- padding
- icon size
- typography token

---

## States

Visual states.

- Default
- Hover
- Focus Visible
- Active / Pressed
- Disabled
- Loading
- Selected
- Visited (if applicable)
- Error (if applicable)

Describe exactly what changes.

---

## Behaviour

Explain interaction.

Examples:

- Hover animation
- Press animation
- Focus ring
- Loading behaviour
- Keyboard interaction
- Touch behaviour
- Long press (if applicable)

---

## Responsive Behaviour

How the component adapts.

Examples:

- collapses
- wraps
- hides labels
- changes spacing
- minimum touch target

---

## Props / API

Developer-facing API.

Example

variant
size
icon
disabled
loading
children
href
onClick

Include

- required
- optional
- default values

---

## Content Rules

Design guidance.

Examples

Maximum label length

Icon requirements

Do not wrap text

One icon maximum

No emojis

---

## Tokens Used

Reference every token category.

- Colors
- Typography
- Radius
- Spacing
- Shadows
- Motion
- Border
- Opacity
- Z-index

No hardcoded values permitted.

---

## Accessibility

Include

ARIA role

Keyboard navigation

Focus order

Screen reader behaviour

Contrast requirements

Touch target

Reduced motion behaviour

---

## Composition

What components may contain this component?

What components can this component contain?

Example

Button

✓ Icon

✓ Badge

✗ Text Field

---

## Usage Guidelines

Best practices.

Do

✓ Keep labels concise

✓ Use primary action once per section

Don't

✗ Use destructive buttons as primary

✗ Nest buttons

---

## Anti-patterns

Common mistakes.

Example

Using icon-only buttons without accessible labels

Using disabled buttons instead of explaining errors

Multiple primary buttons together

---

## Design Tokens Mapping

Explicit mapping.

Background → color.surface.primary

Padding → spacing.4

Radius → radius.md

Shadow → elevation.2

Typography → text.button.md

Transition → motion.fast

---

## Related Components

Links.

- Icon
- FAB
- Tooltip
- Menu

# Button

Standard interactive element for actions and navigation.

## Variants
- **Primary**: High emphasis, uses `{color.brand.primary}`.
- **Secondary**: Medium emphasis, uses `{color.brand.accent}`.
- **Ghost**: Low emphasis, transparent background.

## States
| State | Visual Change | Token Reference |
| :--- | :--- | :--- |
| Default | Solid Background | `{color.brand.primary}` |
| Hover | Brightness +10% | `{color.state.hover}` |
| Active | Scale 0.98 | `{motion.speed.fast}` |
| Disabled | Opacity 0.5 | `{color.state.disabled}` |

## Accessibility
- **Role**: `button` or `link` (if navigating).
- **Keyboard**: `Enter` or `Space` to trigger.
- **Focus**: 2px ring using `{color.brand.accent}`.
