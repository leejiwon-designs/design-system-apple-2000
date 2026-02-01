import type { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import './Menu.css';

interface MenuItem {
    id: string;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

interface MenuGroup {
    id: string;
    label?: string;
    items: MenuItem[];
}

interface MenuProps {
    trigger: ReactNode;
    groups: MenuGroup[];
    detached?: boolean; // If true, renders as a floating menu (rounded all corners)
}

export function Menu({ trigger, groups, detached = false }: MenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };



    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    const handleItemClick = (item: MenuItem) => {
        if (item.disabled) return;
        if (item.onClick) item.onClick();
        setIsOpen(false);
    };

    return (
        <div className="menu" ref={containerRef}>
            <div className="menu__trigger" onClick={toggleMenu} role="button" aria-haspopup="true" aria-expanded={isOpen}>
                {trigger}
            </div>

            {isOpen && (
                <div className={`menu__content ${detached ? 'menu__content--detached' : ''}`} role="menu">
                    {groups.map((group, groupIndex) => (
                        <div key={group.id} role="group">
                            {group.label && (
                                <div className="menu__group-label">{group.label}</div>
                            )}
                            {group.items.map((item) => (
                                <button
                                    key={item.id}
                                    className={`menu__item ${item.disabled ? 'menu__item--disabled' : ''}`}
                                    onClick={() => handleItemClick(item)}
                                    role="menuitem"
                                    disabled={item.disabled}
                                >
                                    {item.icon && <span className="menu__item-icon">{item.icon}</span>}
                                    {item.label}
                                </button>
                            ))}
                            {groupIndex < groups.length - 1 && <div className="menu__separator" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

Menu.displayName = 'Menu';
