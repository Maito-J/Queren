# Client Dashboard Pages

All pages share `ClientLayout` with sidebar navigation.

---

# /dashboard - Overview

## Purpose
Client home showing upcoming bookings and quick actions.

## UI Sections
1. **Welcome Banner**: "Hi, {name}! Your home is in good hands."
2. **Upcoming Booking Card**: Next scheduled cleaning with details
3. **Quick Actions**: Book new, View history, Update preferences
4. **Recent Activity**: Last 3 completed cleanings

## Data Needed
```sql
SELECT * FROM bookings 
WHERE client_id = {user_id} 
  AND scheduled_at > now() 
ORDER BY scheduled_at ASC LIMIT 1;
```

---

# /dashboard/profile - Profile Settings

## Purpose
Manage personal info and addresses.

## Form Fields
| Field | Type |
|-------|------|
| full_name | Text |
| email | Email (readonly) |
| phone | Tel |
| avatar | File upload |

## Address Section
- List of saved addresses
- Add new address form
- Set primary address
- Delete address

## Supabase Updates
```typescript
await supabase.from('profiles').update({...}).eq('id', user.id);
await supabase.from('addresses').upsert({...});
```

---

# /dashboard/billing - Billing & Payments

## Purpose
View payment history and manage payment methods.

## UI Sections
1. **Payment Method**: Card on file (masked) + Update button
2. **Billing History**: Table of past invoices
   - Date, Service, Amount, Status, Receipt link
3. **Upcoming Charges**: Next booking cost

## Table Columns
| Date | Service | Amount | Status |
|------|---------|--------|--------|
| Jan 10 | Regular Cleaning | $112.34 | Paid |

---

# /dashboard/history - Service History

## Purpose
View all past and upcoming bookings.

## UI Sections
1. **Filter Tabs**: All, Upcoming, Completed, Cancelled
2. **Booking Cards**: Each showing:
   - Date & time
   - Service type
   - Address
   - Cleaner name (if assigned)
   - Status badge
   - Total paid
   - "View Details" → modal or detail page
3. **Empty State**: "No bookings yet. Book your first cleaning!"

## Data
```sql
SELECT * FROM bookings 
WHERE client_id = {user_id} 
ORDER BY scheduled_at DESC;
```

---

# /dashboard/preferences - Cleaning Preferences

## Purpose
Set default preferences for future bookings.

## Form Fields
| Field | Type |
|-------|------|
| preferred_day | Multi-select (Mon-Sun) |
| preferred_time | Select (Morning/Afternoon/Evening) |
| pet_friendly | Toggle (We have pets) |
| eco_products | Toggle (Prefer eco-friendly products) |
| special_instructions | Textarea |
| access_instructions | Textarea (How to get in) |

## Save Behavior
- Auto-save on change with debounce
- Toast: "Preferences saved"

---

## Acceptance Criteria (All Dashboard Pages)
- [ ] Sidebar navigation works
- [ ] Data loads with loading states
- [ ] Empty states show helpful messages
- [ ] Forms save successfully
- [ ] Mobile sidebar collapses to hamburger menu
