# Landing Page Bubbles Effect - Master Plan

## Overview
Add subtle, animated background bubbles to the landing page (`/` route) that float gently, matching the existing pastel purple/lilac color palette, and enhance the visual experience without distracting from content.

## Phases

### Phase 1: Planning & Design (Current)
- [x] Analyze existing codebase structure and routing
- [x] Review color palette and CSS variables
- [x] Document technical approach
- [ ] Get user approval

### Phase 2: Implementation
- [ ] Create `LandingBackgroundBubbles.tsx` component
- [ ] Add dedicated CSS with keyframe animations
- [ ] Integrate component into `HomePage.tsx`
- [ ] Add configuration props (density, speed, opacity)

### Phase 3: Verification
- [ ] Test `prefers-reduced-motion` accessibility
- [ ] Performance testing (60fps target)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Visual review for subtlety

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Performance degradation | Scroll jank, high CPU | Cap bubbles at 15 max; use only `transform` and `opacity` animations; test on throttled CPU |
| Distracting visuals | Poor UX | Low opacity (0.1–0.3), slow speeds (15–25s duration), small sizes (8–30px) |
| Accessibility violation | Users with motion sensitivity | Respect `prefers-reduced-motion` media query to disable/reduce animations |
| Color mismatch | Visual inconsistency | Derive colors from existing CSS variables (`--color-primary`, `--color-primary-light`) |
| Z-index conflicts | Bubbles appearing over content | Use `z-index: -1` and `pointer-events: none` |

---

## Detailed Plan
See [landing-bubbles-effect.md](file:///c:/Users/jcgmo/OneDrive/Documents/Queren/plans/landing-bubbles-effect.md) for component structure, CSS strategy, and QA checklist.
