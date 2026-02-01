import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import './Text.css';

type TextVariant =
    | 'primary' | 'secondary' | 'disabled' | 'inverse'
    | 'success' | 'warning' | 'error' | 'link';

type TextSize =
    | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

type TextWeight = 'normal' | 'medium' | 'bold';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

type TextHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends HTMLAttributes<HTMLElement> {
    /** Visual style variant (mostly color) */
    variant?: TextVariant;
    /** Size step from scale */
    size?: TextSize;
    /** Font weight */
    weight?: TextWeight;
    /** Heading style shortcut */
    heading?: TextHeading;
    /** Text alignment */
    align?: TextAlign;
    /** Whether to truncate text with ellipsis */
    truncate?: boolean;
    /** Render as a different element */
    as?: ElementType;
    /** Text content */
    children: ReactNode;
}

export function Text({
    variant = 'primary',
    size = 'base',
    weight = 'normal',
    heading,
    align,
    truncate = false,
    as,
    children,
    className = '',
    ...props
}: TextProps) {
    // Default element based on size/usage logic could go here, 
    // but simpler to default to 'p' or 'span'.
    const Component = as || heading || 'p';

    const classNames = [
        'text',
        `text--${variant}`,
        `text--${size}`,
        `text--${weight}`,
        heading && `text--${heading}`,
        align && `text--${align}`,
        truncate && 'text--truncate',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Component className={classNames} {...props}>
            {children}
        </Component>
    );
}

Text.displayName = 'Text';
