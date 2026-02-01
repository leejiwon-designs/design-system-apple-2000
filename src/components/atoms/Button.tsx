import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import './Button.css';

type ButtonVariant = 'default' | 'secondary' | 'tertiary' | 'graphite' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
    /** Visual style variant */
    variant?: ButtonVariant;
    /** Size of the button */
    size?: ButtonSize;
    /** Shows loading spinner and disables interaction */
    isLoading?: boolean;
    /** Icon to display before the label */
    startIcon?: ReactNode;
    /** Icon to display after the label */
    endIcon?: ReactNode;
    /** Button content */
    children: ReactNode;
    /** Additional CSS classes */
    className?: string;
}

type ButtonAsButton = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        as?: 'button';
    };

type ButtonAsAnchor = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
        as: 'a';
    };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
    const {
        variant = 'default',
        size = 'md',
        isLoading = false,
        startIcon,
        endIcon,
        children,
        className = '',
        as = 'button',
        ...rest
    } = props;

    const isDisabled = 'disabled' in rest ? rest.disabled : false;

    const classNames = [
        'button',
        `button--${variant}`,
        `button--${size}`,
        isDisabled && 'button--disabled',
        isLoading && 'button--loading',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const content = (
        <>
            {startIcon && (
                <span className="button__icon button__icon--start" aria-hidden="true">
                    {startIcon}
                </span>
            )}
            {children}
            {endIcon && (
                <span className="button__icon button__icon--end" aria-hidden="true">
                    {endIcon}
                </span>
            )}
        </>
    );

    if (as === 'a') {
        const anchorProps = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;
        return (
            <a
                className={classNames}
                aria-disabled={isDisabled || isLoading || undefined}
                aria-busy={isLoading || undefined}
                {...anchorProps}
            >
                {content}
            </a>
        );
    }

    const buttonProps = rest as Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;
    return (
        <button
            type="button"
            className={classNames}
            disabled={isDisabled || isLoading}
            aria-busy={isLoading || undefined}
            {...buttonProps}
        >
            {content}
        </button>
    );
}

Button.displayName = 'Button';
