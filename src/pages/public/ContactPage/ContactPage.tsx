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
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Info Section - Photo Left, Info Right */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        <div className="contact-photo">
                            <img src={DEFAULT_IMAGES.team} alt="Our cleaning team" />
                        </div>
                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="detail-icon">
                                    <Icon name="phone" size="md" />
                                </div>
                                <div className="detail-content">
                                    <h3>Phone</h3>
                                    <p>(647) 123-4567</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="detail-icon">
                                    <Icon name="email" size="md" />
                                </div>
                                <div className="detail-content">
                                    <h3>Email</h3>
                                    <p>hello@queren.ca</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="detail-icon">
                                    <Icon name="location" size="md" />
                                </div>
                                <div className="detail-content">
                                    <h3>Service Area</h3>
                                    <p>New Westminster</p>
                                    <ul className="service-area-list">
                                        <li>Maximum 25 km radius by car</li>
                                        <li>Maximum ETA: 45 minutes by vehicle</li>
                                        <li>Public transit: max 1 hour 15 minutes</li>
                                    </ul>
                                </div>
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
