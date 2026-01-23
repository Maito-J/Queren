# Asset Image Replacement - Detailed Plan

## 1. Image Inventory

### Available Images in `src/assets/images/`

| Filename | Suggested Purpose | Estimated Aspect Ratio |
|----------|------------------|----------------------|
| `HOMEPAGE-wife-picks-up-sofa-while-her-husband-is-cleaning-dust-it-with-vacuum-cleaner.jpg` | **Hero image** - main homepage | Landscape (~16:9) |
| `medium-shot-woman-cleaning-home.jpg` | General cleaning, cards | Landscape |
| `medium-shot-woman-cleaning-home (1).jpg` | General cleaning, cards | Landscape |
| `front-view-woman-cleaning-home.jpg` | General cleaning | Landscape |
| `side-view-woman-cleaning-home.jpg` | General cleaning, about page | Landscape |
| `woman-cleaning-house.jpg` | Feature image | Landscape |
| `roommates-cleaning-home-together.jpg` | Team/About page | Landscape |
| `man-doing-professional-home-cleaning-service.jpg` | Services page | Landscape |
| `closeup-vacuum-cleaner-living-room.jpg` | Regular cleaning service | Landscape |
| `medium-shot-woman-cleaning-cabinet.jpg` | Interior cleaning | Landscape |
| `medium-shot-woman-cleaning-window.jpg` | Window cleaning | Landscape |
| `medium-shot-woman-cleaning-indoors.jpg` | Indoor cleaning | Landscape |
| `blonde-woman-protective-gloves-with-rag-cleaning-electric-stove-home-kitchen-girl-washing-black-shiny-surface-kitchen-top-concept-housework.jpg` | Kitchen cleaning | Landscape |
| `washing-process-gas-cookercloseup-dirty-gas-cooker-covered-with-chemical-washing-liquid-housework-household-chores-concept.jpg` | Deep cleaning detail | Close-up |
| `domestic-female-hand-wearing-gloves-cleaning-dirty-stove-after-cooking-using-sponge-washing-woman-housewife-enjoying-daily-household-closeup-top-view.jpg` | Kitchen deep clean | Close-up |
| `close-up-picture-female-hands-taking-gloves.jpg` | Safety/supplies | Close-up |
| `mature-woman-cleans-tile-bathroom.jpg` | Bathroom cleaning | Landscape |
| `man-s-hands-cleaning-sink-bathroom.jpg` | Bathroom detail | Close-up |
| `high-angle-messy-home-concept-with-couch.jpg` | Before cleaning / Deep clean | Landscape |
| `male-plumber-working-with-client-fix-kitchen-problems.jpg` | Professional service | Landscape |

---

## 2. Placeholder Search Patterns Found

### Pattern 1: Hero Image Placeholder
**File:** `src/pages/public/HomePage/HomePage.tsx` (line 54)
```tsx
<div className="hero-image-placeholder">
    🏠
</div>
```
**CSS:** `src/pages/public/HomePage/HomePage.css` (line 73)
```css
.hero-image-placeholder {
    width: 100%;
    height: 400px;
    background: var(--color-primary-100);
    /* ... */
}
```

### Pattern 2: PlaceholderPage Component
**File:** `src/App.tsx` (line 124-130)
```tsx
function PlaceholderPage({ title }: { title: string }) {
    return (
        <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>This page is coming soon.</p>
        </div>
    )
}
```
**Used by routes:**
- `/services`, `/services/regular`, `/services/deep`, `/services/pricing`
- `/about`, `/about/story`, `/about/areas`, `/about/values`, `/about/careers`
- `/policies`, `/contact`

### Pattern 3: Training Content Placeholders
**File:** `src/pages/worker/WorkerPages.tsx` (lines 696-706)
```tsx
<div className="video-placeholder">
    <span className="placeholder-icon">▶️</span>
    <p>Video Player</p>
</div>
// and
<div className="pdf-placeholder">
    <span className="placeholder-icon">📄</span>
    <p>PDF Viewer</p>
</div>
```

---

## 3. Placeholder-to-Image Mapping

| Location | Current Placeholder | Replacement Image | Notes |
|----------|-------------------|-------------------|-------|
| HomePage Hero | 🏠 emoji in div | `HOMEPAGE-wife-picks-up-sofa...jpg` | Primary hero, named for this purpose |
| PlaceholderPage (Services) | "Coming soon" text | Random from cleaning set | Use helper function |
| PlaceholderPage (About) | "Coming soon" text | `roommates-cleaning-home-together.jpg` | Team imagery |
| PlaceholderPage (Contact) | "Coming soon" text | `medium-shot-woman-cleaning-home.jpg` | Friendly professional |
| Training Video placeholder | ▶️ emoji | `man-doing-professional-home-cleaning-service.jpg` | Professional training context |
| Training PDF placeholder | 📄 emoji | `close-up-picture-female-hands-taking-gloves.jpg` | Safety/supplies context |

---

## 4. Implementation Strategy

### 4.1 Create Default Images Helper

**[NEW] `src/lib/defaultImages.ts`**
```typescript
// Import all images
import heroImage from '@/assets/images/HOMEPAGE-wife-picks-up-sofa-while-her-husband-is-cleaning-dust-it-with-vacuum-cleaner.jpg'
import teamImage from '@/assets/images/roommates-cleaning-home-together.jpg'
// ... more imports

export const DEFAULT_IMAGES = {
    hero: heroImage,
    team: teamImage,
    services: [/* array of service images */],
    training: {
        video: '...',
        document: '...'
    }
}

export function getDefaultImage(kind: 'hero' | 'team' | 'service' | 'training-video' | 'training-doc'): string {
    // Return appropriate image based on kind
}
```

### 4.2 Update HomePage Hero

**[MODIFY] `src/pages/public/HomePage/HomePage.tsx`**
- Import hero image
- Replace `<div className="hero-image-placeholder">🏠</div>` with `<img>` tag

**[MODIFY] `src/pages/public/HomePage/HomePage.css`**
- Update `.hero-image-placeholder` to `.hero-image` with `object-fit: cover`

### 4.3 Enhance PlaceholderPage

**[MODIFY] `src/App.tsx`**
- Import a default image for placeholder pages
- Add a subtle background image or decorative image above the "coming soon" text

### 4.4 Update WorkerPages Training Placeholders

**[MODIFY] `src/pages/worker/WorkerPages.tsx`**
- Import training context images
- Replace emoji placeholders with actual images as backgrounds

---

## 5. Performance Considerations

- **Lazy loading:** Add `loading="lazy"` to non-hero images
- **Dimensions:** Constrain image containers to prevent layout shift
- **Object-fit:** Use `object-fit: cover` for all photos to prevent distortion

---

## 6. Verification Plan

### Visual Inspection (Manual)
1. Run `npm run dev` to start the development server
2. Navigate to each page and verify:
   - [ ] `/` - Hero image displays correctly, no distortion
   - [ ] `/services` - Placeholder page shows relevant image
   - [ ] `/about` - Shows team/about imagery
   - [ ] `/worker/training` - Training placeholders have images

### Console Check
- Open browser DevTools → Console
- Navigate through all pages
- Verify: No 404 errors for images

### Layout Integrity
- Check that images don't stretch or distort
- Verify responsive behavior on mobile viewport
