import { Link } from 'react-router-dom'
import { Button, Card, CardBody } from '@/components/ui'
import { Icon } from '@/components/Icon'

export function BookingConfirmationPage() {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '600px', textAlign: 'center' }}>
            <Card>
                <CardBody>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}><Icon name="party" size="xl" /></div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>You're All Set!</h1>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        Your booking request has been received. We'll send you a confirmation email shortly.
                    </p>

                    <div style={{ background: 'var(--color-bg-subtle)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                        <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>What happens next?</p>
                        <ol style={{ textAlign: 'left', color: 'var(--color-text-muted)', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>We'll match you with a vetted cleaner</li>
                            <li style={{ marginBottom: '0.5rem' }}>You'll receive a confirmation email</li>
                            <li>Your cleaner will arrive at the scheduled time</li>
                        </ol>
                    </div>

                    <p style={{ color: 'var(--color-success)', marginBottom: '2rem' }}>
                        <Icon name="check" size="sm" /> No payment required until service day
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/">
                            <Button variant="secondary">Back to Home</Button>
                        </Link>
                        <Link to="/dashboard-demo">
                            <Button>View Dashboard</Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
