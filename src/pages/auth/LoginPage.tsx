import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Card, CardBody, Alert } from '@/components/ui'
import { useAuth } from '@/hooks'
import './AuthPages.css'

export function LoginPage() {
    const { signIn } = useAuth()
    const navigate = useNavigate()
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
                    <Link to="/" className="logo">
                        <span className="logo-icon">✨</span>
                        <span className="logo-text">Queren</span>
                    </Link>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account</p>
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
