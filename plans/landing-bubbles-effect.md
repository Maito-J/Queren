# Landing Page Bubbles Effect - Detailed Implementation Plan

## Goal
Create a subtle, performant animated bubble background effect for the landing page (`/` → `HomePage`) that:
- Adds visual polish without distraction
- Respects user accessibility preferences
- Performs smoothly at 60fps
- Matches the existing pastel purple/lilac theme

---

## Proposed Changes

### Component Structure

#### [NEW] [LandingBackgroundBubbles.tsx](file:///c:/Users/jcgmo/OneDrive/Documents/Queren/src/components/ui/LandingBackgroundBubbles/LandingBackgroundBubbles.tsx)

```tsx
interface BubbleConfig {
  density?: number      // Number of bubbles (default: 12, max: 20)
  minSpeed?: number     // Minimum animation duration in seconds (default: 15)
  maxSpeed?: number     // Maximum animation duration in seconds (default: 25)
  minOpacity?: number   // Minimum bubble opacity (default: 0.1)
  maxOpacity?: number   // Maximum bubble opacity (default: 0.3)
}

export function LandingBackgroundBubbles(props: BubbleConfig): JSX.Element
```

**Responsibilities:**
- Generate bubble elements with randomized properties
- Apply CSS classes with CSS variables for customization
- Render as a fixed/absolute positioned container behind content

---

### CSS Strategy

#### [NEW] [LandingBackgroundBubbles.css](file:///c:/Users/jcgmo/OneDrive/Documents/Queren/src/components/ui/LandingBackgroundBubbles/LandingBackgroundBubbles.css)

```css
/* Container */
.bubble-background {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

/* Individual bubble (circle) */
.bubble {
  position: absolute;
  border-radius: 50%;
  background: var(--color-primary-light);
  filter: blur(1px);
  animation: float-up var(--duration) ease-in-out infinite;
  opacity: var(--bubble-opacity);
}

/* Float animation - uses ONLY transform for GPU acceleration */
@keyframes float-up {
  0% {
    transform: translateY(100vh) translateX(0);
  }
  50% {
    transform: translateY(50vh) translateX(var(--sway, 20px));
  }
  100% {
    transform: translateY(-10vh) translateX(0);
  }
}

/* Accessibility: Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .bubble {
    animation: none;
    opacity: calc(var(--bubble-opacity) * 0.5);
  }
}
```

---

### Palette Sourcing

| CSS Variable | Value | Usage |
|--------------|-------|-------|
| `--color-primary` | `#9B7ED9` | Accent color reference |
| `--color-primary-light` | `#C4B5E0` | Primary bubble color |
| `--color-primary-50` | `#F5F0FA` | Alternate (very faint) bubble color |

**Strategy:** Use `--color-primary-light` as the main bubble color with very low opacity (0.1–0.3) to keep bubbles subtle and cohesive with the lilac theme.

---

### Integration

#### [MODIFY] [HomePage.tsx](file:///c:/Users/jcgmo/OneDrive/Documents/Queren/src/pages/public/HomePage/HomePage.tsx)

Add the `LandingBackgroundBubbles` component as the first child inside the `.home-page` wrapper:

```diff
+ import { LandingBackgroundBubbles } from '@/components/ui'

export function HomePage() {
    return (
        <div className="home-page">
+           <LandingBackgroundBubbles />
            {/* Hero */}
            <section className="hero">
            ...
```

#### [MODIFY] [index.ts](file:///c:/Users/jcgmo/OneDrive/Documents/Queren/src/components/ui/index.ts) (Component Export)

Add export for new component.

---

## Technical Constraints

| Constraint | Implementation |
|------------|----------------|
| Pure CSS animations | Using CSS `@keyframes` only (no JS animation libs) |
| GPU-accelerated | Only `transform` and `opacity` properties animated |
| DOM limit | Cap at 15–20 bubble elements to minimize repaints |
| No external libs | Using existing CSS variables and vanilla React |
| z-index safety | `z-index: -1` + `pointer-events: none` |

---

## Verification Plan

### Automated Tests
*No existing test framework detected in the project. Manual verification will be used.*

### Manual Verification

**1. Visual Subtlety Check**
   - Run `npm run dev`
   - Navigate to `http://localhost:5173/`
   - Verify bubbles are visible but faint (not distracting)
   - Confirm bubbles sit behind all content (text, buttons readable)

**2. Reduced Motion Test**
   - In browser DevTools → Rendering → Enable "Emulate CSS media: prefers-reduced-motion: reduce"
   - Refresh page
   - Verify bubbles are either static or hidden

**3. Performance Test**
   - Open DevTools → Performance tab
   - Record a 5-second session while scrolling the landing page
   - Confirm no dropped frames (green bars in frame timing)
   - CPU usage should remain low (<20%)

**4. Cross-Browser Test**
   - Test in Chrome, Firefox, and Safari (or Edge as Safari proxy on Windows)
   - Verify animations play smoothly in all browsers

**5. Responsive Test**
   - Resize browser to mobile widths (375px, 768px)
   - Verify bubbles still appear correctly and don't overflow

---

## QA Checklist

- [ ] Bubbles render on landing page only (`/` route)
- [ ] Bubbles float upward with slight horizontal sway
- [ ] Bubble sizes are randomized (8–30px range)
- [ ] Bubble opacity is low (0.1–0.3)
- [ ] Bubbles use `--color-primary-light` from theme
- [ ] `prefers-reduced-motion` disables/reduces animation
- [ ] No scroll jank; smooth 60fps
- [ ] Bubbles don't block clicks (`pointer-events: none`)
- [ ] Bubbles stay behind content (`z-index: -1`)
- [ ] Works in Chrome, Firefox, Safari/Edge
- [ ] Component is reusable with configurable props
