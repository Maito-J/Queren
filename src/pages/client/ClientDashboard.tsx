import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import { useAuth } from '@/hooks'
import { Link, useLocation } from 'react-router-dom'

function getClientLinks(isDemo: boolean): { to: string; label: string; icon: IconName }[] {
    const base = isDemo ? '/dashboard-demo' : '/dashboard'
    return [
        { to: base, label: 'Overview', icon: 'home' },
        { to: `${base}/profile`, label: 'Profile', icon: 'user' },
        { to: `${base}/billing`, label: 'Billing', icon: 'creditCard' },
        { to: `${base}/history`, label: 'History', icon: 'clipboard' },
        { to: `${base}/preferences`, label: 'Preferences', icon: 'settings' },
    ]
}

export function ClientDashboard() {
    const { profile } = useAuth()
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/dashboard-demo')
    const clientLinks = getClientLinks(isDemo)

    return (
        <DashboardLayout title="Dashboard" links={clientLinks}>
            {/* Welcome Banner */}
            <Card className="mb-6" style={{ background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-bg))' }}>
                <CardBody>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                        Hi, {profile?.full_name || 'there'}! <Icon name="wave" size="md" />
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
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}><Icon name="calendar" size="xl" /></div>
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
