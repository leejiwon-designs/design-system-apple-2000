import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';
import './Alert.css';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    variant?: AlertVariant;
    title?: ReactNode;
    description?: ReactNode;
    onClose?: () => void;
}

export function Alert({
    variant = 'info',
    title,
    description,
    onClose,
    className = '',
    children,
    ...props
}: AlertProps) {
    return (
        <div
            className={`alert alert--${variant} ${className}`}
            role="status"
            {...props}
        >
            {children ?? (
                <>
                    <div className="alert__content">
                        {title && <div className="alert__title">{title}</div>}
                        {description && <div className="alert__description">{description}</div>}
                    </div>
                    {onClose && (
                        <button
                            type="button"
                            className="alert__close"
                            aria-label="Dismiss alert"
                            onClick={onClose}
                        >
                            <Icon name="close" size="sm" />
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

Alert.displayName = 'Alert';
