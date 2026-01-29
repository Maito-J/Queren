import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import { useAuth } from '@/hooks'
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

export function ClientProfile() {
    const { profile } = useAuth()
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/dashboard-demo')
    const clientLinks = getClientLinks(isDemo)

    return (
        <DashboardLayout title="Profile" links={clientLinks}>
            <Card className="mb-6">
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="user" size="md" /> Personal Information
                    </h2>

                    <div style={{ display: 'grid', gap: '1rem', maxWidth: '500px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Full Name</label>
                            <div style={{ padding: '0.75rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                {profile?.full_name || 'Not set'}
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Email</label>
                            <div style={{ padding: '0.75rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                {profile?.email || 'Not set'}
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Phone</label>
                            <div style={{ padding: '0.75rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                {profile?.phone || 'Not set'}
                            </div>
                        </div>

                        <Button variant="secondary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                            Edit Profile
                        </Button>
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="home" size="md" /> Saved Addresses
                    </h2>

                    <div className="empty-state" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}><Icon name="mapPin" size="xl" /></div>
                        <p style={{ marginBottom: '1rem' }}>No saved addresses yet</p>
                        <Button variant="secondary">Add Address</Button>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
