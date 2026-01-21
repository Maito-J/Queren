# Home Page

## Purpose
Primary marketing landing page that establishes trust, showcases services, and drives bookings.

## User Stories
- As a visitor, I want to quickly understand what Queren offers
- As a visitor, I want to see social proof (reviews) before booking
- As a visitor, I want an easy path to book a cleaning

## UI Sections

### 1. Hero
- Headline: "Professional cleaning, worry-free"
- Subheadline: Brief value prop
- Primary CTA: "Book Now" (pill button, links to /booking)
- Secondary CTA: "See Pricing"
- Background: Subtle lilac gradient with soft illustration

### 2. Trust Bar
- "500+ Happy Homes" | "4.9★ Average Rating" | "Vetted Cleaners"

### 3. Services Preview
- 3 cards: Regular, Deep, Custom
- Each with icon, title, short description, "Learn More" link

### 4. How It Works
- 3-step visual: Book → We clean → You relax
- Icons + brief descriptions

### 5. Testimonials Carousel
- 3-5 reviews with name, rating, quote
- Auto-rotate or manual navigation

### 6. Pricing Teaser
- "Transparent pricing starting at $89"
- Link to pricing page

### 7. CTA Banner
- "Ready for a sparkling home?"
- "Book Your Cleaning" button

### 8. Footer
- Navigation links, contact info, social links

## States
| State | Behavior |
|-------|----------|
| Loading | Skeleton loaders for testimonials |
| Error | Fallback static testimonials |

## Data Needed
- Testimonials from `reviews` table (top 5 by rating)
- Pricing from `pricing_config`

## Supabase Queries
```sql
SELECT r.rating, r.comment, p.full_name 
FROM reviews r 
JOIN profiles p ON r.client_id = p.id 
ORDER BY r.rating DESC, r.created_at DESC 
LIMIT 5;
```

## Acceptance Criteria
- [ ] Hero section renders with working CTAs
- [ ] Testimonials load dynamically
- [ ] All links navigate correctly
- [ ] Mobile responsive (stacked layout)
- [ ] Page loads in < 2 seconds
