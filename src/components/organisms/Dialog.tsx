import type { ReactNode } from 'react';
import { Icon } from '../atoms';
import './Dialog.css';

interface DialogProps {
    title: string;
    description?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode; // Buttons
    open?: boolean;
}

export function Dialog({
    title,
    description,
    icon,
    actions,
    open = true,
}: DialogProps) {
    if (!open) return null;

    return (
        <div className="dialog" role="alertdialog" aria-modal="true" aria-labelledby="dialog-title">
            <div className="dialog__content">
                <div className="dialog__icon">
                    {icon || <Icon name="document" size="xl" />}
                </div>
                <div className="dialog__body">
                    <div id="dialog-title" className="dialog__title">
                        {title}
                    </div>
                    {description && (
                        <div className="dialog__description">
                            {description}
                        </div>
                    )}
                </div>
            </div>
            {actions && (
                <div className="dialog__footer">
                    {actions}
                </div>
            )}
        </div>
    );
}

Dialog.displayName = 'Dialog';
