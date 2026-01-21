import React from 'react'

type AlertVariant = 'info' | 'success' | 'error' | 'warning'

export interface AlertProps {
    variant?: AlertVariant
    title?: string
    children: React.ReactNode
}

const icons: Record<AlertVariant, string> = {
    info: 'ℹ️',
    success: '✓',
    error: '✕',
    warning: '⚠',
}

export function Alert({ variant = 'info', title, children }: AlertProps) {
    return (
        <div className={`alert alert-${variant}`} role="alert">
            <span className="alert-icon" aria-hidden="true">{icons[variant]}</span>
            <div className="alert-content">
                {title && <div className="alert-title">{title}</div>}
                <div>{children}</div>
            </div>
        </div>
    )
}
