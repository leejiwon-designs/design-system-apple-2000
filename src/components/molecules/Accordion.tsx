import type { ReactNode } from 'react';
import { useState } from 'react';
import { Icon } from '../atoms';
import './Accordion.css';

interface AccordionItem {
    id: string;
    title: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}

interface AccordionProps {
    items: AccordionItem[];
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (value: string | null) => void;
}

export function Accordion({
    items,
    value: controlledValue,
    defaultValue = null,
    onValueChange,
}: AccordionProps) {
    const [internalValue, setInternalValue] = useState<string | null>(defaultValue);
    const activeValue = controlledValue !== undefined ? controlledValue : internalValue;

    const handleToggle = (item: AccordionItem) => {
        if (item.disabled) return;
        const nextValue = activeValue === item.id ? null : item.id;
        if (onValueChange) onValueChange(nextValue);
        if (controlledValue === undefined) setInternalValue(nextValue);
    };

    return (
        <div className="accordion">
            {items.map((item) => {
                const isOpen = activeValue === item.id;
                const panelId = `accordion-panel-${item.id}`;
                return (
                    <div
                        key={item.id}
                        className={`accordion__item ${item.disabled ? 'accordion__item--disabled' : ''}`}
                        data-state={isOpen ? 'open' : 'closed'}
                    >
                        <button
                            type="button"
                            className="accordion__trigger"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            disabled={item.disabled}
                            onClick={() => handleToggle(item)}
                        >
                            <span className="accordion__icon" aria-hidden="true">
                                <Icon name="arrow-right" size="sm" />
                            </span>
                            <span className="accordion__title">{item.title}</span>
                        </button>
                        <div
                            id={panelId}
                            role="region"
                            className="accordion__panel"
                            hidden={!isOpen}
                        >
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

Accordion.displayName = 'Accordion';
