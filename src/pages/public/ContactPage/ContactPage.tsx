import { useState } from 'react'
import { Button, Card, CardBody } from '@/components/ui'
import { Icon } from '@/components/Icon'
import './ContactPage.css'

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        setSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <Card className="contact-form-card">
                            <CardBody>
                                {submitted ? (
                                    <div className="success-message">
                                        <Icon name="check" size="lg" />
                                        <h3>Thank You!</h3>
                                        <p>We've received your message and will get back to you within 24 hours.</p>
                                        <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <h2>Send Us a Message</h2>
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="email">Email *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="(123) 456-7890"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="service">Service Interested In</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a service</option>
                                                <option value="regular">Regular Cleaning</option>
                                                <option value="deep">Deep Cleaning</option>
                                                <option value="custom">Custom Cleaning</option>
                                                <option value="airbnb">AirBnb Cleaning</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                placeholder="Tell us about your cleaning needs..."
                                            />
                                        </div>
                                        <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </form>
                                )}
                            </CardBody>
                        </Card>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card">
                                <div className="info-icon">
                                    <Icon name="phone" size="md" />
                                </div>
                                <div className="info-content">
                                    <h3>Phone</h3>
                                    <p>(647) 123-4567</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Icon name="email" size="md" />
                                </div>
                                <div className="info-content">
                                    <h3>Email</h3>
                                    <p>hello@queren.ca</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Icon name="clock" size="md" />
                                </div>
                                <div className="info-content">
                                    <h3>Business Hours</h3>
                                    <p>Mon - Fri: 8am - 6pm</p>
                                    <p>Sat: 9am - 4pm</p>
                                    <p>Sun: Closed</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Icon name="location" size="md" />
                                </div>
                                <div className="info-content">
                                    <h3>Service Area</h3>
                                    <p>Greater Toronto Area</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
