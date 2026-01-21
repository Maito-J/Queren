import { DashboardLayout } from '@/components/layout'
import { Card, CardBody } from '@/components/ui'

const ownerLinks = [
    { to: '/owner', label: 'Dashboard', icon: '📊' },
    { to: '/owner/bookings', label: 'Bookings', icon: '📋' },
    { to: '/owner/cleaners', label: 'Cleaners', icon: '👥' },
    { to: '/owner/pricing', label: 'Pricing', icon: '💰' },
    { to: '/owner/revenue', label: 'Revenue', icon: '📈' },
    { to: '/owner/reviews', label: 'Reviews', icon: '⭐' },
    { to: '/owner/support', label: 'Support', icon: '🎧' },
]

export function OwnerDashboard() {
    return (
        <DashboardLayout title="Business Dashboard" links={ownerLinks}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>$0</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Total Revenue</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>0</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Total Bookings</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>0</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Active Cleaners</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-success)' }}>-</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Avg. Rating</div>
                    </CardBody>
                </Card>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <Card>
                    <CardBody>
                        <h3 style={{ marginBottom: '1rem' }}>Recent Bookings</h3>
                        <div className="empty-state" style={{ padding: '2rem' }}>
                            <p>No bookings yet</p>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h3 style={{ marginBottom: '1rem' }}>Recent Reviews</h3>
                        <div className="empty-state" style={{ padding: '2rem' }}>
                            <p>No reviews yet</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </DashboardLayout>
    )
}
