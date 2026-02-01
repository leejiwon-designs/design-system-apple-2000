import type { HTMLAttributes } from 'react';
import './Divider.css';

type DividerOrientation = 'horizontal' | 'vertical';
type DividerSpacing = 'none' | 'sm' | 'md' | 'lg';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    orientation?: DividerOrientation;
    spacing?: DividerSpacing;
}

export function Divider({
    orientation = 'horizontal',
    spacing = 'md',
    className = '',
    ...props
}: DividerProps) {
    const classNames = [
        'divider',
        `divider--${orientation}`,
        spacing !== 'none' && `divider--margin-${spacing}`,
        spacing === 'none' && 'divider--no-margin',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    // Vertical dividers usually need a div, but <hr> is semantic for separators.
    // Styling <hr> vertically is tricky but possible. 
    // However, for vertical alignment in flex/grid, a div is often safer.
    // We'll stick to <hr> for semantic correctness but override role if needed.

    if (orientation === 'vertical') {
        return (
            <div
                role="separator"
                aria-orientation="vertical"
                className={classNames}
                {...props as HTMLAttributes<HTMLDivElement>}
            />
        );
    }

    return <hr className={classNames} {...props} />;
}

Divider.displayName = 'Divider';
