import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import { useLocation } from 'react-router-dom'

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

export function ClientBilling() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/dashboard-demo')
    const clientLinks = getClientLinks(isDemo)
    return (
        <DashboardLayout title="Billing" links={clientLinks}>
            <Card className="mb-6">
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="creditCard" size="md" /> Payment Methods
                    </h2>

                    <div className="empty-state" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}><Icon name="creditCard" size="xl" /></div>
                        <p style={{ marginBottom: '1rem' }}>No payment methods saved</p>
                        <Button variant="secondary">Add Payment Method</Button>
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="clipboard" size="md" /> Recent Invoices
                    </h2>

                    <div className="empty-state" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}><Icon name="file" size="xl" /></div>
                        <p>No invoices yet</p>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
