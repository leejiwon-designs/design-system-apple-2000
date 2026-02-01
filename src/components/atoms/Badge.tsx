import type { HTMLAttributes, ReactNode } from 'react';
import './Badge.css';

type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: 'sm' | 'md';
    children: ReactNode;
}

export function Badge({
    variant = 'neutral',
    size = 'md',
    className = '',
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={`badge badge--${variant} badge--${size} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}

Badge.displayName = 'Badge';
