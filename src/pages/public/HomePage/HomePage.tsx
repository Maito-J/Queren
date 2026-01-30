import { Link } from 'react-router-dom'
import { Button, Card, CardBody, LandingBackgroundBubbles } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
import './HomePage.css'

const testimonials = [
    { name: 'Déssia', rating: 5, text: 'Today and every day you come here are the best days of my life.', city: '4-year Client' },
    { name: 'Happy Client', rating: 5, text: "My house is impeccable and all the other cleaning companies I called didn't clean the baseboards — and you did. You're incredible.", city: 'Recent Review' },
    { name: 'Linda P.', rating: 5, text: 'The booking process was so easy, and the cleaning exceeded expectations.', city: 'Calgary' },
]

const features: { icon: IconName; title: string; description: string }[] = [
    { icon: 'check', title: 'Vetted Cleaners', description: 'Every cleaner is background-checked and professionally trained.' },
    { icon: 'dollar', title: 'Transparent Pricing', description: 'No hidden fees. Know your exact price before you book.' },
    { icon: 'calendar', title: 'Flexible Scheduling', description: 'Book online 24/7. Cancel or reschedule anytime.' },
]

const services = [
    { title: 'Regular Cleaning', price: 89, description: 'Weekly or bi-weekly maintenance cleaning to keep your home fresh.', link: '/services', image: DEFAULT_IMAGES.services.regular },
    { title: 'Deep Cleaning', price: 149, description: 'Thorough top-to-bottom cleaning for a complete refresh.', link: '/services', image: DEFAULT_IMAGES.kitchen[0] },
    { title: 'Custom Clean', price: null, description: 'Special requests? Moving? We can customize to your needs.', link: '/services', image: DEFAULT_IMAGES.services.professional },
]

export function HomePage() {
    return (
        <div className="home-page">
            <LandingBackgroundBubbles />
            {/* Hero */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Professional Cleaning Services<br />
                            <span className="text-primary">You Can Trust</span>
                        </h1>
                        <p className="hero-subtitle">
                            Trusted, vetted cleaners at your doorstep. Transparent pricing, easy booking, sparkling results.
                        </p>
                        <div className="hero-actions">
                            <Link to="/booking">
                                <Button size="lg">Book Now</Button>
                            </Link>
                            <Link to="/services/pricing">
                                <Button variant="outline" size="lg" style={{ backgroundColor: 'white' }}>View Pricing</Button>
                            </Link>
                        </div>
                        <div className="hero-trust">
                            <span><Icon name="starFilled" size="sm" filled /> 4.9 Rating</span>
                            <span>•</span>
                            <span>500+ Happy Homes</span>
                            <span>•</span>
                            <span>100% Satisfaction</span>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img
                            src={DEFAULT_IMAGES.hero}
                            alt="Professional cleaning service - couple cleaning their home together"
                            className="hero-img"
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section features">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="feature-item">
                                <span className="feature-icon"><Icon name={feature.icon} size="lg" /></span>
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
                                <img src={service.image} alt={service.title} className="service-card-img" />
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
                                    <div className="testimonial-stars">{Array(t.rating).fill(null).map((_, idx) => <Icon key={idx} name="starFilled" size="sm" filled />)}</div>
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
                <div className="cta-background">
                    <img
                        src={DEFAULT_IMAGES.general[1]}
                        alt="Professional home cleaning"
                    />
                    <div className="cta-overlay"></div>
                </div>
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-badge">
                            <Icon name="starFilled" size="sm" filled />
                            <span>Trusted by 500+ Happy Homes</span>
                        </div>
                        <h2>Ready for a Sparkling Home?</h2>
                        <p>Book your cleaning in under 2 minutes. No surprises, just clean.</p>
                        <div className="cta-actions">
                            <Link to="/booking">
                                <Button size="lg">Book Your Cleaning</Button>
                            </Link>
                        </div>
                        <div className="cta-features">
                            <span><Icon name="check" size="sm" /> Free Cancellation</span>
                            <span><Icon name="check" size="sm" /> Satisfaction Guaranteed</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
