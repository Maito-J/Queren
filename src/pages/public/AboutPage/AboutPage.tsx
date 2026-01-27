import { Link } from 'react-router-dom'
import { Button } from '@/components/ui'
import { Icon } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
import './AboutPage.css'

const coreValues = [
    {
        icon: '✨',
        title: 'Impeccable Quality',
        description: 'We believe every corner matters. From baseboards to ceiling fans, we deliver spotless results that exceed expectations.'
    },
    {
        icon: '🤝',
        title: 'Trust & Professionalism',
        description: 'Your home is your sanctuary. We treat it with the utmost respect, showing up on time and maintaining the highest standards.'
    },
    {
        icon: '💡',
        title: 'Proactive Helpfulness',
        description: 'We anticipate your needs. If we notice something that could use attention, we take care of it without being asked.'
    },
    {
        icon: '🌿',
        title: 'Healthy Living',
        description: 'A clean home is a healthy home. We use safe, effective products to create environments where families thrive.'
    }
]

export function AboutPage() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-title">
                            More Than Just Cleaning—<br />
                            <span className="text-highlight">We Create a Home You Love Coming Back To</span>
                        </h1>
                        <p className="about-hero-subtitle">
                            Professional residential cleaning focused on creating safe, healthy, and happy environments for families in New Westminster.
                        </p>
                        <div className="about-hero-actions">
                            <Link to="/booking">
                                <Button size="lg">Book a Cleaning</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg">Get in Touch</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="about-hero-decorative">
                    <div className="hero-glow hero-glow-1"></div>
                    <div className="hero-glow hero-glow-2"></div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="about-story section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <span className="section-badge">Our Story</span>
                            <h2 className="section-title">Making Families Feel at Home</h2>
                            <p className="story-paragraph">
                                At Queren-Hapuque Cleaning, we believe that coming home should feel like a breath of fresh air. Our mission goes beyond just cleaning—we want every family to feel good the moment they step through their front door.
                            </p>
                            <p className="story-paragraph">
                                We understand that your home is where life happens. It's where your children play, where you relax after a long day, and where memories are made. That's why we approach every home with the same care and attention we'd give our own.
                            </p>
                            <blockquote className="story-quote">
                                <Icon name="quote" size="lg" />
                                <p>"Enter a home as if it were your own; leave every space impeccable."</p>
                                <cite>— Our Philosophy</cite>
                            </blockquote>
                        </div>
                        <div className="story-image">
                            <div className="story-image-wrapper">
                                <img
                                    src={DEFAULT_IMAGES.team}
                                    alt="Professional cleaning service creating a welcoming home"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Profile Section */}
            <section className="about-founder section">
                <div className="container">
                    <div className="founder-content">
                        <div className="founder-image">
                            <div className="founder-image-wrapper">
                                <div className="founder-placeholder">
                                    <span>Q</span>
                                </div>
                            </div>
                            <div className="founder-badge">
                                <span>6+ Years Experience</span>
                            </div>
                        </div>
                        <div className="founder-text">
                            <span className="section-badge">Meet the Founder</span>
                            <h2 className="section-title">Queren</h2>
                            <p className="founder-role">Founder & Lead Cleaning Specialist</p>
                            <p className="founder-paragraph">
                                With over 6 years of experience in residential cleaning, Queren brings an unmatched attention to detail to every home she touches. Her passion for perfection means nothing is overlooked—from the baseboards that collect dust to the corners that often go unnoticed.
                            </p>
                            <p className="founder-paragraph">
                                As a self-proclaimed perfectionist, Queren understands that it's the small things that make life easier for busy families. A sparkling countertop, freshly made beds, and a bathroom that shines—these details create the foundation for a peaceful home.
                            </p>
                            <div className="founder-traits">
                                <div className="trait">
                                    <Icon name="check" size="sm" />
                                    <span>Detail-Oriented Perfectionist</span>
                                </div>
                                <div className="trait">
                                    <Icon name="check" size="sm" />
                                    <span>Family-Focused Approach</span>
                                </div>
                                <div className="trait">
                                    <Icon name="check" size="sm" />
                                    <span>Passionate About Clean Spaces</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="about-values section">
                <div className="container">
                    <div className="values-header">
                        <span className="section-badge">What We Stand For</span>
                        <h2 className="section-title text-center">Our Core Values</h2>
                        <p className="section-subtitle text-center">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="values-grid">
                        {coreValues.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Info Section */}
            <section className="about-service-info section">
                <div className="container">
                    <div className="service-info-content">
                        <div className="service-info-text">
                            <span className="section-badge">Where We Serve</span>
                            <h2 className="section-title">Proudly Serving Greater New Westminster</h2>
                            <p className="service-info-description">
                                Based in Queensborough, New Westminster, we bring our premium cleaning services to homes within a 25 km radius. Our central location allows us to serve families throughout the Lower Mainland with efficiency and care.
                            </p>
                            <div className="service-info-details">
                                <div className="info-item">
                                    <div className="info-icon">📍</div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p>Queensborough, New Westminster</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">🗺️</div>
                                    <div className="info-content">
                                        <h4>Service Radius</h4>
                                        <p>25 km from Queensborough</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">💎</div>
                                    <div className="info-content">
                                        <h4>Premium Rate</h4>
                                        <p>$40/hour</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-info-map">
                            <div className="map-image-wrapper">
                                <img
                                    src={DEFAULT_IMAGES.general[0]}
                                    alt="Professional cleaning in your area"
                                />
                                <div className="map-overlay">
                                    <div className="map-pin">📍</div>
                                    <span>Queensborough, New Westminster</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Careers CTA Section */}
            <section className="about-vision section">
                <div className="vision-decorative">
                    <div className="vision-glow vision-glow-1"></div>
                    <div className="vision-glow vision-glow-2"></div>
                </div>
                <div className="container">
                    <div className="vision-content">
                        <span className="section-badge section-badge-light">Our Vision</span>
                        <h2 className="vision-title">Growing Together, Cleaning Better</h2>
                        <p className="vision-description">
                            We're building more than a cleaning company—we're creating a team of passionate professionals who share our commitment to excellence. Our vision is to grow into a 5-person team within the next 2 years, expanding our reach while maintaining the personal touch that sets us apart.
                        </p>
                        <div className="vision-cta">
                            <h3>Join Our Growing Team</h3>
                            <p>Are you a professional cleaner who takes pride in their work? We're looking for dedicated individuals who share our passion for creating clean, healthy homes.</p>
                            <Link to="/about/careers">
                                <Button size="lg" variant="secondary">View Career Opportunities</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="about-final-cta section">
                <div className="container">
                    <div className="final-cta-content">
                        <h2>Ready to Experience the Difference?</h2>
                        <p>Book your first cleaning and see why families trust Queren-Hapuque Cleaning.</p>
                        <Link to="/booking">
                            <Button size="lg">Book Your Cleaning Today</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
