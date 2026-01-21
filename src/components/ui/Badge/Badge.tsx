import type { ReactNode } from 'react'

export interface BadgeProps {
    variant?: 'default' | 'primary' | 'success' | 'error' | 'warning'
    children: ReactNode
}

export function Badge({ variant = 'primary', children }: BadgeProps) {
    return <span className={`badge badge-${variant}`}>{children}</span>
}
