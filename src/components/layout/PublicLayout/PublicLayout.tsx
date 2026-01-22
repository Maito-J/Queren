import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '@/hooks'
import logo from '@/assets/Logo/transparent-logo.svg'
import './PublicLayout.css'

interface PublicLayoutProps {
    children: React.ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps) {
    const { user, profile, isLoading } = useAuth()
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
                            <NavLink to="/" className="nav-link" end>Home</NavLink>
                            <NavLink to="/services" className="nav-link">Services</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/faq" className="nav-link">FAQ</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </nav>

                        <div className="header-actions">
                            {isLoading ? null : user ? (
                                <>
                                    {/* Profile icon only for clients - owners/workers have separate portals */}
                                    {(!profile?.role || profile.role === 'client') && (
                                        <Link to="/dashboard" className="header-profile-link" title="My Account">
                                            👤
                                        </Link>
                                    )}
                                    <Link to="/booking" className="btn btn-primary">
                                        Book Now
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="btn btn-ghost">
                                        Log In / Register
                                    </Link>
                                    <Link to="/booking" className="btn btn-primary">
                                        Book Now
                                    </Link>
                                </>
                            )}
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
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link to="/" className="logo">
                                <img src={logo} alt="Queren" className="logo-icon" />
                            </Link>
                            <p className="footer-tagline">
                                Professional cleaning services for your home. Trusted, vetted cleaners.
                            </p>
                        </div>

                        <div className="footer-links">
                            <h4>Services</h4>
                            <Link to="/services/regular">Regular Cleaning</Link>
                            <Link to="/services/deep">Deep Cleaning</Link>
                            <Link to="/services/pricing">Pricing</Link>
                        </div>

                        <div className="footer-links">
                            <h4>Company</h4>
                            <Link to="/about/story">Our Story</Link>
                            <Link to="/about/careers">Careers</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/cleaner-login" className="cleaner-link">Login as Cleaner</Link>
                        </div>

                        <div className="footer-links">
                            <h4>Legal</h4>
                            <Link to="/policies">Privacy Policy</Link>
                            <Link to="/policies">Terms of Service</Link>
                            <Link to="/faq">FAQ</Link>
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
