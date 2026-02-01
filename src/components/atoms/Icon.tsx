import type { SVGProps, ReactNode } from 'react';
import './Icon.css';

export type IconName =
    | 'search'
    | 'close'
    | 'menu'
    | 'check'
    | 'arrow-right'
    | 'folder'
    | 'document';

type IconSize = 'sm' | 'md' | 'lg' | 'xl';
type IconVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled';

interface IconProps extends SVGProps<SVGSVGElement> {
    name?: IconName;
    size?: IconSize;
    variant?: IconVariant;
}

const ICONS: Record<IconName, ReactNode> = {
    search: (
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    ),
    close: (
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    ),
    menu: (
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    ),
    check: (
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    ),
    'arrow-right': (
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    ),
    folder: (
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
    ),
    document: (
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    ),
};

export function Icon({
    name,
    size = 'md',
    variant = 'default',
    className = '',
    children,
    ...props
}: IconProps) {
    const classNames = [
        'icon',
        `icon--${size}`,
        `icon--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const content = name ? ICONS[name] : children;

    return (
        <svg
            className={classNames}
            viewBox="0 0 24 24"
            aria-hidden={!props['aria-label']}
            {...props}
        >
            {content}
        </svg>
    );
}

Icon.displayName = 'Icon';
