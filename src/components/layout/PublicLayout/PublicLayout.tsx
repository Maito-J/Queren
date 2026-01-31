import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { LandingBackgroundBubbles } from '../../ui/LandingBackgroundBubbles/LandingBackgroundBubbles'
import logo from '@/assets/Logo/transparent-logo.svg'
import './PublicLayout.css'

interface PublicLayoutProps {
    children: React.ReactNode
}

/**
 * Public layout with proper auth state handling.
 * - Logged OUT: Shows "Log In / Register" button
 * - Logged IN: Shows profile icon that links to dashboard
 */
export function PublicLayout({ children }: PublicLayoutProps) {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)



    return (
        <div className="public-layout">
            <header className="public-header">
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo">
                            <img src={logo} alt="Queren" className="logo-icon" />
                        </Link>

                        <nav className={`nav-main ${mobileMenuOpen ? 'open' : ''}`}>
                            <NavLink to="/" className="nav-link" end onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                            <NavLink to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
                            <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                            <NavLink to="/careers" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Careers</NavLink>
                            <NavLink to="/faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</NavLink>
                            <NavLink to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>

                            {/* Mobile-only menu actions */}
                            <div className="mobile-nav-actions mobile-only">
                                <Link to="/booking" className="btn btn-primary btn-block" onClick={() => setMobileMenuOpen(false)}>
                                    Book Now
                                </Link>
                                <Link
                                    to="/login"
                                    className="btn btn-outline btn-block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Log In / Register
                                </Link>
                            </div>
                        </nav>

                        {/* Header actions - conditional based on auth state */}
                        <div className="header-actions">
                            {/* Always show login button */}
                            <Link to="/login" className="header-login-btn">
                                Log In / Register
                            </Link>

                            {/* Logged IN: Profile button removed as requested */}


                            {/* Book Now button - always visible on desktop, hidden on mobile */}
                            <Link to="/booking" className="btn btn-primary header-book-btn">
                                Book Now
                            </Link>
                        </div>

                        <button
                            className="mobile-menu-btn hide-desktop"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="public-main">{children}</main>

            <footer className="public-footer">
                {/* Background Bubbles strictly for footer */}
                <LandingBackgroundBubbles
                    density={10}
                    minSpeed={15}
                    maxSpeed={30}
                    minOpacity={0.1}
                    maxOpacity={0.3}
                />

                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link to="/" className="logo">
                                <img src={logo} alt="Queren" className="logo-icon" />
                            </Link>
                            <p className="footer-tagline">
                                Simplify your life with our professional cleaning services. Book in minutes, relax for hours.
                            </p>
                        </div>

                        {/* Link columns grouped together */}
                        <div className="footer-links-group">
                            <div className="footer-links">
                                <h4>Services</h4>
                                <Link to="/services#regular">Regular Cleaning</Link>
                                <Link to="/services#deep">Deep Cleaning</Link>
                                <Link to="/contact">Custom Cleaning</Link>
                            </div>

                            <div className="footer-links">
                                <h4>Company</h4>
                                <Link to="/about">About</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/contact">Contact</Link>
                                <Link to="/cleaner-login" className="cleaner-link">Staff Login</Link>
                            </div>

                            <div className="footer-links">
                                <h4>Legal</h4>
                                <Link to="/policies#privacy">Privacy Policy</Link>
                                <Link to="/policies#terms">Terms of Service</Link>
                                <Link to="/faq">FAQ</Link>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Queren. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
