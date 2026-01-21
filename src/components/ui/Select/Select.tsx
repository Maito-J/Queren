import React from 'react'

export interface SelectOption {
    value: string
    label: string
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
    label?: string
    error?: string
    helper?: string
    options: SelectOption[]
    placeholder?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, error, helper, options, placeholder, id, className = '', ...props }, ref) => {
        const selectId = id || `select-${Math.random().toString(36).slice(2)}`

        return (
            <div className="form-group">
                {label && (
                    <label htmlFor={selectId} className="form-label">
                        {label}
                        {props.required && <span className="required">*</span>}
                    </label>
                )}
                <select
                    ref={ref}
                    id={selectId}
                    className={`form-select ${error ? 'error' : ''} ${className}`}
                    aria-invalid={!!error}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && (
                    <span className="form-error" role="alert">
                        {error}
                    </span>
                )}
                {helper && !error && (
                    <span className="form-helper">{helper}</span>
                )}
            </div>
        )
    }
)

Select.displayName = 'Select'
