import { Icon } from '../../Icon'

export interface StepperProps {
    value: number
    min?: number
    max?: number
    onChange: (value: number) => void
    label?: string
}

export function Stepper({ value, min = 1, max = 10, onChange, label }: StepperProps) {
    const decrement = () => {
        if (value > min) onChange(value - 1)
    }

    const increment = () => {
        if (value < max) onChange(value + 1)
    }

    return (
        <div className="form-group">
            {label && <span className="form-label">{label}</span>}
            <div className="stepper">
                <button
                    type="button"
                    className="stepper-btn"
                    onClick={decrement}
                    disabled={value <= min}
                    aria-label="Decrease"
                >
                    <Icon name="minus" size="sm" />
                </button>
                <span className="stepper-value" aria-live="polite">
                    {value}
                </span>
                <button
                    type="button"
                    className="stepper-btn"
                    onClick={increment}
                    disabled={value >= max}
                    aria-label="Increase"
                >
                    <Icon name="plus" size="sm" />
                </button>
            </div>
        </div>
    )
}
