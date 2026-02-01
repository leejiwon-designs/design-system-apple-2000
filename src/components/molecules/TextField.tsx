import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';
import './TextField.css';

type TextFieldSize = 'sm' | 'md' | 'lg';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    helperText?: string;
    error?: string;
    size?: TextFieldSize;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
}

export function TextField({
    label,
    helperText,
    error,
    size = 'md',
    startIcon,
    endIcon,
    fullWidth = true,
    className = '',
    disabled,
    id,
    ...props
}: TextFieldProps) {
    const generatedId = useId();
    const inputId = id || generatedId;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const containerClasses = [
        'textfield',
        error && 'textfield--error',
        fullWidth && 'textfield--full-width',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const inputClasses = [
        'textfield__input',
        `textfield__input--${size}`,
        startIcon && 'textfield__input--has-start-icon',
        endIcon && 'textfield__input--has-end-icon',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={containerClasses}>
            {label && (
                <label htmlFor={inputId} className="textfield__label">
                    {label}
                </label>
            )}

            <div className="textfield__container">
                {startIcon && (
                    <span className="textfield__icon textfield__icon--start">
                        {startIcon}
                    </span>
                )}

                <input
                    id={inputId}
                    className={inputClasses}
                    disabled={disabled}
                    aria-invalid={!!error}
                    aria-describedby={[errorId, helperId].filter(Boolean).join(' ') || undefined}
                    {...props}
                />

                {endIcon && (
                    <span className="textfield__icon textfield__icon--end">
                        {endIcon}
                    </span>
                )}
            </div>

            {error ? (
                <span id={errorId} className="textfield__error-message" role="alert">
                    {error}
                </span>
            ) : helperText ? (
                <span id={helperId} className="textfield__helper">
                    {helperText}
                </span>
            ) : null}
        </div>
    );
}

TextField.displayName = 'TextField';
