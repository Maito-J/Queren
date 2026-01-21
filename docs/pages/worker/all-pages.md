# Worker Portal Pages

All pages share `WorkerLayout` with sidebar navigation.

---

# /worker - Dashboard

## Purpose
Worker home showing today's schedule, earnings snapshot, and alerts.

## UI Sections
1. **Welcome Banner**: "Welcome back, {name}!"
2. **Today's Schedule**: Jobs for today with times and addresses
3. **Quick Stats**: This week's earnings, Jobs completed, Rating
4. **Pending Actions**: New job requests needing response
5. **Alerts**: Verification status, training reminders

## Data Needed
```sql
SELECT * FROM bookings 
WHERE assigned_worker_id = {user_id} 
  AND DATE(scheduled_at) = CURRENT_DATE;
```

---

# /worker/onboarding - Onboarding & Verification

## Purpose
Guide new workers through verification process.

## UI Sections
1. **Progress Tracker**: Steps 1-4 with status icons
2. **Step 1: Personal Info** (from signup)
3. **Step 2: Document Upload**
   - Government ID (front/back)
   - Proof of address
   - Work authorization (if applicable)
4. **Step 3: Background Check** - Status display
5. **Step 4: Complete Training** - Link to training hub

## Form Fields
| Field | Type | Validation |
|-------|------|------------|
| id_front | File | Required, image |
| id_back | File | Required, image |
| proof_of_address | File | Required, PDF/image |

## Upload to Supabase Storage
```typescript
const { data } = await supabase.storage
  .from('verification_docs')
  .upload(`${userId}/${docType}`, file);
```

## States
| Status | UI |
|--------|-----|
| pending | "Under review" badge |
| approved | Green checkmark |
| rejected | Red X with reason |

---

# /worker/jobs - Available Jobs

## Purpose
View and respond to job requests.

## UI Sections
1. **Filter Bar**: Date range, Distance, Service type
2. **Job Cards**: Each showing:
   - Date & time
   - Service type
   - Location (city/neighborhood, not full address until accepted)
   - Estimated pay
   - Distance from worker home
   - "View Details" / "Accept" / "Decline" buttons
3. **Empty State**: "No available jobs right now. Check back soon!"

## Job Detail Modal
- Full address (after accept)
- Client notes
- Add-ons included
- Accept / Decline CTAs

---

# /worker/schedule - My Schedule

## Purpose
Calendar view of accepted jobs.

## UI Sections
1. **Week View Calendar**: Days as columns, jobs as blocks
2. **Agenda View Toggle**: List format
3. **Job Blocks**: Click to expand details
4. **Legend**: Upcoming, In Progress, Completed

---

# /worker/tracking - Time Tracking

## Purpose
Check in/out for active jobs.

## UI Sections
1. **Active Job Card** (if currently working):
   - Address, Client name, Service type
   - Start time, Elapsed time
   - "Check Out" button
2. **Today's Jobs**:
   - Each with "Check In" button when it's time
3. **Completion Form** (on check-out):
   - Upload before/after photos (optional)
   - Completion notes
   - Checklist confirmation

## Supabase Insert
```typescript
await supabase.from('job_events').insert({
  booking_id,
  worker_id,
  check_in: new Date()
});
// On check-out:
await supabase.from('job_events').update({
  check_out: new Date(),
  photo_urls,
  completion_notes
}).eq('id', eventId);
```

---

# /worker/earnings - Earnings & Payments

## Purpose
View earnings history and pending payouts.

## UI Sections
1. **Earnings Summary**:
   - This week: $XXX
   - This month: $XXX
   - Total: $XXX
2. **Payout Status**: Next payout date and amount
3. **Earnings Table**:
   | Date | Job | Hours | Earnings | Status |
4. **Payout History**: Past payments with dates

---

# /worker/training - Training Hub

## Purpose
Access training materials and guidelines.

## UI Sections
1. **Required Training**: Modules worker must complete
2. **Optional Resources**: Tips, best practices
3. **Module Cards**: Title, duration, completion status
4. **Module Viewer**: Text/video content

## Data
```sql
SELECT * FROM training_modules 
WHERE 'worker' = ANY(visible_to_roles)
ORDER BY sort_order;
```

---

# /worker/profile - Profile Settings

## Purpose
Update personal info, preferences, availability.

## Form Fields
| Field | Type |
|-------|------|
| full_name | Text |
| phone | Tel |
| avatar | File upload |
| bio | Textarea (shown to clients) |
| home_address | Address form |
| service_radius | Slider (5-25 km) |
| available_days | Multi-select |
| bank_info | (future: Stripe connect) |

---

## Acceptance Criteria (All Worker Pages)
- [ ] Sidebar navigation works
- [ ] Only verified workers can access jobs
- [ ] Check in/out updates database
- [ ] Earnings calculate correctly
- [ ] Mobile responsive
