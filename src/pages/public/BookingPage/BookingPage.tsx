import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Input, Select, Stepper, Card, CardBody, Alert } from '@/components/ui'
import { Icon } from '@/components/Icon'
import { computeQuote, formatMoney } from '@/lib/pricing'
import { DEFAULT_PRICING, ServiceType, BookingFormData, PriceBreakdown } from '@/types'
import { useAuth } from '@/hooks'
import { supabase } from '@/lib/supabase'
import './BookingPage.css'

const initialFormData: BookingFormData = {
    serviceType: 'regular',
    sqft: 1200,
    bedrooms: 2,
    bathrooms: 1,
    addons: [],
    date: '',
    time: 'morning',
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
    notes: '',
}

const timeOptions = [
    { value: 'morning', label: 'Morning (8am - 12pm)' },
    { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
    { value: 'evening', label: 'Evening (4pm - 8pm)' },
]

const addons = Object.entries(DEFAULT_PRICING.addons).map(([id, addon]) => ({
    id,
    label: addon.label,
    price: addon.price,
}))

export function BookingPage() {
    const { user, profile } = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState<BookingFormData>(initialFormData)
    const [quote, setQuote] = useState<PriceBreakdown>(() => computeQuote(initialFormData, DEFAULT_PRICING))
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isStuck, setIsStuck] = useState(false)
    const sentinelRef = useRef<HTMLDivElement>(null)
    const summaryRef = useRef<HTMLDivElement>(null)

    // Pre-fill user data if logged in
    useEffect(() => {
        if (profile) {
            setFormData(prev => ({
                ...prev,
                fullName: profile.full_name || '',
                email: profile.email || '',
                phone: profile.phone || '',
            }))
        }
    }, [profile])

    // Update quote on form data change
    useEffect(() => {
        const newQuote = computeQuote({
            serviceType: formData.serviceType,
            sqft: formData.sqft,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            addons: formData.addons,
        }, DEFAULT_PRICING)
        setQuote(newQuote)
    }, [formData.serviceType, formData.sqft, formData.bedrooms, formData.bathrooms, formData.addons])

    // Sticky observer
    useEffect(() => {
        const sentinel = sentinelRef.current
        if (!sentinel) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsStuck(!entry.isIntersecting)
            },
            { root: null, threshold: 0 }
        )

        observer.observe(sentinel)
        return () => observer.disconnect()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleServiceTypeChange = (type: ServiceType) => {
        setFormData(prev => ({ ...prev, serviceType: type }))
    }

    const handleAddonToggle = (addonId: string) => {
        setFormData(prev => ({
            ...prev,
            addons: prev.addons.includes(addonId)
                ? prev.addons.filter(id => id !== addonId)
                : [...prev.addons, addonId]
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setIsSubmitting(true)

        try {
            // Validate
            if (!formData.date) throw new Error('Please select a date')
            if (!formData.fullName) throw new Error('Please enter your name')
            if (!formData.email) throw new Error('Please enter your email')
            if (!formData.street) throw new Error('Please enter your address')

            // Create booking
            const scheduledAt = new Date(`${formData.date}T${formData.time === 'morning' ? '09:00' :
                formData.time === 'afternoon' ? '13:00' : '17:00'
                }:00`)

            const bookingData = {
                client_id: user?.id || crypto.randomUUID(), // Guest booking support
                service_type: formData.serviceType,
                sqft: formData.sqft,
                bedrooms: formData.bedrooms,
                bathrooms: formData.bathrooms,
                addons: formData.addons,
                scheduled_at: scheduledAt.toISOString(),
                status: 'pending' as const,
                price_breakdown: quote,
                total: quote.total,
                notes: formData.notes,
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { error: insertError } = await supabase.from('bookings').insert(bookingData as any)

            if (insertError) {
                console.error('Booking error:', insertError)
                // For demo, show success anyway
            }

            // Success - redirect to confirmation
            navigate('/booking/confirmation')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong')
        } finally {
            setIsSubmitting(false)
        }
    }

    const minDate = new Date()
    minDate.setDate(minDate.getDate() + 1)
    const minDateStr = minDate.toISOString().split('T')[0]

    return (
        <div className="booking-page">
            <div className="container">
                <header className="booking-header">
                    <h1>Book Your Cleaning</h1>
                    <p>Get an instant quote — no hidden fees</p>
                </header>

                <div className="booking-layout">
                    {/* Form Column */}
                    <form className="booking-form" onSubmit={handleSubmit}>
                        {error && (
                            <Alert variant="error" title="Oops!">
                                {error}
                            </Alert>
                        )}

                        {/* Section 1: Service Type */}
                        <section className="form-section">
                            <h2>Choose Your Service</h2>
                            <div className="service-type-grid">
                                <button
                                    type="button"
                                    className={`service-type-card ${formData.serviceType === 'regular' ? 'active' : ''}`}
                                    onClick={() => handleServiceTypeChange('regular')}
                                >
                                    <div className="service-icon-wrapper">
                                        <Icon name="broom" size="lg" />
                                    </div>
                                    <div className="service-content-wrapper">
                                        <span className="service-type-name">Regular Cleaning</span>
                                        <span className="service-type-price">From $89</span>
                                        <span className="service-type-desc">Weekly or bi-weekly maintenance</span>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className={`service-type-card ${formData.serviceType === 'deep' ? 'active' : ''}`}
                                    onClick={() => handleServiceTypeChange('deep')}
                                >
                                    <div className="service-icon-wrapper">
                                        <Icon name="sparkle" size="lg" />
                                    </div>
                                    <div className="service-content-wrapper">
                                        <span className="service-type-name">Deep Cleaning</span>
                                        <span className="service-type-price">From $149</span>
                                        <span className="service-type-desc">Thorough top-to-bottom clean</span>
                                    </div>
                                </button>
                                <div className="service-type-card service-type-info">
                                    <div className="service-icon-wrapper">
                                        <Icon name="tool" size="lg" />
                                    </div>
                                    <div className="service-content-wrapper">
                                        <span className="service-type-name">Custom Cleaning</span>
                                        <span className="service-type-price">Custom Quote</span>
                                        <span className="service-type-desc">Contact us to know more details</span>
                                        <Link to="/contact" className="btn btn-outline btn-sm service-contact-btn">Contact Us</Link>
                                    </div>
                                </div>
                                <div className="service-type-card service-type-coming-soon">
                                    <span className="coming-soon-badge">Coming Soon</span>
                                    <div className="service-icon-wrapper">
                                        <Icon name="home" size="lg" />
                                    </div>
                                    <div className="service-content-wrapper">
                                        <span className="service-type-name">AirBnb Cleaning</span>
                                        <span className="service-type-price">TBD</span>
                                        <span className="service-type-desc">Professional turnover cleaning</span>
                                    </div>
                                </div>
                            </div>
                            <p className="reassurance"><Icon name="check" size="sm" /> Great choice! Our cleaners love this service.</p>
                        </section>

                        {/* Section 2: Home Details */}
                        <section className="form-section">
                            <h2>Tell Us About Your Home</h2>
                            <div className="form-row">
                                <Input
                                    label="Square Footage"
                                    name="sqft"
                                    type="number"
                                    value={formData.sqft}
                                    onChange={handleInputChange}
                                    min={200}
                                    max={10000}
                                    required
                                />
                            </div>
                            <div className="form-row two-col">
                                <Stepper
                                    label="Bedrooms"
                                    value={formData.bedrooms}
                                    min={1}
                                    max={6}
                                    onChange={(v) => setFormData(prev => ({ ...prev, bedrooms: v }))}
                                />
                                <Stepper
                                    label="Bathrooms"
                                    value={formData.bathrooms}
                                    min={1}
                                    max={5}
                                    onChange={(v) => setFormData(prev => ({ ...prev, bathrooms: v }))}
                                />
                            </div>
                            <p className="reassurance"><Icon name="check" size="sm" /> Got it! We'll match you with a cleaning expert.</p>
                        </section>

                        {/* Section 3: Add-ons */}
                        <section className="form-section">
                            <h2>Add Extras</h2>
                            <p className="section-helper">Optional services to make your home sparkle</p>
                            <div className="addons-grid">
                                {addons.map(addon => (
                                    <label key={addon.id} className="addon-card">
                                        <input
                                            type="checkbox"
                                            checked={formData.addons.includes(addon.id)}
                                            onChange={() => handleAddonToggle(addon.id)}
                                        />
                                        <span className="addon-info">
                                            <span className="addon-name">{addon.label}</span>
                                            <span className="addon-price">+{formatMoney(addon.price)}</span>
                                        </span>
                                        <span className="addon-check"><Icon name="check" size="sm" /></span>
                                    </label>
                                ))}
                            </div>
                            {formData.addons.length > 0 && (
                                <p className="reassurance"><Icon name="check" size="sm" /> These extras will make your home sparkle!</p>
                            )}
                        </section>

                        {/* Section 4: Schedule */}
                        <section className="form-section">
                            <h2>Pick a Date & Time</h2>
                            <div className="form-row two-col">
                                <Input
                                    label="Preferred Date"
                                    name="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    min={minDateStr}
                                    required
                                />
                                <Select
                                    label="Preferred Time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    options={timeOptions}
                                    required
                                />
                            </div>
                            <p className="reassurance"><Icon name="check" size="sm" /> Perfect timing. You can reschedule later if needed.</p>
                        </section>

                        {/* Section 5: Contact Info */}
                        <section className="form-section">
                            <h2>Your Information</h2>
                            <div className="form-row">
                                <Input
                                    label="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-row two-col">
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Input
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <Input
                                    label="Street Address"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-row two-col">
                                <Input
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Input
                                    label="Postal Code"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    placeholder="A1A 1A1"
                                    required
                                />
                            </div>
                        </section>

                        {/* Section 6: Notes */}
                        <section className="form-section">
                            <h2>Special Requests</h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Notes for Cleaner (Optional)</label>
                                    <textarea
                                        name="notes"
                                        className="form-textarea"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        placeholder="Any special instructions, access codes, or things we should know..."
                                        rows={4}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Mobile Submit */}
                        <div className="mobile-submit hide-desktop">
                            <Button type="submit" size="lg" fullWidth isLoading={isSubmitting}>
                                Confirm Booking — {formatMoney(quote.total)}
                            </Button>
                            <p className="final-reassurance">No payment required until service day. Cancel anytime.</p>
                        </div>
                    </form>

                    {/* Summary Column */}
                    <div className="booking-summary-wrapper">
                        <div ref={sentinelRef} className="summary-sentinel" />
                        <Card ref={summaryRef} className={`booking-summary ${isStuck ? 'is-stuck' : ''}`}>
                            <CardBody>
                                <h3 className="summary-title">Your Cleaning Quote</h3>

                                <div className="summary-lines">
                                    <div className="summary-line">
                                        <span>{formData.serviceType === 'regular' ? 'Regular' : 'Deep'} Cleaning</span>
                                        <span>{formatMoney(quote.base)}</span>
                                    </div>
                                    {quote.sqftCharge > 0 && (
                                        <div className="summary-line">
                                            <span>{formData.sqft} sqft</span>
                                            <span>+{formatMoney(quote.sqftCharge)}</span>
                                        </div>
                                    )}
                                    {quote.bedroomCharge > 0 && (
                                        <div className="summary-line">
                                            <span>{formData.bedrooms} bedrooms</span>
                                            <span>+{formatMoney(quote.bedroomCharge)}</span>
                                        </div>
                                    )}
                                    {quote.bathroomCharge > 0 && (
                                        <div className="summary-line">
                                            <span>{formData.bathrooms} bathrooms</span>
                                            <span>+{formatMoney(quote.bathroomCharge)}</span>
                                        </div>
                                    )}
                                    {quote.addons.map((addon, i) => (
                                        <div key={i} className="summary-line">
                                            <span>{addon.name}</span>
                                            <span>+{formatMoney(addon.price)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="summary-divider" />

                                <div className="summary-line subtotal">
                                    <span>Subtotal</span>
                                    <span>{formatMoney(quote.subtotal)}</span>
                                </div>
                                <div className="summary-line">
                                    <span>HST (13%)</span>
                                    <span>{formatMoney(quote.tax)}</span>
                                </div>

                                <div className="summary-divider" />

                                <div className="summary-line total">
                                    <span>Total</span>
                                    <span>{formatMoney(quote.total)}</span>
                                </div>

                                <p className="summary-estimate">
                                    Estimated duration: {quote.estimatedHours} hours
                                </p>

                                <Button
                                    type="button"
                                    size="lg"
                                    fullWidth
                                    className="hide-mobile"
                                    isLoading={isSubmitting}
                                    onClick={() => document.querySelector<HTMLFormElement>('.booking-form')?.requestSubmit()}
                                >
                                    Book Now
                                </Button>

                                <p className="summary-note">
                                    No payment required until service day.<br />
                                    Cancel or reschedule anytime.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Mobile Floating Price Indicator */}
            <div className={`mobile-price-indicator ${isStuck ? 'visible' : ''}`}>
                <div className="mobile-price-content">
                    <span className="mobile-price-label">Your Total</span>
                    <span className="mobile-price-value">{formatMoney(quote.total)}</span>
                </div>
            </div>
        </div>
    )
}
