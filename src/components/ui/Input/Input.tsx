import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    helper?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helper, id, className = '', ...props }, ref) => {
        const inputId = id || `input-${Math.random().toString(36).slice(2)}`

        return (
            <div className="form-group">
                {label && (
                    <label htmlFor={inputId} className="form-label">
                        {label}
                        {props.required && <span className="required">*</span>}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={`form-input ${error ? 'error' : ''} ${className}`}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined}
                    {...props}
                />
                {error && (
                    <span id={`${inputId}-error`} className="form-error" role="alert">
                        {error}
                    </span>
                )}
                {helper && !error && (
                    <span id={`${inputId}-helper`} className="form-helper">
                        {helper}
                    </span>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'
