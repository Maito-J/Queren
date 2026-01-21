# Booking Page (Cost Calculator)

## Purpose
Interactive booking flow with live-updating cost calculator. The core conversion page.

## User Stories
- As a client, I want to see the exact price before booking
- As a client, I want to customize my cleaning with add-ons
- As a client, I want the total to update as I make changes
- As a client, I want no surprise fees at checkout

## UI Sections

### 1. Page Header
- Title: "Book Your Cleaning"
- Subtitle: "Get an instant quote — no hidden fees"

### 2. Two-Column Layout (Desktop)
**Left Column: Form Sections**
- Section A: Service Type
- Section B: Home Details
- Section C: Add-ons
- Section D: Schedule
- Section E: Contact & Address
- Section F: Review & Confirm

**Right Column: Sticky Summary**
- Scrolls with user (position: sticky)
- Shows live total, line items, CTA

### Mobile Layout
- Single column, form first
- Sticky bottom sheet for summary

---

## Form Fields

### Section A: Service Type
| Field | Type | Validation |
|-------|------|------------|
| service_type | Radio | Required. Options: Regular ($89+), Deep ($149+) |

### Section B: Home Details
| Field | Type | Validation |
|-------|------|------------|
| sqft | Number input | Required, min 200, max 10000 |
| bedrooms | Stepper (1-6) | Required, default 2 |
| bathrooms | Stepper (1-5) | Required, default 1 |

### Section C: Add-ons
| Field | Type | Price |
|-------|------|-------|
| fridge | Checkbox | +$25 |
| oven | Checkbox | +$30 |
| dishes | Checkbox | +$15 |
| cabinets | Checkbox | +$40 |
| laundry | Checkbox | +$20 |

### Section D: Schedule
| Field | Type | Validation |
|-------|------|------------|
| date | Date picker | Required, min today + 1 day |
| time | Select | Required. Options: Morning, Afternoon, Evening |

### Section E: Contact & Address
| Field | Type | Validation |
|-------|------|------------|
| full_name | Text | Required, min 2 chars |
| email | Email | Required, valid email |
| phone | Tel | Required, 10 digits |
| street | Text | Required |
| city | Text | Required |
| postal_code | Text | Required, valid Canadian postal |

### Section F: Review
- Summary of all selections
- Final total with tax breakdown
- Terms checkbox
- "Confirm Booking" button

---

## Sticky Summary Panel

```
┌─────────────────────────┐
│  Your Cleaning Quote    │
├─────────────────────────┤
│ Regular Cleaning   $89  │
│ 1500 sqft         +$15  │
│ 3 bedrooms        +$30  │
│ 2 bathrooms       +$40  │
│ Inside Fridge     +$25  │
├─────────────────────────┤
│ Subtotal         $199   │
│ HST (13%)        $25.87 │
├─────────────────────────┤
│ TOTAL           $224.87 │
│ Est. 2.5 hours          │
├─────────────────────────┤
│ [    Book Now    ]      │
└─────────────────────────┘
```

### Sticky Behavior
- Desktop: `position: sticky; top: 24px;`
- Sentinel element triggers `.is-stuck` class via IntersectionObserver
- Transition: `transform: translateY(-10px)` → `translateY(0)` on stick

---

## States
| State | Behavior |
|-------|----------|
| Loading | Button shows spinner, disabled |
| Error | Red alert above form, scroll to top |
| Success | Redirect to confirmation page |
| Invalid postal | Show "Not in service area" message |

## Reassurance Microcopy
- After Service Type: "Great choice! Our cleaners love this service."
- After Home Details: "Got it! We'll match you with an expert."
- After Add-ons: "These extras make your home sparkle!"
- After Schedule: "Perfect timing. You can reschedule later if needed."
- Before Submit: "No payment required until service day. Cancel anytime."

---

## Data Needed
- `pricing_config` for base rates and addon prices
- Service area postal codes (hardcoded or from config)

## Supabase Insert
```typescript
const { error } = await supabase.from('bookings').insert({
  client_id: user.id,
  service_type: formData.service_type,
  sqft: formData.sqft,
  bedrooms: formData.bedrooms,
  bathrooms: formData.bathrooms,
  addons: selectedAddons, // jsonb array
  scheduled_at: combinedDateTime,
  status: 'pending',
  price_breakdown: priceBreakdown, // jsonb
  total: calculatedTotal,
  notes: formData.notes
});
```

---

## Acceptance Criteria
- [ ] Price updates instantly on any input change
- [ ] Sticky summary follows scroll on desktop
- [ ] Mobile shows sticky bottom bar with total + CTA
- [ ] Form validates all required fields
- [ ] Invalid postal shows service area error
- [ ] Successful booking creates database record
- [ ] User redirected to confirmation with booking ID
- [ ] Line items match calculated total exactly
- [ ] Tax calculated correctly (13% HST)
