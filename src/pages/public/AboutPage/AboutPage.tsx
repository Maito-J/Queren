import { Link } from 'react-router-dom'
import { Button } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
import './AboutPage.css'

const coreValues: { icon: IconName; title: string; description: string }[] = [
    {
        icon: 'sparkle',
        title: 'Impeccable Quality',
        description: 'We believe every corner matters. From baseboards to ceiling fans, we deliver spotless results that exceed expectations.'
    },
    {
        icon: 'handshake',
        title: 'Trust & Professionalism',
        description: 'Your home is your sanctuary. We treat it with the utmost respect, showing up on time and maintaining the highest standards.'
    },
    {
        icon: 'lightbulb',
        title: 'Proactive Helpfulness',
        description: 'We anticipate your needs. If we notice something that could use attention, we take care of it without being asked.'
    },
    {
        icon: 'broom',
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
                            <span className="section-badge">About Us</span>
                            <h2 className="section-title">Our Story</h2>
                            <p className="story-paragraph">
                                At Queren-Hapuque Cleaning, we believe that a truly clean home is the foundation of a peaceful life. Our mission is to deliver premium cleaning services with meticulous attention to detail, transforming spaces into sanctuaries of comfort and well-being.
                            </p>
                            <p className="story-paragraph">
                                We're not just about cleaning—we're about creating environments where you can thrive. Every corner, every surface, every detail matters to us because your peace of mind matters to us.
                            </p>
                        </div>
                        <div className="story-image">
                            <div className="story-image-wrapper">
                                <img
                                    src={DEFAULT_IMAGES.general[4]}
                                    alt="Clean and bright home interior"
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
                                <img
                                    src={DEFAULT_IMAGES.general[2]}
                                    alt="Queren - Founder of Queren-Hapuque Cleaning"
                                />
                            </div>
                        </div>
                        <div className="founder-text">
                            <span className="section-badge"><Icon name="sparkle" size="sm" /> Meet Our Founder</span>
                            <h2 className="section-title">Queren's Story</h2>
                            <p className="founder-paragraph">
                                With <strong>6 years of dedicated experience</strong> in the cleaning industry, Queren founded Queren-Hapuque Cleaning with a simple yet powerful vision: to elevate cleaning from a routine task to an art form.
                            </p>
                            <p className="founder-paragraph">
                                What sets Queren apart is her unwavering attention to detail. While many overlook the small things, Queren has developed a signature focus on often-neglected areas—particularly <strong>baseboards</strong>. To her, these overlooked details are the hallmark of truly exceptional cleaning.
                            </p>
                            <p className="founder-paragraph">
                                "When I walk into a room, I see it from every angle," Queren explains. "The baseboards tell the story of how much care has been put into a space. That's where true professionalism shows."
                            </p>
                            <p className="founder-paragraph">
                                This philosophy of comprehensive care has become the cornerstone of Queren-Hapuque Cleaning, where no corner is too small to matter and every detail receives the attention it deserves.
                            </p>
                            <blockquote className="founder-quote">
                                <p>"Excellence is in the details. It's not about cleaning faster—it's about cleaning better."</p>
                                <cite>— Queren, Founder</cite>
                            </blockquote>
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
                                <div className="value-icon"><Icon name={value.icon} size="xl" /></div>
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
                                    <div className="info-icon"><Icon name="mapPin" size="lg" /></div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p>Queensborough, New Westminster</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><Icon name="location" size="lg" /></div>
                                    <div className="info-content">
                                        <h4>Service Radius</h4>
                                        <p>25 km from Queensborough</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><Icon name="star" size="lg" /></div>
                                    <div className="info-content">
                                        <h4>Premium Rate</h4>
                                        <p>$40/hour</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-info-map">
                            <div className="service-info-image">
                                <img
                                    src={DEFAULT_IMAGES.general[3]}
                                    alt="Professional cleaning in New Westminster area"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="about-vision">
                <div className="vision-background">
                    <img
                        src={DEFAULT_IMAGES.general[5]}
                        alt="Our vision for professional cleaning"
                    />
                    <div className="vision-overlay"></div>
                </div>
                <div className="container">
                    <div className="vision-content">
                        <h2 className="vision-title">Ready to experience a truly clean home?</h2>
                        <p className="vision-description">
                            Start your journey with Queren-Hapuque Cleaning today.
                        </p>
                        <Link to="/booking" className="vision-btn">
                            Book a Cleaning
                        </Link>
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
