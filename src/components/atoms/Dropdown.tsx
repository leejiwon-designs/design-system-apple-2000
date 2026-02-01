import type { SelectHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';
import './Dropdown.css';

export interface DropdownOption {
    value: string;
    label: ReactNode;
    disabled?: boolean;
}

interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
    options: DropdownOption[];
    placeholder?: string;
}

export function Dropdown({
    options,
    placeholder,
    className = '',
    disabled,
    ...props
}: DropdownProps) {
    return (
        <div className={`dropdown ${disabled ? 'dropdown--disabled' : ''} ${className}`}>
            <select className="dropdown__select" disabled={disabled} {...props}>
                {placeholder && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </select>
            <span className="dropdown__icon" aria-hidden="true">
                <Icon name="arrow-right" size="sm" />
            </span>
        </div>
    );
}

Dropdown.displayName = 'Dropdown';
