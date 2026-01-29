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

export function ClientPreferences() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/dashboard-demo')
    const clientLinks = getClientLinks(isDemo)
    return (
        <DashboardLayout title="Preferences" links={clientLinks}>
            <Card className="mb-6">
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="bell" size="md" /> Notification Settings
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                            <div>
                                <div style={{ fontWeight: 500 }}>Email Notifications</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Receive booking confirmations and updates via email</div>
                            </div>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                            <div>
                                <div style={{ fontWeight: 500 }}>SMS Notifications</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Receive text messages for cleaning reminders</div>
                            </div>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                            <div>
                                <div style={{ fontWeight: 500 }}>Marketing Emails</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Receive special offers and promotions</div>
                            </div>
                        </label>
                    </div>
                </CardBody>
            </Card>

            <Card className="mb-6">
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="sparkle" size="md" /> Cleaning Preferences
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Preferred Cleaning Products</label>
                            <select style={{ width: '100%', maxWidth: '300px', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                <option>Standard Products</option>
                                <option>Eco-Friendly Products</option>
                                <option>Hypoallergenic Products</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Special Instructions</label>
                            <textarea
                                placeholder="Any special requests or things we should know about your home..."
                                style={{
                                    width: '100%',
                                    minHeight: '100px',
                                    padding: '0.75rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-border)',
                                    resize: 'vertical'
                                }}
                            />
                        </div>
                    </div>

                    <Button variant="secondary" style={{ marginTop: '1.5rem' }}>
                        Save Preferences
                    </Button>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
