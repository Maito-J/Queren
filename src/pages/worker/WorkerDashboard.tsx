import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Badge } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'

const workerLinks: { to: string; label: string; icon: IconName }[] = [
    { to: '/worker', label: 'Dashboard', icon: 'home' },
    { to: '/worker/onboarding', label: 'Onboarding', icon: 'clipboard' },
    { to: '/worker/jobs', label: 'Available Jobs', icon: 'sparkle' },
    { to: '/worker/schedule', label: 'My Schedule', icon: 'calendar' },
    { to: '/worker/tracking', label: 'Time Tracking', icon: 'clock' },
    { to: '/worker/earnings', label: 'Earnings', icon: 'dollar' },
    { to: '/worker/training', label: 'Training Hub', icon: 'book' },
    { to: '/worker/profile', label: 'Profile', icon: 'user' },
]

export function WorkerDashboard() {
    return (
        <DashboardLayout title="Worker Dashboard" links={workerLinks}>
            <Card className="mb-6" style={{ background: 'linear-gradient(135deg, var(--color-primary-50), var(--color-bg))' }}>
                <CardBody>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome back! <Icon name="wave" size="md" /></h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>You have 0 jobs scheduled today.</p>
                </CardBody>
            </Card>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>$0</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>This Week</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>0</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Jobs Completed</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>-</div>
                        <div style={{ color: 'var(--color-text-muted)' }}>Your Rating</div>
                    </CardBody>
                </Card>
            </div>

            <Card>
                <CardBody>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3>Verification Status</h3>
                        <Badge variant="warning">Pending</Badge>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                        Complete your onboarding to start accepting jobs.
                    </p>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
