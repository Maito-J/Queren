import type { CSSProperties, ReactNode } from 'react'
import { forwardRef } from 'react'

export interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    style?: CSSProperties
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ children, className = '', hover = false, style }, ref) => {
        return (
            <div ref={ref} className={`card ${hover ? 'card-hover' : ''} ${className}`} style={style}>
                {children}
            </div>
        )
    }
)
Card.displayName = 'Card'

export interface CardHeaderProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
}

export function CardHeader({ children, className = '', style }: CardHeaderProps) {
    return <div className={`card-header ${className}`} style={style}>{children}</div>
}

export interface CardBodyProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
}

export function CardBody({ children, className = '', style }: CardBodyProps) {
    return <div className={`card-body ${className}`} style={style}>{children}</div>
}

export interface CardFooterProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
}

export function CardFooter({ children, className = '', style }: CardFooterProps) {
    return <div className={`card-footer ${className}`} style={style}>{children}</div>
}
