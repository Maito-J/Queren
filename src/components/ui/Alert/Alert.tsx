import React from 'react'
import { Icon, IconName } from '../../Icon'

type AlertVariant = 'info' | 'success' | 'error' | 'warning'

export interface AlertProps {
    variant?: AlertVariant
    title?: string
    children: React.ReactNode
}

const iconNames: Record<AlertVariant, IconName> = {
    info: 'info',
    success: 'check',
    error: 'x',
    warning: 'warning',
}

export function Alert({ variant = 'info', title, children }: AlertProps) {
    return (
        <div className={`alert alert-${variant}`} role="alert">
            <span className="alert-icon" aria-hidden="true"><Icon name={iconNames[variant]} size="sm" /></span>
            <div className="alert-content">
                {title && <div className="alert-title">{title}</div>}
                <div>{children}</div>
            </div>
        </div>
    )
}
