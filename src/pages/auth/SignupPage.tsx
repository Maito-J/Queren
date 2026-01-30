import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Card, CardBody, Alert } from '@/components/ui'
import { useAuth } from '@/hooks'
import './AuthPages.css'

export function SignupPage() {
    const { signUp } = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters')
            return
        }

        setLoading(true)

        const { error: signUpError } = await signUp(
            formData.email,
            formData.password,
            formData.fullName,
            formData.phone
        )

        if (signUpError) {
            setError(signUpError.message)
            setLoading(false)
        } else {
            navigate('/dashboard')
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">

                    <h1>Create Your Account</h1>
                    <p>Join thousands of happy homeowners</p>
                </div>

                <Card className="auth-card">
                    <CardBody>
                        {error && (
                            <Alert variant="error">{error}</Alert>
                        )}

                        <form onSubmit={handleSubmit} className="auth-form">
                            <Input
                                label="Full Name"
                                value={formData.fullName}
                                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                required
                            />
                            <Input
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                required
                            />
                            <Input
                                label="Phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                required
                            />
                            <Input
                                label="Password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                helper="At least 8 characters"
                                required
                            />
                            <Input
                                label="Confirm Password"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                required
                            />

                            <Button type="submit" fullWidth isLoading={loading}>
                                Create Account
                            </Button>
                        </form>

                        <div className="auth-footer">
                            <p>Already have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
