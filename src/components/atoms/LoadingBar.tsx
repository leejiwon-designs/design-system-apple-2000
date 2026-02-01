import type { HTMLAttributes } from 'react';
import './LoadingBar.css';

interface LoadingBarProps extends HTMLAttributes<HTMLDivElement> {
    value?: number; // 0-100
    variant?: 'determinate' | 'indeterminate';
}

export function LoadingBar({
    value = 0,
    variant = 'determinate',
    className = '',
    ...props
}: LoadingBarProps) {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
        <div className={`loading-bar ${className}`} {...props}>
            <div
                className={`loading-bar__fill loading-bar__fill--${variant}`}
                style={variant === 'determinate' ? { width: `${clampedValue}%` } : undefined}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={variant === 'determinate' ? clampedValue : undefined}
            />
        </div>
    );
}

LoadingBar.displayName = 'LoadingBar';
