import './PoliciesPage.css'

export function PoliciesPage() {
    return (
        <div className="policies-page">
            <div className="container">
                <header className="policies-header">
                    <h1>Privacy Policy & Terms of Service</h1>
                    <p>Last updated: January 2026</p>
                </header>

                {/* Privacy Policy Section */}
                <section className="policy-section" id="privacy">
                    <h2>Privacy Policy</h2>

                    <div className="policy-content">
                        <h3>1. Information We Collect</h3>
                        <p>We collect information you provide directly to us, such as:</p>
                        <ul>
                            <li>Name, email address, and phone number</li>
                            <li>Home address for cleaning services</li>
                            <li>Payment information</li>
                            <li>Communication preferences</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our cleaning services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you booking confirmations and reminders</li>
                            <li>Respond to your comments and questions</li>
                            <li>Communicate about promotions and updates</li>
                        </ul>

                        <h3>3. Information Sharing</h3>
                        <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
                        <ul>
                            <li>Our cleaning professionals to provide services</li>
                            <li>Payment processors to complete transactions</li>
                            <li>Service providers who assist our operations</li>
                        </ul>

                        <h3>4. Data Security</h3>
                        <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

                        <h3>5. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Update or correct your information</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>

                        <h3>6. Contact Us</h3>
                        <p>If you have questions about this Privacy Policy, please contact us at privacy@queren.com</p>
                    </div>
                </section>

                {/* Terms of Service Section */}
                <section className="policy-section" id="terms">
                    <h2>Terms of Service</h2>

                    <div className="policy-content">
                        <h3>1. Acceptance of Terms</h3>
                        <p>By accessing and using Queren's services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

                        <h3>2. Services</h3>
                        <p>Queren provides residential cleaning services including:</p>
                        <ul>
                            <li>Regular cleaning (weekly, bi-weekly, monthly)</li>
                            <li>Deep cleaning</li>
                            <li>Custom cleaning services</li>
                        </ul>

                        <h3>3. Booking and Cancellation</h3>
                        <ul>
                            <li>Bookings can be made online or by phone</li>
                            <li>Cancellations must be made at least 24 hours in advance</li>
                            <li>Late cancellations may incur a fee</li>
                            <li>We reserve the right to reschedule due to unforeseen circumstances</li>
                        </ul>

                        <h3>4. Payment</h3>
                        <ul>
                            <li>Payment is due on the day of service</li>
                            <li>We accept major credit cards and electronic payments</li>
                            <li>Prices are subject to change with notice</li>
                        </ul>

                        <h3>5. Our Responsibilities</h3>
                        <p>We commit to:</p>
                        <ul>
                            <li>Provide professional and thorough cleaning services</li>
                            <li>Send vetted and trained cleaning professionals</li>
                            <li>Bring our own professional-grade cleaning supplies</li>
                            <li>Respect your home and privacy</li>
                        </ul>

                        <h3>6. Your Responsibilities</h3>
                        <p>You agree to:</p>
                        <ul>
                            <li>Provide accurate information for bookings</li>
                            <li>Ensure safe access to your home</li>
                            <li>Secure valuables and fragile items</li>
                            <li>Inform us of any special requirements or concerns</li>
                        </ul>

                        <h3>7. Liability</h3>
                        <p>While we take great care, we are not liable for:</p>
                        <ul>
                            <li>Pre-existing damage or wear</li>
                            <li>Items not disclosed as fragile</li>
                            <li>Delays due to circumstances beyond our control</li>
                        </ul>

                        <h3>8. Satisfaction Guarantee</h3>
                        <p>If you're not satisfied with our service, please contact us within 24 hours and we will address your concerns promptly.</p>

                        <h3>9. Changes to Terms</h3>
                        <p>We may update these terms from time to time. Continued use of our services constitutes acceptance of any changes.</p>

                        <h3>10. Contact</h3>
                        <p>For questions about these Terms of Service, please contact us at support@queren.com</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
