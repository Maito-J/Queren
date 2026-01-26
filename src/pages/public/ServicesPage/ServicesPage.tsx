import { Link } from 'react-router-dom'
import { Button } from '@/components/ui'
import { Icon } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
import './ServicesPage.css'

// What's included in each service
const regularCleaningIncludes = [
    'Living room & bedroom cleaning',
    'Kitchen cleaning & sanitizing',
    'Bathroom cleaning',
    'Dusting & vacuuming',
    'Trash removal',
    'Professional cleaning supplies included',
    'Satisfaction guaranteed',
]

const deepCleaningIncludes = [
    'Everything in Regular Cleaning',
    'Window sills & baseboards',
    'Inside cabinets & drawers',
    'Behind appliances',
    'Deep scrub bathroom tile & grout',
    'Interior window cleaning',
    'Oven & stovetop deep clean',
    'Satisfaction guaranteed',
]

const customCleaningIncludes = [
    'Special cleaning requests',
    'Move-in/move-out cleaning',
    'Post-renovation cleaning',
    'Event preparation cleaning',
    'Customized cleaning schedule',
    'Professional cleaning supplies included',
    'Satisfaction guaranteed',
]

const airbnbCleaningIncludes = [
    'Complete turnover cleaning',
    'Fresh linens & towel setup',
    'Restock essentials',
    'Kitchen & bathroom sanitizing',
    'Quick turnaround times',
    'Guest-ready inspection',
    'Satisfaction guaranteed',
]

interface ServiceSectionProps {
    title: string
    description: string
    includes: string[]
    image: string
    imageAlt: string
    link?: string
    buttonText?: string
    imageOnRight?: boolean
    comingSoon?: boolean
}

function ServiceSection({
    title,
    description,
    includes,
    image,
    imageAlt,
    link,
    buttonText,
    imageOnRight = false,
    comingSoon
}: ServiceSectionProps) {
    return (
        <section className={`service-section ${imageOnRight ? 'image-right' : 'image-left'}`}>
            <div className="container">
                <div className="service-content">
                    <div className="service-image">
                        <img src={image} alt={imageAlt} />
                    </div>
                    <div className="service-info">
                        <h2 className="service-heading">
                            {title}
                            {comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
                        </h2>
                        <p className="service-description">{description}</p>
                        <div className="service-includes">
                            <h3 className="includes-title">What's Included</h3>
                            <ul className="includes-list">
                                {includes.map((item, index) => (
                                    <li key={index} className="includes-item">
                                        <Icon name="check" size="sm" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {link && buttonText && (
                            <Link to={link}>
                                <Button size="lg">{buttonText}</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ServicesPage() {
    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">
                        Professional cleaning solutions tailored to your needs
                    </p>
                </div>
            </section>

            {/* Regular Cleaning - Photo Left, Intro Right */}
            <ServiceSection
                title="Regular Cleaning"
                description="Keep your home spotless with our professional residential cleaning services. Perfect for weekly or bi-weekly maintenance to maintain a fresh, clean living space."
                includes={regularCleaningIncludes}
                image={DEFAULT_IMAGES.services.regular}
                imageAlt="Professional vacuum cleaning service"
                link="/booking"
                buttonText="Book Regular Cleaning"
                imageOnRight={false}
            />

            {/* Deep Cleaning - Intro Left, Photo Right */}
            <ServiceSection
                title="Deep Cleaning"
                description="Thorough deep cleaning for those hard-to-reach areas and stubborn stains. Ideal for seasonal cleaning, moving in/out, or when your home needs extra attention."
                includes={deepCleaningIncludes}
                image={DEFAULT_IMAGES.services.deep}
                imageAlt="Deep cleaning service"
                link="/booking"
                buttonText="Book Deep Cleaning"
                imageOnRight={true}
            />

            {/* Custom Cleaning - Photo Left, Intro Right */}
            <ServiceSection
                title="Custom Cleaning"
                description="Have special cleaning needs? We can customize our services to fit your requirements. Contact us to discuss move-in/move-out cleaning, post-renovation cleaning, or any other special requests."
                includes={customCleaningIncludes}
                image={DEFAULT_IMAGES.general[2]}
                imageAlt="Custom cleaning service"
                link="/contact"
                buttonText="Contact Us"
                imageOnRight={false}
            />

            {/* AirBnb Cleaning - Intro Left, Photo Right */}
            <ServiceSection
                title="AirBnb Cleaning"
                description="Professional turnover cleaning for your rental properties. We ensure your space is guest-ready with quick turnaround times and attention to detail."
                includes={airbnbCleaningIncludes}
                image={DEFAULT_IMAGES.services.professional}
                imageAlt="Professional AirBnb cleaning service"
                imageOnRight={true}
                comingSoon
            />

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Get Started?</h2>
                        <p>Book your cleaning service today and enjoy a spotless home.</p>
                        <Link to="/booking">
                            <Button size="lg">Book Now</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
