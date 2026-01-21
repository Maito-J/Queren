# Services Pages

## Overview
Three service-related pages explaining offerings and pricing.

---

# /services - Services Overview

## Purpose
Hub page showing all cleaning service types.

## UI Sections
1. **Header**: "Our Cleaning Services"
2. **Service Cards** (3 cards):
   - Regular Cleaning
   - Deep Cleaning  
   - Custom cleaning (contact for quote)
3. **Comparison Table**: Features by service type
4. **CTA**: "Get Your Quote" → /booking

## Acceptance Criteria
- [ ] Cards link to detail pages
- [ ] Comparison table renders correctly
- [ ] Mobile: cards stack vertically

---

# /services/regular - Regular Cleaning

## Purpose
Detail page for standard recurring cleaning service.

## UI Sections
1. **Hero**: Title, short description, starting price
2. **What's Included** (checklist):
   - Dusting all surfaces
   - Vacuuming floors & carpets
   - Mopping hard floors
   - Bathroom sanitization
   - Kitchen surface cleaning
   - Making beds
   - Trash removal
3. **Frequency Options**: Weekly, Bi-weekly, Monthly
4. **FAQ specific to Regular Cleaning**
5. **CTA**: "Book Regular Cleaning"

---

# /services/deep - Deep Cleaning

## Purpose
Detail page for intensive one-time or seasonal deep clean.

## UI Sections
1. **Hero**: Title, description, starting price
2. **What's Included** (extended checklist):
   - Everything in Regular PLUS:
   - Inside appliances (oven, fridge)
   - Baseboards & door frames
   - Light fixtures
   - Window sills & tracks
   - Cabinet fronts
3. **When to Book**: Moving, spring cleaning, post-renovation
4. **CTA**: "Book Deep Cleaning"

---

# /services/pricing - Pricing & Rates

## Purpose
Transparent pricing breakdown.

## UI Sections
1. **Pricing Philosophy**: "No hidden fees" messaging
2. **Price Calculator Preview**: Link to /booking for exact quote
3. **Rate Table**:
   | Service | Starting At |
   |---------|-------------|
   | Regular | $89 |
   | Deep | $149 |
4. **Factors Affecting Price**: sqft, rooms, addons
5. **Add-ons List** with prices
6. **FAQ**: Billing, cancellation, tips

## Acceptance Criteria
- [ ] Prices load from config (or match constants)
- [ ] Calculator link works
- [ ] Responsive tables
