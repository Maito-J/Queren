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
                        <Icon name="clipboard" size="md" /> Recent Invoices
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Invoice Item 1 */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            background: 'var(--color-bg)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                                    <span style={{ fontWeight: 600, minWidth: '140px' }}>January 15, 2026</span>
                                    <span style={{ color: 'var(--color-text)', minWidth: '120px' }}>Deep Cleaning</span>
                                    <span style={{ color: 'var(--color-text-muted)', minWidth: '80px' }}>3 hours</span>
                                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>$192.10</span>
                                </div>
                                <Button variant="secondary" style={{ fontSize: '0.875rem' }}>Download</Button>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                456 Columbia Street, New Westminster, BC V3L 1A9
                            </div>
                        </div>

                        {/* Invoice Item 2 */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            background: 'var(--color-bg)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                                    <span style={{ fontWeight: 600, minWidth: '140px' }}>January 8, 2026</span>
                                    <span style={{ color: 'var(--color-text)', minWidth: '120px' }}>Regular Cleaning</span>
                                    <span style={{ color: 'var(--color-text-muted)', minWidth: '80px' }}>2 hours</span>
                                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>$124.30</span>
                                </div>
                                <Button variant="secondary" style={{ fontSize: '0.875rem' }}>Download</Button>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                456 Columbia Street, New Westminster, BC V3L 1A9
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
