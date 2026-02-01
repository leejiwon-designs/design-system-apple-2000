import type { InputHTMLAttributes, ReactNode } from 'react';
import './RadioButton.css';

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}

export function RadioButton({
    label,
    className = '',
    disabled,
    ...props
}: RadioButtonProps) {
    return (
        <label className={`radio-button ${disabled ? 'radio-button--disabled' : ''} ${className}`}>
            <input
                type="radio"
                className="radio-button__input"
                disabled={disabled}
                {...props}
            />
            <div className="radio-button__control" aria-hidden="true" />
            {label && <span className="radio-button__label">{label}</span>}
        </label>
    );
}

RadioButton.displayName = 'RadioButton';
