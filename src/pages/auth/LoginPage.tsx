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
    const isWorkerLogin = searchParams.get('role') === 'worker'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

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

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>{isWorkerLogin ? 'Cleaner Portal' : 'Welcome Back'}</h1>
                    <p>{isWorkerLogin ? 'Sign in to access your dashboard' : 'Sign in to your account'}</p>
                </div>

                <Card className="auth-card">
                    <CardBody>
                        {error && (
                            <Alert variant="error">{error}</Alert>
                        )}

                        <form onSubmit={handleSubmit} className="auth-form">
                            <Input
                                label="Email"
                                type="email"
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
                                <Link to="/forgot-password">Forgot password?</Link>
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

                        <div className="auth-footer">
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
