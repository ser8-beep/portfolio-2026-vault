# claude.md

## Summary
This document outlines the system expectations, architectural structure, and implementation roadmap for Shivani’s Product Design Portfolio. The project aims to translate a high-fidelity Figma vision into a maintainable, professional, and highly organized digital ecosystem.

---

## 1. Profile & Vision
*   **Owner:** Shivani [unclear]
*   **Role:** Senior Designer / UI/UX Lead (4 years experience)
*   **Location:** Mumbai
*   **Core Objective:** To sanitize, organize, and implement a maintainable portfolio that reflects a specific visual and communication direction.
*   **Visual Direction:** 
    *   Professional aesthetic: Grid backgrounds, simple cards, design-tool-inspired UI, glass effects.
    *   Clean and "sacrosanct" visual principles.
    *   Hybrid aesthetic: Professional work vs. a "handwritten/scrapbook" aesthetic for personal essays.

---

## 2. Content Strategy
The portfolio is divided into two primary thematic tracks:

### Professional Work
*   **Focus:** Designing systems that make sense.
*   **Output:** Product Design Case Studies.

### "000" Essays & Data Stories
*   **Focus:** Meditations on the systems we live in.
*   **Output:** Data Stories and a Journal/Scrapbook.
*   **Aesthetic:** Authentic, handwritten feel.

---

## 3. Technical Stack
*   **Framework:** Next.js (React-based) or Astro.
*   **Styling:** Tailwind CSS.
*   **Version Control:** GitHub.
*   **Backend/Database:** Firebase or Supabase.
*   **AI Integration:** Google AI Studio (for document creation).

---

## 4. Repository Architecture
The repository follows a **Feature-Based Structure** where branches mirror the Information Architecture (IA).

### Branching Strategy
*   `main`: Production-ready code.
*   `develop`: Ongoing Work-in-Progress (WIP) and integration.

### Folder Structure (`portfolio-vault`)
The `src` directory is organized into the following thematic modules:

#### 00 - Overview
*   `creative-vision.md`
*   `design-principles.md`
*   `ecosystem.md`
*   `architecture.md`
*   `glossary.md`
*   `package.json`
*   `constraints.md` (Forbidden practices/limitations)

#### 01 - Design System
*   `foundations/`: Typography, Colors, Grid, Spacing.
*   `breakpoints.md`
*   `components/`: Including status tracking.
*   `tokens/`

#### 02 - Libraries & Patterns
*   Interaction & States
*   Motion
*   Navigation Model
*   Feedback
*   Accessibility (WCAG Compliance)

#### 03 - System Governance
*   `workflow.md`
*   `decisions.md` (Change-log)
*   `change-lifecycle.md`
*   `schema-enforcement.md`
*   `folder-boundaries.md`
*   `API-strategy.md`

#### 04 - Assets
*   Static files and media.

#### 05 - Ecosystem Pages
*   `Home.md`
*   `Case Study/c-s-1.md`
*   `Data Story/d-s.md`
*   `Get in touch.md`
*   `About me.md`
*   `Resume.md`

---

## 5. Security & Quality Control
To ensure a maintainable and secure output, the following must be implemented:
*   **Access Controls:** Defined permissions for data.
*   **Encryption:** Requirements for sensitive data.
*   **Validation:** Strict input sanitization and validation steps.
*   **Authentication:** Secure user/admin entry.
*   **Deployment:** Secure deployment pipelines.

---

## 6. Roadmap

### Current Sprint (Active)
*   [Action] Create Home page.
*   [Action] Create Case Studies.

### Next Sprint
*   [Action] Create and add Data Stories.

---

## Ambiguity & Clarifications
*   **[Question]:** The notes mention both Next.js and Astro under "Tools/Stack." Is the intention to use one for the main site and another for specific pages, or is a final decision between the two still pending?
*   **[unclear]:** The surname of the owner on Page 1 is difficult to decipher (appears to be "Khu" or "Kher").
*   **[Decision]:** The notes suggest reordering and reorganizing for "optimal and maintainable output." This `claude.md` file serves as the first step in that reorganization.
