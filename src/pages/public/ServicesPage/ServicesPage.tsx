import { Link } from 'react-router-dom'
import { Button, Card, CardBody } from '@/components/ui'
import { Icon } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
import pricingImage from '@/assets/images/pricing_feature.png'
import './ServicesPage.css'

// Regular Cleaning includes
const regularCleaningIncludes = [
    'Surface vacuuming & mopping',
    'Dusting all accessible surfaces',
    'Bathroom basics (sink, toilet, tub/shower)',
    'Kitchen surfaces & countertops',
    'General tidying & organization',
    'Trash removal',
]

// Signature Impeccable Extras
const impeccableExtras = [
    'Exhaust fan cleaning',
    'Baseboard detailing',
    'Trash cabinet wipe-down',
    'Microwave interior cleaning',
]

// Deep Cleaning scope
const deepCleaningScope = [
    'Moving furniture for thorough cleaning',
    'Degreasing stove & oven',
    'Interior cabinet wipe-down',
    'Dishwasher deep clean',
    'Grout & tile scrubbing',
    'Sanitizing toys & bookshelves',
    'Behind & under appliances',
    'Window sill detailing',
]

// Client testimonials
const testimonials = [
    {
        quote: "My house is impeccable... other companies didn't clean the baseboards—and you did. You're incredible.",
        highlight: 'impeccable',
    },
    {
        quote: "Today and every day you come here are the best days of my life.",
        highlight: 'best days',
    },
]

