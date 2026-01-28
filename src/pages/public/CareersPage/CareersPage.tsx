import { Button, Card, CardBody } from '@/components/ui'
import { Icon } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
import './CareersPage.css'

export function CareersPage() {
    return (
        <div className="careers-page">
            {/* Hero Section */}
            <section className="careers-hero">
                <div className="container">
                    <div className="careers-hero-content">
                        <h1 className="careers-title">Join Our Team</h1>
                        <p className="careers-subtitle">
                            Build a rewarding career helping people enjoy cleaner, healthier spaces.
                            We're always looking for dedicated professionals to join our growing team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="section section-benefits">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Work With Us?</h2>
                        <p className="section-subtitle">We believe in taking care of our team members</p>
                    </div>

                    <div className="benefits-grid">
                        <Card className="benefit-card">
                            <CardBody>
                                <div className="benefit-icon"><Icon name="dollar" size="lg" /></div>
                                <h3>Competitive Pay</h3>
                                <p>We offer above-market rates and performance bonuses.</p>
                            </CardBody>
                        </Card>
                        <Card className="benefit-card">
                            <CardBody>
                                <div className="benefit-icon"><Icon name="calendar" size="lg" /></div>
                                <h3>Flexible Schedule</h3>
                                <p>Work when it suits you. Full-time and part-time options.</p>
                            </CardBody>
                        </Card>
                        <Card className="benefit-card">
                            <CardBody>
                                <div className="benefit-icon"><Icon name="user" size="lg" /></div>
                                <h3>Great Team</h3>
                                <p>Join a supportive, friendly community of professionals.</p>
                            </CardBody>
                        </Card>
                        <Card className="benefit-card">
                            <CardBody>
                                <div className="benefit-icon"><Icon name="check" size="lg" /></div>
                                <h3>Training Provided</h3>
                                <p>Comprehensive training and ongoing support.</p>
                            </CardBody>
                        </Card>
                        <Card className="benefit-card">
                            <CardBody>
                                <div className="benefit-icon"><Icon name="star" size="lg" /></div>
                                <h3>Growth Opportunities</h3>
                                <p>Clear paths for advancement and raises.</p>
                            </CardBody>
                        </Card>
                        <Card className="benefit-card">
                            <CardBody>
                                <div className="benefit-icon"><Icon name="shield" size="lg" /></div>
                                <h3>Health Benefits</h3>
                                <p>Health insurance options for full-time employees.</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Application Section & Requirements */}
            <section className="section section-application">
                <div className="container">
                    <div className="application-grid">
                        {/* Requirements */}
                        <div className="requirements-col">
                            <div className="requirements-card">
                                <h3>What We're Looking For</h3>
                                <p className="requirements-subtitle">Basic requirements to join our team</p>

                                <ul className="requirements-list">
                                    <li>
                                        <Icon name="check" size="sm" />
                                        <span>Reliable transportation to travel between jobs</span>
                                    </li>
                                    <li>
                                        <Icon name="check" size="sm" />
                                        <span>Physical ability to perform cleaning tasks</span>
                                    </li>
                                    <li>
                                        <Icon name="check" size="sm" />
                                        <span>Background check required</span>
                                    </li>
                                    <li>
                                        <Icon name="check" size="sm" />
                                        <span>Attention to detail and pride in your work</span>
                                    </li>
                                    <li>
                                        <Icon name="check" size="sm" />
                                        <span>Professional and friendly demeanor</span>
                                    </li>
                                    <li>
                                        <Icon name="check" size="sm" />
                                        <span>Previous cleaning experience preferred (but not required)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Testimonial */}
                            <div className="career-testimonial">
                                <div className="testimonial-header">
                                    <img
                                        src={DEFAULT_IMAGES.general[0]}
                                        alt="Maria S."
                                        className="testimonial-photo"
                                    />
                                    <div className="testimonial-author">
                                        <strong>Maria S.</strong>
                                        <span>Cleaning Professional</span>
                                    </div>
                                </div>
                                <p>“I love working at Queren. The management really cares about us, and the clients are great. It's the best cleaning company I've worked for.”</p>
                            </div>
                        </div>

                        {/* Application Form */}
                        <div className="form-col">
                            <Card className="application-form-card">
                                <CardBody>
                                    <h3>Apply Now</h3>
                                    <p className="form-subtitle">Fill out the form below and we'll be in touch soon</p>

                                    <form className="application-form" onSubmit={(e) => e.preventDefault()}>
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" placeholder="Jane Doe" className="form-input" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" placeholder="jane@example.com" className="form-input" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" id="phone" placeholder="(555) 123-4567" className="form-input" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="experience">Previous Cleaning Experience</label>
                                            <select id="experience" className="form-select">
                                                <option value="">Select option...</option>
                                                <option value="none">None</option>
                                                <option value="less-than-1">Less than 1 year</option>
                                                <option value="1-3">1-3 years</option>
                                                <option value="3-plus">3+ years</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="availability">Availability</label>
                                            <select id="availability" className="form-select">
                                                <option value="">Select option...</option>
                                                <option value="full-time">Full Time</option>
                                                <option value="part-time">Part Time</option>
                                                <option value="weekends">Weekends Only</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Resume / Cover Letter</label>
                                            <div className="file-upload">
                                                <Icon name="upload" size="md" />
                                                <span>Choose a file (PDF, DOC, DOCX)</span>
                                                <input type="file" className="file-input-hidden" />
                                            </div>
                                        </div>

                                        <Button fullWidth size="lg">Submit Application</Button>
                                    </form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
