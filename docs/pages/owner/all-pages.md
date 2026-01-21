# Owner Portal Pages

All pages share `OwnerLayout` with sidebar navigation.

---

# /owner - Dashboard (KPIs)

## Purpose
Business overview with key performance indicators.

## UI Sections
1. **Date Range Picker**: This week, This month, Custom
2. **KPI Cards**:
   - Total Revenue
   - Total Bookings
   - Active Cleaners
   - Average Rating
3. **Revenue Chart**: Line chart, daily/weekly
4. **Bookings Chart**: Bar chart by service type
5. **Recent Activity Feed**: Latest bookings, reviews, issues

## Data Queries
```sql
-- Revenue
SELECT SUM(total) FROM bookings WHERE status = 'completed' AND created_at > {date};
-- Bookings count
SELECT COUNT(*) FROM bookings WHERE created_at > {date};
```

---

# /owner/bookings - Bookings Management

## Purpose
View all bookings, assign workers, update status.

## UI Sections
1. **Filter Bar**: Status, Date range, Cleaner, Service type
2. **Bookings Table**:
   | ID | Date | Client | Service | Cleaner | Status | Total | Actions |
3. **Actions**: Assign cleaner, Change status, View details
4. **Assign Modal**: Dropdown of available cleaners

## Status Options
- pending, confirmed, in_progress, completed, cancelled

---

# /owner/cleaners - Cleaners Management

## Purpose
Manage cleaner roster and verification.

## UI Sections
1. **Stats Bar**: Total cleaners, Active, Pending verification
2. **Cleaners Table**:
   | Name | Status | Jobs Completed | Rating | Joined | Actions |
3. **Actions**: View profile, Approve verification, Deactivate
4. **Add Cleaner** button (invites new worker)

## Verification Status Filter
- All, Pending, Approved, Rejected

---

# /owner/pricing - Pricing Configuration

## Purpose
Edit base rates and add-on prices.

## UI Sections
1. **Base Rates Form**:
   | Service | Rate | Save |
   | Regular | $89 | ✓ |
   | Deep | $149 | ✓ |
2. **Add-ons Table**:
   | Add-on | Price | Active | Actions |
3. **Rate Modifiers** (future): Location-based, seasonal

## Supabase Update
```typescript
await supabase.from('pricing_config').upsert({
  key: 'base_regular',
  value: newRate
});
```

---

# /owner/revenue - Revenue & Payroll

## Purpose
Financial overview and worker payments.

## UI Sections
1. **Revenue Summary**:
   - Gross revenue
   - Worker payouts
   - Net profit
2. **Revenue Breakdown**: By service type (pie chart)
3. **Pending Payouts Table**:
   | Worker | Jobs | Amount | Action |
4. **Payout History**
5. **Export CSV** button

---

# /owner/reviews - Reviews Overview

## Purpose
Monitor customer satisfaction.

## UI Sections
1. **Average Rating**: Big number with trend
2. **Rating Distribution**: 5-star bar chart
3. **Recent Reviews**: Card list with:
   - Client name, Rating, Comment, Date
   - Link to booking
4. **Filter**: By rating, date range

---

# /owner/support - Support Queue

## Purpose
Handle customer issues and disputes.

## UI Sections
1. **Open Issues Table**:
   | ID | Type | Client | Booking | Created | Priority | Actions |
2. **Issue Types**: Refund request, Complaint, Reschedule
3. **Issue Detail View**:
   - Booking info
   - Client message
   - Resolution notes
   - Mark resolved button

---

## Acceptance Criteria (All Owner Pages)
- [ ] Only owners can access these routes
- [ ] KPIs calculate correctly
- [ ] Cleaner assignment works
- [ ] Pricing updates save to database
- [ ] CSV export works
- [ ] Mobile responsive (tables scroll horizontally)