export function ServicesPage() {
    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="container">
                    <h1 className="page-title">Our Cleaning Services</h1>
                    <p className="page-subtitle">
                        Transparency, quality, and attention to detail—experience the Queren-Hapuque difference
                    </p>
                </div>
            </section>

            {/* Pricing Logic */}
            <section className="section pricing-logic">
                <div className="container">
                    <div className="pricing-grid">
                        <div className="pricing-content">
                            <div className="pricing-badge">
                                <span>Simple, Transparent Pricing</span>
                            </div>
                            <h2 className="pricing-rate">$40<span>/hour</span></h2>
                            <p className="pricing-explanation">
                                Our flat hourly rate applies to <strong>all services</strong>. Deep Cleaning costs more simply because achieving perfection takes more time—not because of hidden fees or premium charges.
                            </p>
                            <div className="pricing-features">
                                <span><Icon name="check" size="sm" /> No hidden fees</span>
                                <span><Icon name="check" size="sm" /> Same rate for all services</span>
                            </div>
                        </div>
                        <div className="pricing-image-container">
                            <div className="pricing-image-wrapper">
                                <img src={pricingImage} alt="Modern clean home" className="pricing-image" />
                                <div className="pricing-image-decoration"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regular Cleaning */}
            <section className="section service-detail">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-image">
                            <img src={DEFAULT_IMAGES.services.regular} alt="Professional regular cleaning service" />
                        </div>
                        <div className="service-detail-content">
                            <h2 className="service-detail-title">Regular Cleaning</h2>
                            <p className="service-detail-subtitle">High-Quality Maintenance for Your Home</p>
                            <p className="service-detail-description">
                                Our standard cleaning service keeps your home fresh and spotless. Perfect for weekly or bi-weekly maintenance to maintain a consistently clean living space.
                            </p>

                            <div className="service-includes-section">
                                <h3>What's Included</h3>
                                <ul className="includes-checklist">
                                    {regularCleaningIncludes.map((item, i) => (
                                        <li key={i}>
                                            <Icon name="check" size="sm" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="impeccable-extras">
                                <h3>
                                    <Icon name="starFilled" size="sm" />
                                    Our Signature "Impeccable Extras"
                                </h3>
                                <p className="extras-intro">What sets us apart from other cleaning services:</p>
                                <ul className="extras-list">
                                    {impeccableExtras.map((item, i) => (
                                        <li key={i}>
                                            <Icon name="check" size="sm" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="time-estimates">
                                <h3>Estimated Time Guide</h3>
                                <div className="time-badges">
                                    <div className="time-badge">
                                        <span className="time-label">1 Bed / 1 Bath</span>
                                        <span className="time-value">2.5–3 hours</span>
                                    </div>
                                    <div className="time-badge">
                                        <span className="time-label">2 Bed / 2 Bath</span>
                                        <span className="time-value">3–3.5 hours</span>
                                    </div>
                                </div>
                                <p className="time-note">
                                    <Icon name="info" size="sm" />
                                    <em>First visits typically take longer as we do a deep-dive into your home's initial state.</em>
                                </p>
                            </div>

                            <Link to="/booking">
                                <Button size="lg">Book Regular Cleaning</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Cleaning */}
            <section className="section service-detail alt-bg">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-detail-image">
                            <img src={DEFAULT_IMAGES.services.deep} alt="Professional deep cleaning service" />
                        </div>
                        <div className="service-detail-content">
                            <h2 className="service-detail-title">Deep Cleaning</h2>
                            <p className="service-detail-subtitle">Customized, Request-Only Service</p>
                            <p className="service-detail-description">
                                When your home needs extra attention, our Deep Cleaning service goes beyond the surface. This is a specialized service available upon request for thorough, intensive cleaning.
                            </p>

                            <div className="service-includes-section">
                                <h3>The Scope</h3>
                                <ul className="includes-checklist two-column">
                                    {deepCleaningScope.map((item, i) => (
                                        <li key={i}>
                                            <Icon name="check" size="sm" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="difference-box">
                                <h3>
                                    <Icon name="info" size="sm" />
                                    The Difference
                                </h3>
                                <p>
                                    <strong>Regular Cleaning</strong> focuses on visible areas and routine maintenance. <strong>Deep Cleaning</strong> targets hidden dirt, grease buildup, and thorough organization—reaching places that don't need attention every visit but make a dramatic difference when addressed.
                                </p>
                            </div>

                            <Link to="/contact">
                                <Button size="lg">Request Deep Cleaning</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Supplies */}
            <section className="section supplies-section">
                <div className="container">
                    <div className="supplies-card">
                        <div className="supplies-visual">
                            <div className="supplies-icon-glow"></div>
                            <div className="supplies-icon">
                                <Icon name="sparkle" size="lg" />
                            </div>
                        </div>
                        <div className="supplies-content">
                            <div className="supplies-header">
                                <h2>Professional-Grade Supplies Included</h2>
                                <div className="supplies-badges">
                                    <span className="supply-badge">
                                        <Icon name="check" size="md" />
                                        Safe for Pets
                                    </span>
                                    <span className="supply-badge">
                                        <Icon name="check" size="md" />
                                        Eco-Friendly
                                    </span>
                                </div>
                            </div>
                            <p>
                                We bring our own professional-grade cleaning products at <strong>no extra charge</strong>. Our carefully selected supplies ensure the highest quality results while being safe for your home and family.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Stories */}
            <section className="section client-stories">
                <div className="container">
                    <h2 className="section-title text-center">Client Stories</h2>
                    <p className="section-subtitle text-center">
                        Real feedback from our valued clients
                    </p>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <Card key={i} className="testimonial-card">
                                <CardBody>
                                    <div className="quote-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className="testimonial-quote">"{t.quote}"</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section services-cta">
                <div className="cta-background">
                    <img
                        src={DEFAULT_IMAGES.general[5]}
                        alt="Professional home cleaning"
                    />
                    <div className="cta-overlay"></div>
                </div>
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-badge">
                            <Icon name="starFilled" size="sm" filled />
                            <span>Trusted by Happy Families</span>
                        </div>
                        <h2>Ready to Experience the Difference?</h2>
                        <p>Book your cleaning service today and discover what "impeccable" really means.</p>
                        <div className="cta-actions">
                            <Link to="/booking">
                                <Button size="lg">Book Your Cleaning</Button>
                            </Link>
                        </div>
                        <div className="cta-features">
                            <span><Icon name="check" size="sm" /> $40/hour flat rate</span>
                            <span><Icon name="check" size="sm" /> Satisfaction guaranteed</span>
                            <span><Icon name="check" size="sm" /> Professional supplies included</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
