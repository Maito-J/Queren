import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button } from '@/components/ui'
import { useAuth } from '@/hooks'
import { Link } from 'react-router-dom'

const clientLinks = [
    { to: '/dashboard', label: 'Overview', icon: '🏠' },
    { to: '/dashboard/profile', label: 'Profile', icon: '👤' },
    { to: '/dashboard/billing', label: 'Billing', icon: '💳' },
    { to: '/dashboard/history', label: 'History', icon: '📋' },
    { to: '/dashboard/preferences', label: 'Preferences', icon: '⚙️' },
]

export function ClientDashboard() {
    const { profile } = useAuth()

    return (
        <DashboardLayout title="Dashboard" links={clientLinks}>
            {/* Welcome Banner */}
            <Card className="mb-6" style={{ background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-bg))' }}>
                <CardBody>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                        Hi, {profile?.full_name || 'there'}! 👋
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                        Your home is in good hands. Ready to schedule your next cleaning?
                    </p>
                    <Link to="/booking" style={{ display: 'inline-block', marginTop: '1rem' }}>
                        <Button>Book a Cleaning</Button>
                    </Link>
                </CardBody>
            </Card>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>0</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Upcoming Cleanings</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>0</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Past Cleanings</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>-</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Your Rating</div>
                    </CardBody>
                </Card>
            </div>

            {/* Next Booking */}
            <Card>
                <CardBody>
                    <h3 style={{ marginBottom: '1rem' }}>Next Scheduled Cleaning</h3>
                    <div className="empty-state" style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                        <p style={{ marginBottom: '1rem' }}>No upcoming cleanings scheduled</p>
                        <Link to="/booking">
                            <Button variant="secondary">Book Your First Cleaning</Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
