import type { InputHTMLAttributes, ReactNode } from 'react';
import './Checkbox.css';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}

export function Checkbox({
    label,
    className = '',
    disabled,
    ...props
}: CheckboxProps) {
    return (
        <label className={`checkbox ${disabled ? 'checkbox--disabled' : ''} ${className}`}>
            <input
                type="checkbox"
                className="checkbox__input"
                disabled={disabled}
                {...props}
            />
            <div className="checkbox__control" aria-hidden="true" />
            {label && <span className="checkbox__label">{label}</span>}
        </label>
    );
}

Checkbox.displayName = 'Checkbox';
