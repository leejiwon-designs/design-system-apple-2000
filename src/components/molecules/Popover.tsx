import type { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import './Popover.css';

interface PopoverProps {
    trigger: ReactNode;
    content: ReactNode;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

export function Popover({
    trigger,
    content,
    isOpen: controlledIsOpen,
    onOpenChange,
}: PopoverProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);

    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

    const handleOpenChange = (newOpen: boolean) => {
        if (onOpenChange) {
            onOpenChange(newOpen);
        }
        if (controlledIsOpen === undefined) {
            setInternalIsOpen(newOpen);
        }
    };

    const handleTriggerClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent backdrop click from closing immediately
        handleOpenChange(!isOpen);
    };

    const handleBackdropClick = () => {
        handleOpenChange(false);
    };

    // Close on Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleOpenChange(false);
                triggerRef.current?.focus();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <div className="popover">
            <div
                className="popover__trigger"
                onClick={handleTriggerClick}
                ref={triggerRef}
                role="button"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
            >
                {trigger}
            </div>

            {isOpen && (
                <>
                    <div className="popover__backdrop" onClick={handleBackdropClick} />
                    <div className="popover__content" role="dialog">
                        {content}
                    </div>
                </>
            )}
        </div>
    );
}

Popover.displayName = 'Popover';
