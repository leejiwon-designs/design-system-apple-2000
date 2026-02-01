import type { HTMLAttributes } from 'react';
import './Spinner.css';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
type SpinnerVariant = 'primary' | 'secondary' | 'inverse';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
}

export function Spinner({
    size = 'md',
    variant = 'secondary',
    className = '',
    ...props
}: SpinnerProps) {
    const classNames = [
        'spinner',
        `spinner--${size}`,
        `spinner--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={classNames}
            role="status"
            aria-label="Loading"
            {...props}
        >
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="100%"
                height="100%"
            >
                <g>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <rect
                            key={i}
                            x="11"
                            y="1"
                            width="2"
                            height="6"
                            rx="1"
                            transform={`rotate(${i * 30} 12 12)`}
                            opacity={1 - (i / 12)}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}

Spinner.displayName = 'Spinner';
