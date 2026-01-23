# SVG Icon System - Detailed Subplan

Step-by-step implementation for replacing emojis with a consistent SVG icon system.

## Step 1: Create Icon Component Structure

```
src/components/Icon/
├── Icon.tsx          # Main component
├── icons.ts          # SVG path definitions
├── Icon.css          # Optional styling
└── index.ts          # Barrel export
```

### 1.1 Create `icons.ts`

Define SVG paths for all icons. Use `currentColor` for stroke/fill.

**Icon List** (39 total):
- Navigation: `home`, `user`, `users`, `settings`, `menu`
- Content: `clipboard`, `calendar`, `clock`, `document`, `book`, `video`
- Actions: `check`, `x`, `plus`, `minus`, `arrowLeft`, `arrowRight`
- Finance: `dollar`, `creditCard`, `banknote`
- Status: `star`, `starFilled`, `sparkle`, `warning`, `info`
- Communication: `message`, `phone`, `headphones`
- Misc: `mapPin`, `chart`, `trendUp`, `refresh`, `lightbulb`, `broom`, `bottle`, `handshake`, `party`, `frown`, `wave`, `play`, `dot`

### 1.2 Create `Icon.tsx`

```tsx
// Props interface
interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  'aria-label'?: string;
  title?: string;
}

// Size mapping
const sizes = { sm: 16, md: 20, lg: 24 };

// Component renders SVG with path from icons.ts
```

### 1.3 Export from `index.ts`

```ts
export { Icon } from './Icon';
export type { IconName } from './icons';
```

---

## Step 2: Replace Emojis by File

### Priority Order (dependencies first)
1. **UI Components** (Alert, Stepper, Accordion) — used site-wide
2. **Layouts** (DashboardLayout, PublicLayout) — structural
3. **Auth Pages** (LoginPage, SignupPage) — simple
4. **Client Dashboard** — smallest page
5. **Worker Pages** — largest page
6. **Owner Pages** — complex
7. **Public Pages** (HomePage, FAQPage, BookingPage)

### Checklist

#### UI Components
- [ ] `Alert.tsx` — Replace `ICONS` object (lines 12-15)
- [ ] `Stepper.tsx` — Replace `−` (line 29)
- [ ] `Accordion.tsx` — Replace `−`/`+` (line 37)

#### Layouts
- [ ] `DashboardLayout.tsx` — Replace `✨` logo, `☰` menu (lines 33, 75)
- [ ] `PublicLayout.tsx` — Replace `👤` user icon (line 38)

#### Auth Pages
- [ ] `LoginPage.tsx` — Replace `✨` (line 35)
- [ ] `SignupPage.tsx` — Replace `✨` (line 56)

#### Client Dashboard
- [ ] `ClientDashboard.tsx` — Replace nav icons (lines 7-11), greeting (line 23), empty state (line 61)

#### Worker Pages
- [ ] `WorkerDashboard.tsx` — Replace nav icons (lines 5-12), greeting (line 20)
- [ ] `WorkerPages.tsx` — Replace nav icons (lines 7-14), all inline emojis (27 instances)

#### Owner Pages
- [ ] `OwnerPages.tsx` — Replace nav icons (lines 7-14), all inline emojis (50+ instances)

#### Public Pages
- [ ] `HomePage.tsx` — Replace features (lines 12-14), stats (line 46), testimonials (line 136)
- [ ] `FAQPage.tsx` — Replace category icons (lines 16-163)
- [ ] `BookingPage.tsx` — Replace service icons (lines 186-286)
- [ ] `BookingConfirmationPage.tsx` — Replace celebration (line 9), checkmark (line 25)

---

## Step 3: Update Nav Item Type

Current pattern uses `icon: string` in nav arrays. Update to render Icon component:

```tsx
// Before
{ to: '/worker', label: 'Dashboard', icon: '🏠' }

// After  
{ to: '/worker', label: 'Dashboard', icon: 'home' as const }

// In render
<Icon name={item.icon} size="sm" aria-hidden="true" />
```

---

## Step 4: Verify & Cleanup

1. **Search for remaining emojis**:
   ```powershell
   Select-String -Path "src/**/*.tsx" -Pattern "[^\x00-\x7F]"
   ```

2. **Run build**: `npm run build`

3. **Run lint**: `npm run lint`

4. **Visual check**: Open all pages in browser

5. **Accessibility check**: Verify `aria-hidden` on decorative icons

---

## File Summary

| Action | File | Changes |
|--------|------|---------|
| NEW | `src/components/Icon/Icon.tsx` | Main component |
| NEW | `src/components/Icon/icons.ts` | SVG definitions |
| NEW | `src/components/Icon/index.ts` | Exports |
| MODIFY | `src/components/ui/Alert/Alert.tsx` | Replace ICONS object |
| MODIFY | `src/components/ui/Stepper/Stepper.tsx` | Replace − |
| MODIFY | `src/components/ui/Accordion/Accordion.tsx` | Replace −/+ |
| MODIFY | `src/components/layout/DashboardLayout/DashboardLayout.tsx` | Replace ✨ ☰ |
| MODIFY | `src/components/layout/PublicLayout/PublicLayout.tsx` | Replace 👤 |
| MODIFY | `src/pages/auth/LoginPage.tsx` | Replace ✨ |
| MODIFY | `src/pages/auth/SignupPage.tsx` | Replace ✨ |
| MODIFY | `src/pages/client/ClientDashboard.tsx` | Replace all emojis |
| MODIFY | `src/pages/worker/WorkerDashboard.tsx` | Replace all emojis |
| MODIFY | `src/pages/worker/WorkerPages.tsx` | Replace all emojis |
| MODIFY | `src/pages/owner/OwnerPages.tsx` | Replace all emojis |
| MODIFY | `src/pages/public/HomePage/HomePage.tsx` | Replace all emojis |
| MODIFY | `src/pages/public/FAQPage/FAQPage.tsx` | Replace all emojis |
| MODIFY | `src/pages/public/BookingPage/BookingPage.tsx` | Replace all emojis |
| MODIFY | `src/pages/public/BookingPage/BookingConfirmationPage.tsx` | Replace 🎉 ✓ |

**Total: 3 new files, 15 modified files**
