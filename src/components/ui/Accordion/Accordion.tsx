import React, { useState } from 'react'
import './Accordion.css'

interface AccordionItem {
    id: string
    question: string
    answer: string | React.ReactNode
}

interface AccordionProps {
    items: AccordionItem[]
    className?: string
}

export function Accordion({ items, className = '' }: AccordionProps) {
    const [openId, setOpenId] = useState<string | null>(null)

    const handleToggle = (id: string) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className={`accordion ${className}`}>
            {items.map(item => (
                <div
                    key={item.id}
                    className={`accordion-item ${openId === item.id ? 'open' : ''}`}
                >
                    <button
                        className="accordion-trigger"
                        onClick={() => handleToggle(item.id)}
                        aria-expanded={openId === item.id}
                        aria-controls={`accordion-content-${item.id}`}
                    >
                        <span className="accordion-question">{item.question}</span>
                        <span className="accordion-icon" aria-hidden="true">
                            {openId === item.id ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        id={`accordion-content-${item.id}`}
                        className="accordion-content"
                        role="region"
                        aria-labelledby={`accordion-trigger-${item.id}`}
                    >
                        <div className="accordion-answer">
                            <div className="accordion-answer-inner">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
