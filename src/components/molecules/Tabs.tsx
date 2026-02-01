import type { ReactNode } from 'react';
import { useState } from 'react';
import './Tabs.css';

interface TabItem {
    value: string;
    label: string;
    disabled?: boolean;
}

interface TabsProps {
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children: (value: string) => ReactNode; // Render prop for content based on active tab
}

export function Tabs({
    items,
    value: controlledValue,
    defaultValue,
    onValueChange,
    children,
}: TabsProps) {
    const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.value);

    const activeValue = controlledValue !== undefined ? controlledValue : internalValue;

    const handleTabClick = (newItem: TabItem) => {
        if (newItem.disabled) return;

        if (onValueChange) {
            onValueChange(newItem.value);
        }

        if (controlledValue === undefined) {
            setInternalValue(newItem.value);
        }
    };

    return (
        <div className="tabs">
            <div className="tabs__list" role="tablist">
                {items.map((item) => {
                    const isActive = activeValue === item.value;
                    return (
                        <button
                            key={item.value}
                            className={`tabs__trigger ${item.disabled ? 'tabs__trigger--disabled' : ''}`}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`panel-${item.value}`}
                            disabled={item.disabled}
                            data-state={isActive ? 'active' : 'inactive'}
                            onClick={() => handleTabClick(item)}
                            tabIndex={isActive ? 0 : -1}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
            <div
                className="tabs__content"
                role="tabpanel"
                id={`panel-${activeValue}`}
            >
                {children(activeValue)}
            </div>
        </div>
    );
}

Tabs.displayName = 'Tabs';
