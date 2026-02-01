# Product Requirements Document (PRD)

## Product Name

**Aqua2000 Component Showcase**

## Type

Internal, passion project

## Owner

Senior Product Manager

## Status

Draft

---

## 1. Purpose & Vision

### Purpose

Build a **React-based website** that showcases a 1:1 recreation of the **Apple Aqua (circa 2000)** design system. The site serves as a **living museum + practical reference** where internal contributors can:

* View components rendered live
* See exact design specs (dimensions, tokens, layout ratios)
* Inspect and copy the source code for each component

The site is intentionally simple and static-feeling, similar to **98.css**, prioritizing clarity, nostalgia, and technical transparency over polish or marketing.

### Vision

A lightweight, highly readable component showcase that feels like:

* a **technical artifact**, not a marketing site
* a **design system spec sheet brought to life**
* a faithful homage to Aqua’s original material, spacing, and interaction model

---

## 2. Goals

### Primary Goals

1. Showcase Aqua2000 components with **live previews and real code**
2. Document **exact specs** (tokens, spacing, anatomy) for 1:1 recreation
3. Enforce **predictable, composable React APIs**
4. Ensure **WCAG 2.1 compliance** for all showcased components

### Success Criteria (Internal)

* Every component page includes purpose, usage, props, a11y, and examples
* All atoms, molecules, and organisms are navigable via sidebar + routes
* Organisms include documented layout ratios and “golden compositions”
* Contributors can copy-paste examples without additional explanation

---

## 3. Non‑Goals

* Not a public-facing site
* Not a general-purpose design system for production apps
* Not a full macOS emulator or OS shell
* Not supporting theming beyond Aqua / Graphite variants

---

## 4. Target Users

### Primary Users

* Designers interested in Aqua’s historical design language
* Engineers implementing or studying Aqua-style UI components
* Internal demo/prototype builders

### User Needs

* “Show me what the component looks like.”
* “Show me the exact code used to build it.”
* “Tell me how it behaves with keyboard and screen readers.”
* “Tell me what is fixed vs flexible in complex layouts.”

---

## 5. Information Architecture

The site uses **sidebar navigation + client-side routes**.

### Navigation Groups (Atomic Design)

* **Foundations**

  * Tokens (colors, spacing, typography)
* **Atoms**

  * Button, Icon, Text, Spinner, Divider
* **Molecules**

  * TextField, Tabs, Popover, Menu
* **Organisms**

  * Window Frame, Dialog, Toolbar, Sidebar

Each route corresponds to one documentation page.

---

## 6. Core Requirements

### 6.1 Design Tokens

**Requirement**

* Define tokens for **colors and spacing** (and later typography, radius, shadows)
* Tokens must be the single source of truth for components

**Constraints**

* Tokens are implemented as CSS variables
* Spacing follows a **2px grid**, matching Aqua-era HIG guidance
* Semantic tokens (e.g., focus ring, surface) wrap raw values

**Documentation**

* Tokens page lists each token, value, and intended usage

---

### 6.2 Atomic Design Structure

**Requirement**

* Components are organized strictly as **Atoms → Molecules → Organisms**

**Rules**

* Atoms: single responsibility, no layout assumptions
* Molecules: small compositions of atoms
* Organisms: layout-defining compositions with documented ratios

**Documentation**

* Sidebar groups mirror atomic categories
* Each page clearly states the component’s level

---

### 6.3 WCAG 2.1 Compliance

**Requirement**
All showcased components must meet **WCAG 2.1 AA** requirements.

**Minimum Standards**

* Full keyboard operability
* Visible focus states
* Semantic HTML by default
* ARIA only when necessary
* Screen reader–friendly labeling

**Documentation**
Each component page must include an **Accessibility** section covering:

* Keyboard interactions
* ARIA roles/attributes
* Screen reader behavior

---

### 6.4 1:1 Organism Recreation

**Requirement**
Complex components (organisms) must be recreated at a **1:1 visual and structural ratio** relative to Aqua references.

**Definition of 1:1 (Internal)**

* Fixed dimensions documented (e.g., title bar height)
* Spacing and padding defined via tokens
* A canonical “golden composition” example

**Documentation Additions for Organisms**

* Specs table (measurements, tokens)
* Anatomy/slots description
* Notes on what may stretch vs what must remain fixed

---

### 6.5 Predictable Prop Names

**Requirement**
Prop naming must be consistent across the system.

**Standards**

* `variant` – visual style
* `size` – when applicable
* `disabled`, `required`, `readOnly`
* `isLoading` (boolean prefix)
* `startIcon` / `endIcon`
* Event handlers follow React conventions (`onClick`, `onChange`)

**Documentation**

* Full props table per component
* Each prop includes type, default, and description

---

### 6.6 Composition over Configuration

**Requirement**
Favor **composition patterns** over large prop surfaces.

**Guidelines**

* Use slots / subcomponents (e.g., `Dialog.Header`)
* Avoid props that control layout micro-details

**Documentation**

* “Recommended composition” examples
* Callouts for discouraged patterns

---

### 6.7 Polymorphic Components

**Requirement**
Components support polymorphism using an `as` prop.

**Standards**

* Default semantic element (e.g., `button`)
* Correct TypeScript inference
* Accessibility preserved when changing elements

**Documentation**

* Explicit polymorphism section
* Examples such as `Button as="a"`

---

## 7. Documentation Standards (Component Pages)

Every component page must include the following sections, in order:

1. **Purpose**
   What the component does and when to use it.

2. **Usage**
   Import statement and minimal example.

3. **Variants**
   Live preview of available visual styles.

4. **Props**
   Complete prop table (type, default, description).

5. **Specs**
   Measurements, tokens, anatomy (required for molecules and organisms).

6. **Accessibility**
   Keyboard support, ARIA usage, screen reader behavior.

7. **Examples**
   Common use cases with copyable code.

8. **View Code**
   Read-only view of the actual component source.

---

## 8. Functional Requirements

* Client-side routing (sidebar + routes)
* Live rendering of components
* Syntax-highlighted code blocks
* Copy-to-clipboard for examples and source
* Clear visual separation between preview and code

---

## 9. Technical Constraints

* React + TypeScript
* No backend; static hosting compatible
* Minimal dependencies
* Build-time source imports for code viewing

---

## 10. Risks & Mitigations

| Risk                      | Mitigation                                        |
| ------------------------- | ------------------------------------------------- |
| Scope creep               | Strict focus on showcase, not full docs platform  |
| Inconsistent APIs         | Enforce prop naming conventions early             |
| Accessibility regressions | A11y checklist required for every page            |
| Fidelity disputes         | Document specs and golden compositions explicitly |

---

## 11. Future Enhancements (Optional)

* Visual grid overlay for organism specs
* Side-by-side diff vs reference screenshots
* Token usage heatmap per component
* Dark/Graphite appearance toggle

---

## 12. Open Questions

* Should the site chrome itself use Aqua components?
* Do we freeze Aqua to a single OS version or document deltas?
* How strict should pixel-diff tolerance be for organisms?

---

**End of PRD**
