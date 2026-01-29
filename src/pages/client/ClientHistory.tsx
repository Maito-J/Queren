import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
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

export function ClientHistory() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/dashboard-demo')
    const clientLinks = getClientLinks(isDemo)
    return (
        <DashboardLayout title="Cleaning History" links={clientLinks}>
            {/* Example: Empty State */}
            <Card className="mb-6" style={{ position: 'relative' }}>
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
                        <Icon name="calendar" size="md" /> Past Cleanings
                    </h2>

                    <div className="empty-state" style={{ padding: '3rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}><Icon name="clipboard" size="xl" /></div>
                        <h3 style={{ marginBottom: '0.5rem' }}>No cleaning history yet</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Once you complete your first cleaning, it will appear here.
                        </p>
                        <Link to="/booking">
                            <Button>Book Your First Cleaning</Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>

            {/* Example: With History */}
            <Card className="mb-6" style={{ position: 'relative' }}>
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
                        <Icon name="calendar" size="md" /> Past Cleanings
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Cleaning Item 1 */}
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
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                                <span style={{ fontWeight: 600, minWidth: '140px' }}>January 15, 2026</span>
                                <span style={{ color: 'var(--color-text)', minWidth: '120px' }}>Deep Cleaning</span>
                                <span style={{ color: 'var(--color-text-muted)', minWidth: '80px' }}>3 hours</span>
                                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>$180</span>
                            </div>
                            <Link to="/booking">
                                <Button variant="secondary" style={{ fontSize: '0.875rem' }}>Book Again</Button>
                            </Link>
                        </div>

                        {/* Cleaning Item 2 */}
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
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                                <span style={{ fontWeight: 600, minWidth: '140px' }}>January 8, 2026</span>
                                <span style={{ color: 'var(--color-text)', minWidth: '120px' }}>Regular Cleaning</span>
                                <span style={{ color: 'var(--color-text-muted)', minWidth: '80px' }}>2 hours</span>
                                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>$120</span>
                            </div>
                            <Link to="/booking">
                                <Button variant="secondary" style={{ fontSize: '0.875rem' }}>Book Again</Button>
                            </Link>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
