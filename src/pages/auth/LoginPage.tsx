import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button, Input, Card, CardBody, Alert } from '@/components/ui'
import { Icon } from '@/components/Icon'
import { useAuth } from '@/hooks'
import './AuthPages.css'

export function LoginPage() {
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const role = searchParams.get('role')
    const isWorkerLogin = role === 'worker'
    const isOwnerLogin = role === 'owner'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    // Forgot Password State
    const [showForgotModal, setShowForgotModal] = useState(false)
    const [resetEmail, setResetEmail] = useState('')
    const [resetSent, setResetSent] = useState(false)
    const [resetLoading, setResetLoading] = useState(false)

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setResetLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setResetSent(true)
        setResetLoading(false)
    }

    const closeForgotModal = () => {
        setShowForgotModal(false)
        setResetSent(false)
        setResetEmail('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        const { error: signInError } = await signIn(email, password)

        if (signInError) {
            setError(signInError.message)
            setLoading(false)
        } else {
            navigate('/dashboard')
        }
    }

    const getTitle = () => {
        if (isWorkerLogin) return 'Cleaner Portal'
        if (isOwnerLogin) return 'Owner Portal'
        return 'Welcome Back'
    }

    const getSubtitle = () => {
        if (isWorkerLogin) return 'Sign in to access your dashboard'
        if (isOwnerLogin) return 'Sign in to manage your business'
        return 'Sign in to your account'
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>{getTitle()}</h1>
                    <p>{getSubtitle()}</p>
                </div>

                <Card className="auth-card">
                    <CardBody>
                        {error && (
                            <Alert variant="error">{error}</Alert>
                        )}

                        <form onSubmit={handleSubmit} className="auth-form">
                            <Input
                                label={isWorkerLogin || isOwnerLogin ? "Email / Employee Number" : "Email"}
                                type={isWorkerLogin || isOwnerLogin ? "text" : "email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Input
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <div className="auth-forgot">
                                <button
                                    type="button"
                                    onClick={() => setShowForgotModal(true)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        color: 'var(--color-primary)',
                                        cursor: 'pointer',
                                        fontSize: 'var(--font-size-sm)',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <Button type="submit" fullWidth isLoading={loading}>
                                Sign In
                            </Button>

                            <div className="demo-buttons">
                                {isWorkerLogin ? (
                                    <>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            fullWidth
                                            onClick={() => {
                                                setEmail('demo.cleaner@queren.com')
                                                setPassword('demo123')
                                            }}
                                        >
                                            <Icon name="user" size="sm" />
                                            Fill Staff Demo
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            fullWidth
                                            onClick={() => navigate('/worker-demo')}
                                        >
                                            <Icon name="sparkle" size="sm" />
                                            Try Staff Demo
                                        </Button>
                                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                            <Link
                                                to="/login?role=owner"
                                                style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}
                                            >
                                                Owner Login
                                            </Link>
                                        </div>
                                    </>
                                ) : isOwnerLogin ? (
                                    <>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            fullWidth
                                            onClick={() => {
                                                setEmail('owner@queren.com')
                                                setPassword('owner123')
                                            }}
                                        >
                                            <Icon name="user" size="sm" />
                                            Fill Owner Demo
                                        </Button>
                                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                            <Link
                                                to="/login?role=worker"
                                                style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}
                                            >
                                                Staff Login
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            fullWidth
                                            onClick={() => {
                                                setEmail('demo@queren.com')
                                                setPassword('demo123')
                                            }}
                                        >
                                            <Icon name="user" size="sm" />
                                            Fill Client Demo
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            fullWidth
                                            onClick={() => navigate('/dashboard-demo')}
                                        >
                                            <Icon name="sparkle" size="sm" />
                                            Try Client Demo
                                        </Button>
                                    </>
                                )}
                            </div>
                        </form>

                        {!isWorkerLogin && !isOwnerLogin && (
                            <div className="auth-footer">
                                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                            </div>
                        )}
                    </CardBody>
                </Card>
            </div>

            {/* Forgot Password Modal */}
            {showForgotModal && (
                <div className="modal-overlay" onClick={closeForgotModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <Card>
                            <CardBody>
                                <div className="modal-header">
                                    <h3>Reset Password</h3>
                                    <button
                                        onClick={closeForgotModal}
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                                    >
                                        <Icon name="x" size="md" />
                                    </button>
                                </div>

                                {resetSent ? (
                                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                                        <div style={{ color: 'var(--color-success)', marginBottom: '1rem' }}>
                                            <Icon name="check" size="lg" />
                                        </div>
                                        <h4 style={{ marginBottom: '0.5rem' }}>Check your email</h4>
                                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                            We've sent password reset instructions to <strong>{resetEmail}</strong>
                                        </p>
                                        <Button fullWidth onClick={closeForgotModal}>Back to Login</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleResetPassword}>
                                        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                            Enter your email address and we'll send you a link to reset your password.
                                        </p>
                                        <Input
                                            label="Email Address"
                                            type="email"
                                            value={resetEmail}
                                            onChange={e => setResetEmail(e.target.value)}
                                            required
                                            placeholder="Enter your email"
                                        />
                                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                            <Button type="button" variant="ghost" fullWidth onClick={closeForgotModal}>Cancel</Button>
                                            <Button type="submit" fullWidth isLoading={resetLoading}>Send Link</Button>
                                        </div>
                                    </form>
                                )}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}
