import type { ReactNode, HTMLAttributes } from 'react';
import './Toolbar.css';

interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function Toolbar({ children, className = '', ...props }: ToolbarProps) {
    return (
        <div className={`toolbar ${className}`} role="toolbar" {...props}>
            {children}
        </div>
    );
}

// Sub-components for semantic layout
export function ToolbarSpacer() {
    return <div className="toolbar__spacer" aria-hidden="true" />;
}

export function ToolbarDivider() {
    return <div className="toolbar__divider" role="separator" />;
}

// Attach subcomponents
Toolbar.Spacer = ToolbarSpacer;
Toolbar.Divider = ToolbarDivider;

Toolbar.displayName = 'Toolbar';
