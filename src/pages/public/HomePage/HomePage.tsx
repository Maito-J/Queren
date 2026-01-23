import { Link } from 'react-router-dom'
import { Button, Card, CardBody } from '@/components/ui'
import './HomePage.css'
import checkIcon from '@/assets/icon/check.svg'
import paidMoneyIcon from '@/assets/icon/paid_money.svg'
import editCalendarIcon from '@/assets/icon/edit_calendar.svg'

const testimonials = [
    { name: 'Sarah M.', rating: 5, text: 'Amazing service! My home has never been this clean. Highly recommend.', city: 'Toronto' },
    { name: 'James K.', rating: 5, text: 'Professional, thorough, and friendly. Will definitely book again!', city: 'Vancouver' },
    { name: 'Linda P.', rating: 5, text: 'The booking process was so easy, and the cleaning exceeded expectations.', city: 'Calgary' },
]

const features = [
    { icon: checkIcon, title: 'Vetted Cleaners', description: 'Every cleaner is background-checked and professionally trained.' },
    { icon: paidMoneyIcon, title: 'Transparent Pricing', description: 'No hidden fees. Know your exact price before you book.' },
    { icon: editCalendarIcon, title: 'Flexible Scheduling', description: 'Book online 24/7. Cancel or reschedule anytime.' },
]

const services = [
    { title: 'Regular Cleaning', price: 89, description: 'Weekly or bi-weekly maintenance cleaning to keep your home fresh.', link: '/services/regular' },
    { title: 'Deep Cleaning', price: 149, description: 'Thorough top-to-bottom cleaning for a complete refresh.', link: '/services/deep' },
    { title: 'Custom Clean', price: null, description: 'Special requests? Moving? We can customize to your needs.', link: '/contact' },
]

export function HomePage() {
    return (
        <div className="home-page">
            {/* Hero */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Professional Cleaning,<br />
                            <span className="text-primary">Worry-Free</span>
                        </h1>
                        <p className="hero-subtitle">
                            Trusted, vetted cleaners at your doorstep. Transparent pricing, easy booking, sparkling results.
                        </p>
                        <div className="hero-actions">
                            <Link to="/booking">
                                <Button size="lg">Book Now</Button>
                            </Link>
                            <Link to="/services/pricing">
                                <Button variant="outline" size="lg">See Pricing</Button>
                            </Link>
                        </div>
                        <div className="hero-trust">
                            <span>⭐ 4.9 Rating</span>
                            <span>•</span>
                            <span>500+ Happy Homes</span>
                            <span>•</span>
                            <span>100% Satisfaction</span>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-image-placeholder">
                            🏠
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section features">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="feature-item">
                                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-text">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section how-it-works">
                <div className="container">
                    <h2 className="section-title text-center">How It Works</h2>
                    <p className="section-subtitle text-center">
                        Getting your home cleaned is as easy as 1-2-3
                    </p>
                    <div className="steps-grid">
                        <div className="step-item">
                            <div className="step-number">1</div>
                            <h3>Book Online</h3>
                            <p>Choose your service, date, and time in minutes.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">2</div>
                            <h3>We Clean</h3>
                            <p>Our vetted cleaner arrives and works their magic.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">3</div>
                            <h3>You Relax</h3>
                            <p>Come home to a sparkling clean space.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section services-section">
                <div className="container">
                    <h2 className="section-title text-center">Our Services</h2>
                    <div className="services-grid">
                        {services.map((service, i) => (
                            <Card key={i} hover className="service-card">
                                <CardBody>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-price">
                                        {service.price ? `Starting at $${service.price}` : 'Custom Quote'}
                                    </p>
                                    <p className="service-desc">{service.description}</p>
                                    <Link to={service.link}>
                                        <Button variant="secondary" fullWidth>
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials">
                <div className="container">
                    <h2 className="section-title text-center">What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <Card key={i} className="testimonial-card">
                                <CardBody>
                                    <div className="testimonial-stars">{'⭐'.repeat(t.rating)}</div>
                                    <p className="testimonial-text">"{t.text}"</p>
                                    <p className="testimonial-author">
                                        <strong>{t.name}</strong> — {t.city}
                                    </p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready for a Sparkling Home?</h2>
                        <p>Book your cleaning in under 2 minutes. No surprises, just clean.</p>
                        <Link to="/booking">
                            <Button size="lg">Book Your Cleaning</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
