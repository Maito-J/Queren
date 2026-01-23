import { useState } from 'react'
import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button, Input, Badge, Alert } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import './OwnerPages.css'

const ownerLinks: { to: string; label: string; icon: IconName }[] = [
    { to: '/q-admin', label: 'Dashboard', icon: 'chart' },
    { to: '/q-admin/bookings', label: 'Bookings', icon: 'clipboard' },
    { to: '/q-admin/cleaners', label: 'Cleaners', icon: 'users' },
    { to: '/q-admin/training', label: 'Training', icon: 'book' },
    { to: '/q-admin/pricing', label: 'Pricing', icon: 'dollar' },
    { to: '/q-admin/revenue', label: 'Revenue', icon: 'trendUp' },
    { to: '/q-admin/reviews', label: 'Reviews', icon: 'star' },
    { to: '/q-admin/support', label: 'Support', icon: 'headphones' },
]

export { ownerLinks }

// ============================================
// OWNER DASHBOARD - QUEREN'S COMMAND CENTER
// ============================================
export function OwnerDashboard() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <DashboardLayout title="Business Dashboard" links={ownerLinks}>
            {/* Welcome Banner */}
            <Card className="welcome-banner-owner mb-6">
                <CardBody>
                    <div className="welcome-content">
                        <div className="welcome-text">
                            <h2>Good afternoon, Queren! <Icon name="wave" size="md" /></h2>
                            <p>{currentDate}</p>
                        </div>
                        <div className="welcome-summary">
                            <span className="summary-item">
                                <strong>4</strong> jobs today
                            </span>
                            <span className="summary-item">
                                <strong>2</strong> need attention
                            </span>
                            <span className="summary-item success">
                                <strong>$847</strong> earned today
                            </span>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* Urgent Alerts */}
            <div className="alerts-row mb-6">
                <Alert variant="warning" title="Cleaner needed">
                    Tomorrow's 10AM booking at North Vancouver still needs a cleaner assigned.
                </Alert>
                <Alert variant="info" title="Payout reminder">
                    Weekly payouts are scheduled for Friday. $2,340 pending.
                </Alert>
            </div>

            {/* KPI Grid */}
            <div className="kpi-grid-enhanced">
                <Card className="kpi-card primary">
                    <CardBody>
                        <div className="kpi-content-enhanced">
                            <div className="kpi-header">
                                <Icon name="dollar" size="lg" />
                                <span className="kpi-trend positive">↑ 12%</span>
                            </div>
                            <span className="kpi-value-lg">$12,450</span>
                            <span className="kpi-label">January Revenue</span>
                            <div className="kpi-comparison">vs $11,110 last month</div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="kpi-card">
                    <CardBody>
                        <div className="kpi-content-enhanced">
                            <div className="kpi-header">
                                <Icon name="clipboard" size="lg" />
                                <span className="kpi-trend positive">↑ 8%</span>
                            </div>
                            <span className="kpi-value-lg">156</span>
                            <span className="kpi-label">Bookings MTD</span>
                            <div className="kpi-mini-stats">
                                <span>12 today</span>
                                <span>48 this week</span>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="kpi-card">
                    <CardBody>
                        <div className="kpi-content-enhanced">
                            <div className="kpi-header">
                                <Icon name="users" size="lg" />
                                <span className="kpi-trend neutral">—</span>
                            </div>
                            <span className="kpi-value-lg">12</span>
                            <span className="kpi-label">Active Cleaners</span>
                            <div className="kpi-mini-stats">
                                <span className="warning">2 pending</span>
                                <span>8 working today</span>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="kpi-card">
                    <CardBody>
                        <div className="kpi-content-enhanced">
                            <div className="kpi-header">
                                <Icon name="star" size="lg" />
                                <span className="kpi-trend positive">↑ 0.1</span>
                            </div>
                            <span className="kpi-value-lg">4.9</span>
                            <span className="kpi-label">Customer Rating</span>
                            <div className="kpi-comparison">87 reviews total</div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="kpi-card">
                    <CardBody>
                        <div className="kpi-content-enhanced">
                            <div className="kpi-header">
                                <Icon name="refresh" size="lg" />
                                <span className="kpi-trend positive">↑ 5%</span>
                            </div>
                            <span className="kpi-value-lg">68%</span>
                            <span className="kpi-label">Repeat Clients</span>
                            <div className="kpi-comparison">42 returning this month</div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="kpi-card">
                    <CardBody>
                        <div className="kpi-content-enhanced">
                            <div className="kpi-header">
                                <Icon name="banknote" size="lg" />
                                <span className="kpi-trend positive">↑ 3%</span>
                            </div>
                            <span className="kpi-value-lg">$80</span>
                            <span className="kpi-label">Avg. Ticket</span>
                            <div className="kpi-comparison">per booking</div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Today's Overview & Quick Actions */}
            <div className="dashboard-row mt-6">
                <Card className="today-card">
                    <CardBody>
                        <div className="card-header-row">
                            <h3><Icon name="calendar" size="md" /> Today's Schedule</h3>
                            <Badge variant="primary">4 jobs</Badge>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item completed">
                                <div className="timeline-time">9:00 AM</div>
                                <div className="timeline-content">
                                    <strong>Regular Cleaning</strong>
                                    <span>Downtown • Jane D.</span>
                                    <span className="client">Sarah Mitchell</span>
                                </div>
                                <Badge variant="success">Done</Badge>
                            </div>
                            <div className="timeline-item active">
                                <div className="timeline-time">11:30 AM</div>
                                <div className="timeline-content">
                                    <strong>Deep Cleaning</strong>
                                    <span>Kitsilano • Maria G.</span>
                                    <span className="client">John Kim</span>
                                </div>
                                <Badge variant="warning">In Progress</Badge>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-time">2:00 PM</div>
                                <div className="timeline-content">
                                    <strong>Regular Cleaning</strong>
                                    <span>North Van • Tom H.</span>
                                    <span className="client">Lisa Park</span>
                                </div>
                                <Badge variant="primary">Upcoming</Badge>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-time">4:30 PM</div>
                                <div className="timeline-content">
                                    <strong>Regular Cleaning</strong>
                                    <span>Burnaby • Jane D.</span>
                                    <span className="client">Mike Torres</span>
                                </div>
                                <Badge variant="primary">Upcoming</Badge>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="quick-actions-card">
                    <CardBody>
                        <h3><Icon name="sparkle" size="md" /> Quick Actions</h3>
                        <div className="quick-actions-grid">
                            <button className="quick-action">
                                <Icon name="plus" size="md" />
                                <span>New Booking</span>
                            </button>
                            <button className="quick-action">
                                <Icon name="user" size="md" />
                                <span>Add Cleaner</span>
                            </button>
                            <button className="quick-action">
                                <Icon name="creditCard" size="md" />
                                <span>Process Payout</span>
                            </button>
                            <button className="quick-action">
                                <Icon name="chart" size="md" />
                                <span>View Reports</span>
                            </button>
                            <button className="quick-action">
                                <Icon name="message" size="md" />
                                <span>Reply Reviews</span>
                            </button>
                            <button className="quick-action">
                                <Icon name="settings" size="md" />
                                <span>Settings</span>
                            </button>
                        </div>

                        <div className="pending-section mt-6">
                            <h4>Needs Your Attention</h4>
                            <div className="pending-items">
                                <div className="pending-item">
                                    <span className="pending-indicator warning" />
                                    <span>Assign cleaner to Booking #2160</span>
                                    <Button variant="secondary" size="sm">Assign</Button>
                                </div>
                                <div className="pending-item">
                                    <span className="pending-indicator error" />
                                    <span>Reply to review from Mike T.</span>
                                    <Button variant="secondary" size="sm">Reply</Button>
                                </div>
                                <div className="pending-item">
                                    <span className="pending-indicator primary" />
                                    <span>Approve Sarah L.'s documents</span>
                                    <Button variant="secondary" size="sm">Review</Button>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Team Performance & Recent Activity */}
            <div className="dashboard-row mt-6">
                <Card>
                    <CardBody>
                        <div className="card-header-row">
                            <h3><Icon name="users" size="md" /> Team Performance</h3>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="team-leaderboard">
                            {[
                                { name: 'Jane Doe', jobs: 12, rating: 4.9, earnings: 1020, trend: 'up' },
                                { name: 'Maria Garcia', jobs: 10, rating: 4.8, earnings: 890, trend: 'up' },
                                { name: 'Tom Henderson', jobs: 8, rating: 4.7, earnings: 720, trend: 'down' },
                            ].map((cleaner, i) => (
                                <div key={i} className="leaderboard-item">
                                    <span className="rank">#{i + 1}</span>
                                    <div className="cleaner-info">
                                        <div className="cleaner-avatar-sm">{cleaner.name.split(' ').map(n => n[0]).join('')}</div>
                                        <span className="cleaner-name">{cleaner.name}</span>
                                    </div>
                                    <div className="cleaner-metrics">
                                        <span>{cleaner.jobs} jobs</span>
                                        <span>{cleaner.rating}<Icon name="starFilled" size="sm" /></span>
                                        <span className="earnings">${cleaner.earnings}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div className="card-header-row">
                            <h3><Icon name="document" size="md" /> Recent Activity</h3>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="activity-feed">
                            {[
                                { icon: 'check', text: 'Jane D. completed Booking #2155', time: '15 min ago' },
                                { icon: 'star', text: 'New 5-star review from Sarah M.', time: '32 min ago' },
                                { icon: 'dollar', text: 'Payment received: $149 from John K.', time: '1 hour ago' },
                                { icon: 'clipboard', text: 'New booking: Lisa P. for Jan 15', time: '2 hours ago' },
                                { icon: 'user', text: 'Sarah Lee submitted verification docs', time: '3 hours ago' },
                            ].map((activity, i) => (
                                <div key={i} className="activity-item">
                                    <span className="activity-icon"><Icon name={activity.icon as IconName} size="sm" /></span>
                                    <span className="activity-text">{activity.text}</span>
                                    <span className="activity-time">{activity.time}</span>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Revenue Chart & Upcoming Week */}
            <div className="dashboard-row mt-6">
                <Card className="wide-card">
                    <CardBody>
                        <div className="card-header-row">
                            <h3><Icon name="trendUp" size="md" /> Weekly Revenue</h3>
                            <div className="chart-legend">
                                <span className="legend-item"><span className="dot primary" /> This Week: $2,450</span>
                                <span className="legend-item"><span className="dot muted" /> Last Week: $2,180</span>
                            </div>
                        </div>
                        <div className="chart-enhanced">
                            <div className="chart-bars-enhanced">
                                {[
                                    { day: 'Mon', current: 320, prev: 280 },
                                    { day: 'Tue', current: 450, prev: 380 },
                                    { day: 'Wed', current: 380, prev: 320 },
                                    { day: 'Thu', current: 520, prev: 460 },
                                    { day: 'Fri', current: 420, prev: 400 },
                                    { day: 'Sat', current: 280, prev: 260 },
                                    { day: 'Sun', current: 80, prev: 80 },
                                ].map((day, i) => (
                                    <div key={i} className="chart-bar-group">
                                        <div className="bar-container">
                                            <div className="bar prev" style={{ height: `${(day.prev / 520) * 100}%` }} />
                                            <div className="bar current" style={{ height: `${(day.current / 520) * 100}%` }} />
                                        </div>
                                        <span className="chart-label">{day.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Service Breakdown */}
            <div className="dashboard-row mt-6">
                <Card>
                    <CardBody>
                        <h3><Icon name="broom" size="md" /> Service Breakdown (This Month)</h3>
                        <div className="service-stats">
                            <div className="service-stat">
                                <div className="service-icon regular"><Icon name="home" size="md" /></div>
                                <div className="service-info">
                                    <span className="service-name">Regular Cleaning</span>
                                    <span className="service-count">98 bookings</span>
                                </div>
                                <span className="service-revenue">$8,722</span>
                            </div>
                            <div className="service-stat">
                                <div className="service-icon deep"><Icon name="sparkle" size="md" /></div>
                                <div className="service-info">
                                    <span className="service-name">Deep Cleaning</span>
                                    <span className="service-count">42 bookings</span>
                                </div>
                                <span className="service-revenue">$6,258</span>
                            </div>
                            <div className="service-stat">
                                <div className="service-icon addon"><Icon name="plus" size="md" /></div>
                                <div className="service-info">
                                    <span className="service-name">Add-On Services</span>
                                    <span className="service-count">67 orders</span>
                                </div>
                                <span className="service-revenue">$2,345</span>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div className="card-header-row">
                            <h3><Icon name="star" size="md" /> Recent Reviews</h3>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="reviews-compact">
                            {[
                                { rating: 5, text: 'Amazing service! Jane was incredibly thorough.', client: 'Sarah M.', responded: true },
                                { rating: 5, text: 'Very thorough deep clean. Excellent job!', client: 'John K.', responded: false },
                                { rating: 4, text: 'Good overall, just a few spots missed.', client: 'Lisa P.', responded: true },
                            ].map((review, i) => (
                                <div key={i} className="review-compact-item">
                                    <div className="review-rating">{Array.from({ length: review.rating }).map((_, i) => <Icon key={i} name="starFilled" size="sm" />)}</div>
                                    <p>"{review.text}"</p>
                                    <div className="review-meta">
                                        <span>— {review.client}</span>
                                        {!review.responded && <Badge variant="warning" >Reply</Badge>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </DashboardLayout>
    )
}

// ============================================
// BOOKINGS MANAGEMENT
// ============================================
export function OwnerBookings() {
    const [statusFilter, setStatusFilter] = useState('all')

    const bookings = [
        { id: '#2156', client: 'Sarah Mitchell', type: 'Regular Cleaning', date: 'Jan 13, 2026', time: '2:00 PM', cleaner: 'Jane D.', status: 'confirmed', total: 89 },
        { id: '#2155', client: 'John Kim', type: 'Deep Cleaning', date: 'Jan 13, 2026', time: '10:00 AM', cleaner: 'Maria G.', status: 'in_progress', total: 149 },
        { id: '#2154', client: 'Lisa Park', type: 'Regular Cleaning', date: 'Jan 12, 2026', time: '3:00 PM', cleaner: 'Jane D.', status: 'completed', total: 95 },
        { id: '#2153', client: 'Mike Torres', type: 'Regular Cleaning', date: 'Jan 12, 2026', time: '11:00 AM', cleaner: 'Tom H.', status: 'completed', total: 89 },
        { id: '#2152', client: 'Emma Williams', type: 'Deep Cleaning', date: 'Jan 11, 2026', time: '9:00 AM', cleaner: 'Maria G.', status: 'completed', total: 165 },
    ]

    return (
        <DashboardLayout title="Bookings Management" links={ownerLinks}>
            <div className="page-actions">
                <div className="filter-tabs">
                    {['all', 'pending', 'confirmed', 'in_progress', 'completed', 'cancelled'].map(status => (
                        <button
                            key={status}
                            className={`filter-tab ${statusFilter === status ? 'active' : ''}`}
                            onClick={() => setStatusFilter(status)}
                        >
                            {status.replace('_', ' ')}
                        </button>
                    ))}
                </div>
                <Input placeholder="Search bookings..." style={{ maxWidth: 250 }} />
            </div>

            <Card>
                <CardBody className="table-card">
                    <div className="data-table">
                        <div className="table-header">
                            <span>ID</span>
                            <span>Client</span>
                            <span>Service</span>
                            <span>Date & Time</span>
                            <span>Cleaner</span>
                            <span>Total</span>
                            <span>Status</span>
                            <span>Actions</span>
                        </div>
                        {bookings.map(booking => (
                            <div key={booking.id} className="table-row">
                                <span className="booking-id">{booking.id}</span>
                                <span>{booking.client}</span>
                                <span>{booking.type}</span>
                                <span>{booking.date}, {booking.time}</span>
                                <span>{booking.cleaner}</span>
                                <span className="amount">${booking.total}</span>
                                <Badge variant={
                                    booking.status === 'completed' ? 'success' :
                                        booking.status === 'in_progress' ? 'warning' :
                                            booking.status === 'cancelled' ? 'error' : 'primary'
                                }>
                                    {booking.status.replace('_', ' ')}
                                </Badge>
                                <div className="row-actions">
                                    <Button variant="ghost" size="sm">View</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}

// ============================================
// CLEANERS MANAGEMENT
// ============================================
export function OwnerCleaners() {
    const cleaners = [
        { id: 1, name: 'Jane Doe', email: 'jane@example.com', phone: '(604) 555-1234', status: 'active', jobs: 45, rating: 4.9 },
        { id: 2, name: 'Maria Garcia', email: 'maria@example.com', phone: '(604) 555-5678', status: 'active', jobs: 38, rating: 4.8 },
        { id: 3, name: 'Tom Henderson', email: 'tom@example.com', phone: '(604) 555-9012', status: 'active', jobs: 52, rating: 4.7 },
        { id: 4, name: 'Sarah Lee', email: 'sarah@example.com', phone: '(604) 555-3456', status: 'pending', jobs: 0, rating: null },
        { id: 5, name: 'Alex Wong', email: 'alex@example.com', phone: '(604) 555-7890', status: 'inactive', jobs: 23, rating: 4.5 },
    ]

    return (
        <DashboardLayout title="Cleaners Management" links={ownerLinks}>
            <div className="page-actions">
                <div className="filter-tabs">
                    <button className="filter-tab active">All</button>
                    <button className="filter-tab">Active</button>
                    <button className="filter-tab">Pending</button>
                    <button className="filter-tab">Inactive</button>
                </div>
                <Button>+ Add Cleaner</Button>
            </div>

            <div className="cleaners-grid">
                {cleaners.map(cleaner => (
                    <Card key={cleaner.id} className="cleaner-card">
                        <CardBody>
                            <div className="cleaner-header">
                                <div className="cleaner-avatar">{cleaner.name.split(' ').map(n => n[0]).join('')}</div>
                                <Badge variant={
                                    cleaner.status === 'active' ? 'success' :
                                        cleaner.status === 'pending' ? 'warning' : 'default'
                                }>
                                    {cleaner.status}
                                </Badge>
                            </div>
                            <h4 className="cleaner-name">{cleaner.name}</h4>
                            <p className="cleaner-email">{cleaner.email}</p>

                            <div className="cleaner-stats">
                                <div className="cleaner-stat">
                                    <span className="stat-value">{cleaner.jobs}</span>
                                    <span className="stat-label">Jobs</span>
                                </div>
                                <div className="cleaner-stat">
                                    <span className="stat-value">{cleaner.rating ? <>{cleaner.rating}<Icon name="starFilled" size="sm" /></> : '-'}</span>
                                    <span className="stat-label">Rating</span>
                                </div>
                            </div>

                            <div className="cleaner-actions">
                                <Button variant="ghost" size="sm">View Profile</Button>
                                <Button variant="secondary" size="sm">Message</Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    )
}

// ============================================
// PRICING CONFIG
// ============================================
export function OwnerPricing() {
    return (
        <DashboardLayout title="Pricing Configuration" links={ownerLinks}>
            <Alert variant="info" title="Pricing Changes">
                Changes will apply to new bookings only. Existing bookings will keep their original pricing.
            </Alert>

            <Card className="mt-6">
                <CardBody>
                    <h3>Base Rates</h3>
                    <div className="pricing-grid">
                        <div className="pricing-item">
                            <label>Regular Cleaning (Base)</label>
                            <div className="price-input">
                                <span className="price-prefix">$</span>
                                <input type="number" defaultValue={89} />
                            </div>
                        </div>
                        <div className="pricing-item">
                            <label>Deep Cleaning (Base)</label>
                            <div className="price-input">
                                <span className="price-prefix">$</span>
                                <input type="number" defaultValue={149} />
                            </div>
                        </div>
                        <div className="pricing-item">
                            <label>Per Extra Sqft (over 1000)</label>
                            <div className="price-input">
                                <span className="price-prefix">$</span>
                                <input type="number" defaultValue={0.04} step={0.01} />
                            </div>
                        </div>
                        <div className="pricing-item">
                            <label>Per Extra Bedroom</label>
                            <div className="price-input">
                                <span className="price-prefix">$</span>
                                <input type="number" defaultValue={15} />
                            </div>
                        </div>
                        <div className="pricing-item">
                            <label>Per Extra Bathroom</label>
                            <div className="price-input">
                                <span className="price-prefix">$</span>
                                <input type="number" defaultValue={20} />
                            </div>
                        </div>
                        <div className="pricing-item">
                            <label>Tax Rate (%)</label>
                            <div className="price-input">
                                <input type="number" defaultValue={13} />
                                <span className="price-suffix">%</span>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-6">
                <CardBody>
                    <h3>Add-Ons</h3>
                    <div className="addons-table">
                        <div className="addon-row header">
                            <span>Add-On</span>
                            <span>Price</span>
                            <span>Enabled</span>
                        </div>
                        {[
                            { name: 'Inside Fridge', price: 35 },
                            { name: 'Inside Oven', price: 30 },
                            { name: 'Inside Cabinets', price: 40 },
                            { name: 'Laundry', price: 25 },
                            { name: 'Interior Windows', price: 45 },
                        ].map((addon, i) => (
                            <div key={i} className="addon-row">
                                <span>{addon.name}</span>
                                <div className="price-input small">
                                    <span className="price-prefix">$</span>
                                    <input type="number" defaultValue={addon.price} />
                                </div>
                                <label className="toggle">
                                    <input type="checkbox" defaultChecked />
                                    <span className="toggle-slider" />
                                </label>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>

            <div className="form-actions">
                <Button variant="ghost">Reset to Defaults</Button>
                <Button>Save Changes</Button>
            </div>
        </DashboardLayout>
    )
}

// ============================================
// REVENUE & PAYROLL
// ============================================
export function OwnerRevenue() {
    return (
        <DashboardLayout title="Revenue & Payroll" links={ownerLinks}>
            <div className="kpi-grid small">
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">This Month Revenue</span>
                        <span className="kpi-value">$8,450</span>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Pending Payouts</span>
                        <span className="kpi-value">$2,340</span>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Net Profit</span>
                        <span className="kpi-value success">$6,110</span>
                    </CardBody>
                </Card>
            </div>

            <div className="dashboard-grid">
                <Card>
                    <CardBody>
                        <h3>Revenue Breakdown</h3>
                        <div className="breakdown-list">
                            <div className="breakdown-item">
                                <span className="breakdown-label">Regular Cleaning</span>
                                <span className="breakdown-value">$4,250</span>
                                <div className="breakdown-bar" style={{ width: '50%' }} />
                            </div>
                            <div className="breakdown-item">
                                <span className="breakdown-label">Deep Cleaning</span>
                                <span className="breakdown-value">$3,480</span>
                                <div className="breakdown-bar" style={{ width: '41%' }} />
                            </div>
                            <div className="breakdown-item">
                                <span className="breakdown-label">Add-Ons</span>
                                <span className="breakdown-value">$720</span>
                                <div className="breakdown-bar" style={{ width: '9%' }} />
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div className="card-header-row">
                            <h3>Pending Payouts</h3>
                            <Button size="sm">Process All</Button>
                        </div>
                        <div className="payout-list">
                            {[
                                { cleaner: 'Jane Doe', jobs: 8, amount: 680 },
                                { cleaner: 'Maria Garcia', jobs: 6, amount: 520 },
                                { cleaner: 'Tom Henderson', jobs: 10, amount: 840 },
                            ].map((payout, i) => (
                                <div key={i} className="payout-item">
                                    <div className="payout-info">
                                        <span className="payout-cleaner">{payout.cleaner}</span>
                                        <span className="payout-jobs">{payout.jobs} jobs</span>
                                    </div>
                                    <span className="payout-amount">${payout.amount}</span>
                                    <Button variant="secondary" size="sm">Pay</Button>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>

            <Card className="mt-6">
                <CardBody>
                    <h3>Transaction History</h3>
                    <div className="data-table">
                        <div className="table-header">
                            <span>Date</span>
                            <span>Type</span>
                            <span>Description</span>
                            <span>Amount</span>
                        </div>
                        {[
                            { date: 'Jan 13', type: 'income', desc: 'Booking #2156 - Sarah M.', amount: 89 },
                            { date: 'Jan 13', type: 'income', desc: 'Booking #2155 - John K.', amount: 149 },
                            { date: 'Jan 12', type: 'payout', desc: 'Payout to Jane D.', amount: -340 },
                            { date: 'Jan 12', type: 'income', desc: 'Booking #2154 - Lisa P.', amount: 95 },
                        ].map((tx, i) => (
                            <div key={i} className="table-row">
                                <span>{tx.date}</span>
                                <Badge variant={tx.type === 'income' ? 'success' : 'warning'}>{tx.type}</Badge>
                                <span>{tx.desc}</span>
                                <span className={tx.amount > 0 ? 'amount positive' : 'amount negative'}>
                                    {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount)}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}

// ============================================
// REVIEWS
// ============================================
export function OwnerReviews() {
    const reviews = [
        { id: 1, client: 'Sarah Mitchell', rating: 5, text: 'Amazing service! Jane was incredibly thorough and professional. My home has never been this clean!', cleaner: 'Jane Doe', date: 'Jan 12, 2026', responded: true },
        { id: 2, client: 'John Kim', rating: 5, text: 'Very thorough deep clean. Maria did an excellent job with the kitchen and bathrooms.', cleaner: 'Maria Garcia', date: 'Jan 11, 2026', responded: false },
        { id: 3, client: 'Lisa Park', rating: 4, text: 'Good job overall, but missed a few spots under the couch. Otherwise great!', cleaner: 'Jane Doe', date: 'Jan 10, 2026', responded: true },
        { id: 4, client: 'Mike Torres', rating: 5, text: 'Always reliable and friendly. Love the Queren service!', cleaner: 'Tom Henderson', date: 'Jan 9, 2026', responded: false },
    ]

    return (
        <DashboardLayout title="Reviews" links={ownerLinks}>
            <div className="kpi-grid small">
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Average Rating</span>
                        <span className="kpi-value">4.9 <Icon name="starFilled" size="sm" /></span>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Total Reviews</span>
                        <span className="kpi-value">87</span>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Awaiting Response</span>
                        <span className="kpi-value warning">2</span>
                    </CardBody>
                </Card>
            </div>

            <div className="reviews-list">
                {reviews.map(review => (
                    <Card key={review.id} className="review-card">
                        <CardBody>
                            <div className="review-header">
                                <div className="review-meta">
                                    <span className="review-stars">{Array.from({ length: review.rating }).map((_, i) => <Icon key={i} name="starFilled" size="sm" />)}</span>
                                    <span className="review-date">{review.date}</span>
                                </div>
                                {!review.responded && <Badge variant="warning">Needs Response</Badge>}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <div className="review-people">
                                    <span><strong>Client:</strong> {review.client}</span>
                                    <span><strong>Cleaner:</strong> {review.cleaner}</span>
                                </div>
                                <div className="review-actions">
                                    {!review.responded && <Button size="sm">Reply</Button>}
                                    <Button variant="ghost" size="sm">View Booking</Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    )
}

// ============================================
// SUPPORT QUEUE
// ============================================
export function OwnerSupport() {
    const tickets = [
        { id: '#SUP-042', subject: 'Cleaner was late', client: 'Sarah M.', priority: 'high', status: 'open', created: '2 hours ago' },
        { id: '#SUP-041', subject: 'Billing question', client: 'John K.', priority: 'medium', status: 'in_progress', created: '5 hours ago' },
        { id: '#SUP-040', subject: 'Reschedule request', client: 'Lisa P.', priority: 'low', status: 'resolved', created: '1 day ago' },
        { id: '#SUP-039', subject: 'Quality concern', client: 'Mike T.', priority: 'high', status: 'resolved', created: '2 days ago' },
    ]

    return (
        <DashboardLayout title="Support Queue" links={ownerLinks}>
            <div className="kpi-grid small">
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Open Tickets</span>
                        <span className="kpi-value warning">2</span>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Avg. Response Time</span>
                        <span className="kpi-value">2.5 hours</span>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="kpi-card-small">
                        <span className="kpi-label">Resolved This Week</span>
                        <span className="kpi-value success">8</span>
                    </CardBody>
                </Card>
            </div>

            <Card>
                <CardBody className="table-card">
                    <div className="data-table">
                        <div className="table-header">
                            <span>Ticket</span>
                            <span>Subject</span>
                            <span>Client</span>
                            <span>Priority</span>
                            <span>Status</span>
                            <span>Created</span>
                            <span>Actions</span>
                        </div>
                        {tickets.map(ticket => (
                            <div key={ticket.id} className="table-row">
                                <span className="ticket-id">{ticket.id}</span>
                                <span>{ticket.subject}</span>
                                <span>{ticket.client}</span>
                                <Badge variant={
                                    ticket.priority === 'high' ? 'error' :
                                        ticket.priority === 'medium' ? 'warning' : 'default'
                                }>
                                    {ticket.priority}
                                </Badge>
                                <Badge variant={
                                    ticket.status === 'resolved' ? 'success' :
                                        ticket.status === 'in_progress' ? 'warning' : 'primary'
                                }>
                                    {ticket.status.replace('_', ' ')}
                                </Badge>
                                <span className="text-muted">{ticket.created}</span>
                                <div className="row-actions">
                                    <Button variant="secondary" size="sm">View</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}

// ============================================
// OWNER TRAINING MANAGEMENT
// ============================================
interface QuizQuestion {
    id: string
    question: string
    options: string[]
    correctIndex: number
}

interface TrainingModuleData {
    id: string
    title: string
    description: string
    type: 'video' | 'pdf' | 'document'
    contentUrl: string
    duration: string
    isRequired: boolean
    isActive: boolean
    quiz: QuizQuestion[]
    passingScore: number
    completedBy: number
    createdAt: string
}

// Mock training modules data
const mockTrainingModules: TrainingModuleData[] = [
    {
        id: '1',
        title: 'Welcome to Queren',
        description: 'Introduction to our cleaning standards and company values',
        type: 'video',
        contentUrl: 'https://example.com/welcome.mp4',
        duration: '10 min',
        isRequired: true,
        isActive: true,
        quiz: [
            { id: 'q1', question: 'What is Queren\'s core value?', options: ['Speed', 'Quality & Trust', 'Low prices', 'Quantity'], correctIndex: 1 },
            { id: 'q2', question: 'How should you greet a client?', options: ['Ignore them', 'Professional greeting', 'Wave silently', 'Start cleaning immediately'], correctIndex: 1 },
        ],
        passingScore: 80,
        completedBy: 8,
        createdAt: '2024-01-15',
    },
    {
        id: '2',
        title: 'Cleaning Standards & Quality',
        description: 'Detailed guide on our cleaning checklist and quality expectations',
        type: 'pdf',
        contentUrl: 'https://example.com/standards.pdf',
        duration: '20 min',
        isRequired: true,
        isActive: true,
        quiz: [
            { id: 'q1', question: 'What should you clean first in a bathroom?', options: ['Toilet', 'Mirror', 'Counters', 'Floor'], correctIndex: 0 },
            { id: 'q2', question: 'How often should mop heads be replaced?', options: ['Never', 'Monthly', 'Weekly', 'Daily'], correctIndex: 2 },
        ],
        passingScore: 80,
        completedBy: 6,
        createdAt: '2024-01-16',
    },
    {
        id: '3',
        title: 'Client Communication',
        description: 'Best practices for interacting with clients professionally',
        type: 'video',
        contentUrl: 'https://example.com/communication.mp4',
        duration: '15 min',
        isRequired: true,
        isActive: true,
        quiz: [],
        passingScore: 80,
        completedBy: 4,
        createdAt: '2024-01-17',
    },
]

export function OwnerTraining() {
    const [modules, setModules] = useState<TrainingModuleData[]>(mockTrainingModules)
    const [showModal, setShowModal] = useState(false)
    const [editingModule, setEditingModule] = useState<TrainingModuleData | null>(null)
    const [activeTab, setActiveTab] = useState<'details' | 'quiz'>('details')

    // Form state
    const [formTitle, setFormTitle] = useState('')
    const [formDescription, setFormDescription] = useState('')
    const [formType, setFormType] = useState<'video' | 'pdf' | 'document'>('video')
    const [formUrl, setFormUrl] = useState('')
    const [formDuration, setFormDuration] = useState('')
    const [formRequired, setFormRequired] = useState(true)
    const [formQuestions, setFormQuestions] = useState<QuizQuestion[]>([])
    const [formPassingScore, setFormPassingScore] = useState(80)

    const openCreateModal = () => {
        setEditingModule(null)
        setFormTitle('')
        setFormDescription('')
        setFormType('video')
        setFormUrl('')
        setFormDuration('')
        setFormRequired(true)
        setFormQuestions([])
        setFormPassingScore(80)
        setActiveTab('details')
        setShowModal(true)
    }

    const openEditModal = (module: TrainingModuleData) => {
        setEditingModule(module)
        setFormTitle(module.title)
        setFormDescription(module.description)
        setFormType(module.type)
        setFormUrl(module.contentUrl)
        setFormDuration(module.duration)
        setFormRequired(module.isRequired)
        setFormQuestions([...module.quiz])
        setFormPassingScore(module.passingScore)
        setActiveTab('details')
        setShowModal(true)
    }

    const handleSave = () => {
        if (editingModule) {
            setModules(modules.map(m => m.id === editingModule.id ? {
                ...m,
                title: formTitle,
                description: formDescription,
                type: formType,
                contentUrl: formUrl,
                duration: formDuration,
                isRequired: formRequired,
                quiz: formQuestions,
                passingScore: formPassingScore,
            } : m))
        } else {
            const newModule: TrainingModuleData = {
                id: Date.now().toString(),
                title: formTitle,
                description: formDescription,
                type: formType,
                contentUrl: formUrl,
                duration: formDuration,
                isRequired: formRequired,
                isActive: true,
                quiz: formQuestions,
                passingScore: formPassingScore,
                completedBy: 0,
                createdAt: new Date().toISOString().split('T')[0],
            }
            setModules([...modules, newModule])
        }
        setShowModal(false)
    }

    const addQuestion = () => {
        setFormQuestions([...formQuestions, {
            id: Date.now().toString(),
            question: '',
            options: ['', '', '', ''],
            correctIndex: 0,
        }])
    }

    const updateQuestion = (index: number, field: keyof QuizQuestion, value: string | number | string[]) => {
        const updated = [...formQuestions]
        updated[index] = { ...updated[index], [field]: value }
        setFormQuestions(updated)
    }

    const updateOption = (qIndex: number, oIndex: number, value: string) => {
        const updated = [...formQuestions]
        const newOptions = [...updated[qIndex].options]
        newOptions[oIndex] = value
        updated[qIndex] = { ...updated[qIndex], options: newOptions }
        setFormQuestions(updated)
    }

    const removeQuestion = (index: number) => {
        setFormQuestions(formQuestions.filter((_, i) => i !== index))
    }

    const toggleModuleActive = (id: string) => {
        setModules(modules.map(m => m.id === id ? { ...m, isActive: !m.isActive } : m))
    }

    const deleteModule = (id: string) => {
        if (confirm('Are you sure you want to delete this training module?')) {
            setModules(modules.filter(m => m.id !== id))
        }
    }

    return (
        <DashboardLayout title="Training Management" links={ownerLinks}>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-muted">Create and manage training materials for your cleaners</p>
                </div>
                <Button onClick={openCreateModal}>+ New Module</Button>
            </div>

            {/* Stats */}
            <div className="stats-grid mb-6">
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">{modules.length}</div>
                        <div className="stat-label">Total Modules</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">{modules.filter(m => m.isActive).length}</div>
                        <div className="stat-label">Active</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">{modules.filter(m => m.quiz.length > 0).length}</div>
                        <div className="stat-label">With Quizzes</div>
                    </CardBody>
                </Card>
            </div>

            {/* Module List */}
            <Card>
                <CardBody>
                    <div className="table-header">
                        <h3>Training Modules</h3>
                    </div>
                    <div className="data-table">
                        <div className="table-row table-header-row">
                            <span>Module</span>
                            <span>Type</span>
                            <span>Duration</span>
                            <span>Quiz</span>
                            <span>Completed By</span>
                            <span>Status</span>
                            <span>Actions</span>
                        </div>
                        {modules.map(module => (
                            <div key={module.id} className="table-row">
                                <div className="module-info">
                                    <strong>{module.title}</strong>
                                    <small className="text-muted">{module.description}</small>
                                </div>
                                <span>
                                    {module.type === 'video' ? '🎬' : module.type === 'pdf' ? '📄' : '📝'} {module.type}
                                </span>
                                <span>{module.duration}</span>
                                <span>
                                    {module.quiz.length > 0 ? (
                                        <Badge variant="primary">{module.quiz.length} questions</Badge>
                                    ) : (
                                        <span className="text-muted">None</span>
                                    )}
                                </span>
                                <span>{module.completedBy} cleaners</span>
                                <Badge variant={module.isActive ? 'success' : 'warning'}>
                                    {module.isActive ? 'Active' : 'Draft'}
                                </Badge>
                                <div className="row-actions">
                                    <Button variant="secondary" size="sm" onClick={() => openEditModal(module)}>Edit</Button>
                                    <Button variant="ghost" size="sm" onClick={() => toggleModuleActive(module.id)}>
                                        {module.isActive ? 'Deactivate' : 'Activate'}
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={() => deleteModule(module.id)}>🗑️</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>

            {/* Create/Edit Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content modal-lg" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{editingModule ? 'Edit Module' : 'Create New Module'}</h3>
                            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
                        </div>

                        {/* Tabs */}
                        <div className="modal-tabs">
                            <button
                                className={`modal-tab ${activeTab === 'details' ? 'active' : ''}`}
                                onClick={() => setActiveTab('details')}
                            >
                                📋 Details
                            </button>
                            <button
                                className={`modal-tab ${activeTab === 'quiz' ? 'active' : ''}`}
                                onClick={() => setActiveTab('quiz')}
                            >
                                ❓ Quiz ({formQuestions.length})
                            </button>
                        </div>

                        <div className="modal-body">
                            {activeTab === 'details' ? (
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label className="form-label">Title</label>
                                        <Input
                                            value={formTitle}
                                            onChange={e => setFormTitle(e.target.value)}
                                            placeholder="e.g. Welcome to Queren"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Duration</label>
                                        <Input
                                            value={formDuration}
                                            onChange={e => setFormDuration(e.target.value)}
                                            placeholder="e.g. 15 min"
                                        />
                                    </div>
                                    <div className="form-group full-width">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-textarea"
                                            value={formDescription}
                                            onChange={e => setFormDescription(e.target.value)}
                                            placeholder="Brief description of this training module"
                                            rows={3}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Content Type</label>
                                        <select
                                            className="form-select"
                                            value={formType}
                                            onChange={e => setFormType(e.target.value as 'video' | 'pdf' | 'document')}
                                        >
                                            <option value="video">🎬 Video</option>
                                            <option value="pdf">📄 PDF</option>
                                            <option value="document">📝 Document</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Content URL</label>
                                        <Input
                                            value={formUrl}
                                            onChange={e => setFormUrl(e.target.value)}
                                            placeholder="https://..."
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check">
                                            <input
                                                type="checkbox"
                                                checked={formRequired}
                                                onChange={e => setFormRequired(e.target.checked)}
                                            />
                                            <span>Required for all cleaners</span>
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <div className="quiz-builder">
                                    <div className="quiz-settings mb-4">
                                        <label className="form-label">Passing Score: {formPassingScore}%</label>
                                        <input
                                            type="range"
                                            min="50"
                                            max="100"
                                            step="5"
                                            value={formPassingScore}
                                            onChange={e => setFormPassingScore(Number(e.target.value))}
                                            className="range-slider"
                                        />
                                    </div>

                                    {formQuestions.length === 0 ? (
                                        <div className="empty-state">
                                            <p>No quiz questions yet</p>
                                            <Button onClick={addQuestion}>+ Add First Question</Button>
                                        </div>
                                    ) : (
                                        <div className="questions-list">
                                            {formQuestions.map((q, qIndex) => (
                                                <div key={q.id} className="question-card">
                                                    <div className="question-header">
                                                        <span className="question-number">Q{qIndex + 1}</span>
                                                        <button className="btn-remove" onClick={() => removeQuestion(qIndex)}>×</button>
                                                    </div>
                                                    <Input
                                                        value={q.question}
                                                        onChange={e => updateQuestion(qIndex, 'question', e.target.value)}
                                                        placeholder="Enter your question"
                                                        className="mb-3"
                                                    />
                                                    <div className="options-grid">
                                                        {q.options.map((opt, oIndex) => (
                                                            <div key={oIndex} className={`option-input ${q.correctIndex === oIndex ? 'correct' : ''}`}>
                                                                <input
                                                                    type="radio"
                                                                    name={`correct-${q.id}`}
                                                                    checked={q.correctIndex === oIndex}
                                                                    onChange={() => updateQuestion(qIndex, 'correctIndex', oIndex)}
                                                                />
                                                                <Input
                                                                    value={opt}
                                                                    onChange={e => updateOption(qIndex, oIndex, e.target.value)}
                                                                    placeholder={`Option ${oIndex + 1}`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <small className="text-muted">Select the correct answer</small>
                                                </div>
                                            ))}
                                            <Button variant="secondary" onClick={addQuestion}>+ Add Question</Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="modal-footer">
                            <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
                            <Button onClick={handleSave}>
                                {editingModule ? 'Save Changes' : 'Create Module'}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}
