import type { ReactNode } from 'react';
import { Icon } from '../atoms';
import './Sidebar.css';

interface SidebarItemProps {
    label: string;
    icon?: string; // Icon name
    active?: boolean;
    onClick?: () => void;
}

export function SidebarItem({ label, icon, active, onClick }: SidebarItemProps) {
    return (
        <div
            className={`sidebar-organism__item ${active ? 'sidebar-organism__item--active' : ''}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            {icon && <Icon name={icon as any} size="sm" style={active ? { color: 'white' } : undefined} />}
            <span>{label}</span>
        </div>
    );
}

interface SidebarGroupProps {
    title?: string;
    children: ReactNode;
}

export function SidebarGroup({ title, children }: SidebarGroupProps) {
    return (
        <div className="sidebar-organism__group">
            {title && <div className="sidebar-organism__header">{title}</div>}
            {children}
        </div>
    );
}

interface SidebarProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function Sidebar({ children, className = '', style }: SidebarProps) {
    return (
        <div className={`sidebar-organism ${className}`} style={style}>
            {children}
        </div>
    );
}

// Attach subcomponents
Sidebar.Group = SidebarGroup;
Sidebar.Item = SidebarItem;

Sidebar.displayName = 'Sidebar';
