import React from 'react'
import { Accordion } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import './FAQPage.css'

interface FAQSection {
    id: string
    title: string
    icon: IconName
    items: { id: string; question: string; answer: string | React.ReactNode }[]
}

const faqSections: FAQSection[] = [
    {
        id: 'pricing',
        title: 'Pricing & Payments',
        icon: 'dollar',
        items: [
            {
                id: 'pricing-1',
                question: 'How is my cleaning price calculated?',
                answer: 'Prices are based on home size, type of clean, and selected add-ons. Everything is shown upfront during booking so there are no surprises.',
            },
            {
                id: 'pricing-2',
                question: 'Can the price change after booking?',
                answer: 'No. If anything unexpected comes up, we\'ll contact you before making changes.',
            },
            {
                id: 'pricing-3',
                question: 'Are tips included?',
                answer: 'Tips are optional and always go 100% to the cleaner.',
            },
            {
                id: 'pricing-4',
                question: 'What payment methods do you accept?',
                answer: 'Credit and debit cards via secure checkout.',
            },
        ],
    },
    {
        id: 'services',
        title: 'Services & Scope',
        icon: 'broom',
        items: [
            {
                id: 'services-1',
                question: 'What\'s included in a standard clean?',
                answer: 'Surface cleaning, kitchen, bathrooms, floors, dusting, and tidying within the booked scope.',
            },
            {
                id: 'services-2',
                question: 'What is considered a deep clean?',
                answer: 'A deep clean includes detailed attention to buildup, edges, and areas not covered in regular cleans.',
            },
            {
                id: 'services-3',
                question: 'Are there things you don\'t clean?',
                answer: 'Yes. For safety reasons, we don\'t clean biohazards, exterior windows, or high-risk areas.',
            },
        ],
    },
    {
        id: 'supplies',
        title: 'Supplies & Equipment',
        icon: 'bottle',
        items: [
            {
                id: 'supplies-1',
                question: 'Do I need to provide cleaning supplies?',
                answer: (
                    <>
                        <p>It depends on the service mode you select:</p>
                        <ul>
                            <li><strong>Transit-Friendly Clean:</strong> Vacuum + mop/bucket provided by client</li>
                            <li><strong>All-In Clean:</strong> Queren brings everything</li>
                        </ul>
                    </>
                ),
            },
            {
                id: 'supplies-2',
                question: 'Why does Queren offer two service modes?',
                answer: 'This allows us to reduce cross-contamination, support transit-based cleaners, and keep prices fair.',
            },
        ],
    },
    {
        id: 'scheduling',
        title: 'Scheduling & Cancellations',
        icon: 'calendar',
        items: [
            {
                id: 'scheduling-1',
                question: 'How do cancellations work?',
                answer: 'Cancellations made with sufficient notice are free. Late cancellations may incur a fee to protect cleaner time.',
            },
            {
                id: 'scheduling-2',
                question: 'Can I reschedule my cleaning?',
                answer: 'Yes — rescheduling is easy through your booking link.',
            },
        ],
    },
    {
        id: 'satisfaction',
        title: 'Satisfaction & Issues',
        icon: 'check',
        items: [
            {
                id: 'satisfaction-1',
                question: 'What if I\'m not satisfied with my clean?',
                answer: 'Contact us within 24 hours. We\'ll review the issue based on the service checklist and make it right.',
            },
            {
                id: 'satisfaction-2',
                question: 'Will the cleaner be penalized automatically?',
                answer: 'No. We assess concerns fairly and protect both clients and cleaners.',
            },
        ],
    },
    {
        id: 'trust',
        title: 'Cleaners & Trust',
        icon: 'handshake',
        items: [
            {
                id: 'trust-1',
                question: 'Are cleaners vetted?',
                answer: 'Yes. All cleaners are background-checked and trained on Queren\'s standardized process.',
            },
            {
                id: 'trust-2',
                question: 'Will I get the same cleaner every time?',
                answer: 'For recurring bookings, we prioritize consistency whenever possible.',
            },
        ],
    },
]

export function FAQPage() {
    return (
        <div className="faq-page">
            <div className="container">
                <header className="faq-header">
                    <h1>Frequently Asked Questions</h1>
                    <p>Everything you need to know about Queren's cleaning services</p>
                </header>

                <div className="faq-sections">
                    {faqSections.map(section => (
                        <section key={section.id} className="faq-section">
                            <div className="faq-section-header">
                                <span className="faq-section-icon"><Icon name={section.icon} size="lg" /></span>
                                <h2>{section.title}</h2>
                            </div>
                            <Accordion items={section.items} />
                        </section>
                    ))}
                </div>

                <div className="faq-contact">
                    <div className="faq-contact-card">
                        <span className="faq-contact-icon"><Icon name="message" size="lg" /></span>
                        <h3>Still have questions?</h3>
                        <p>We're here to help. Reach out and we'll get back to you quickly.</p>
                        <a href="/contact" className="btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
