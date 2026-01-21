import React from 'react'
import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
    fullWidth?: boolean
    children: React.ReactNode
}

export function Button({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    fullWidth = false,
    children,
    disabled,
    className = '',
    ...props
}: ButtonProps) {
    const classes = [
        'btn',
        `btn-${variant}`,
        size === 'sm' && 'btn-sm',
        size === 'lg' && 'btn-lg',
        fullWidth && 'btn-block',
        className,
    ].filter(Boolean).join(' ')

    return (
        <button
            className={classes}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <span className="btn-spinner" aria-hidden="true" />
                    <span>Loading...</span>
                </>
            ) : (
                children
            )}
        </button>
    )
}
