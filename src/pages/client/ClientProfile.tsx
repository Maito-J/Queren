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
                                {profile?.full_name || (isDemo ? 'Sarah Johnson' : 'Not set')}
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Email</label>
                            <div style={{ padding: '0.75rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                {profile?.email || (isDemo ? 'sarah.johnson@email.com' : 'Not set')}
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Phone</label>
                            <div style={{ padding: '0.75rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                {profile?.phone || (isDemo ? '(555) 123-4567' : 'Not set')}
                            </div>
                        </div>

                        <Button variant="secondary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                            Edit Profile
                        </Button>
                    </div>
                </CardBody>
            </Card>

            <Card style={{ position: 'relative' }}>
                <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: '#F59E0B',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                }}>Example</span>
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="home" size="md" /> Saved Addresses
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Address 1 - My House */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            background: 'var(--color-bg)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>My House</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                    456 Columbia Street, New Westminster, BC V3L 1A9
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <Button variant="secondary" style={{ fontSize: '0.875rem' }}>Edit</Button>
                            </div>
                        </div>

                        {/* Address 2 - Parent's House */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            background: 'var(--color-bg)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Parent's House</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                    789 Royal Avenue, New Westminster, BC V3M 1J5
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <Button variant="secondary" style={{ fontSize: '0.875rem' }}>Edit</Button>
                            </div>
                        </div>
                    </div>

                    <Button variant="secondary" style={{ marginTop: '1.5rem' }}>Add Address</Button>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
