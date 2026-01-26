import { useState } from 'react'
import { Button, Card, CardBody } from '@/components/ui'
import { Icon } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
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
            {/* Hero with Photo */}
            <section className="contact-hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="page-title">Contact Us</h1>
                            <p className="page-subtitle">
                                Have questions? We'd love to hear from you.
                            </p>
                        </div>
                        <div className="hero-image">
                            <img src={DEFAULT_IMAGES.team} alt="Our cleaning team" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Bar */}
            <section className="contact-info-bar">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-item">
                            <Icon name="phone" size="md" />
                            <div>
                                <h3>Phone</h3>
                                <p>(647) 123-4567</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Icon name="email" size="md" />
                            <div>
                                <h3>Email</h3>
                                <p>hello@queren.ca</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Icon name="clock" size="md" />
                            <div>
                                <h3>Hours</h3>
                                <p>Mon-Fri 8am-6pm</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Icon name="location" size="md" />
                            <div>
                                <h3>Service Area</h3>
                                <p>Greater Toronto Area</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <div className="container">
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
                                    <div className="form-row">
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
                                    </div>
                                    <div className="form-row">
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
                </div>
            </section>
        </div>
    )
}
