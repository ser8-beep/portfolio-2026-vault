## Dependency Rules

Components must follow the repository hierarchy and dependency graph.

### Rules

- Components may depend only on lower-level directories.
- Components must never bypass intermediate abstraction layers.
- Components must never duplicate logic already defined in previous directories.
- If a value exists in Tokens, it must come from Tokens.
- If a pattern exists in Libraries & Patterns, reference it instead of redefining it.
- If behavior exists in another component, compose that component rather than recreating it.
- Circular dependencies are prohibited.
- When multiple sources define the same concern, always use the highest-priority source according to the repository hierarchy.

Dependency order:

01. 01_design_system
↓
02. 02_patterns
↓
03. 04_Components
↓
04. 05_Pages

A directory may only reference files from its own directory or any directory above it. It must never skip the hierarchy or reference higher-level implementations.
