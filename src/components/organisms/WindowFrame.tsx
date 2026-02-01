import type { ReactNode, HTMLAttributes } from 'react';
import './WindowFrame.css';

interface WindowFrameProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    isActive?: boolean;
    children: ReactNode;
    onClose?: () => void;
    onMinimize?: () => void;
    onZoom?: () => void;
}

export function WindowFrame({
    title = 'Untitled',
    isActive = true,
    children,
    onClose,
    onMinimize,
    onZoom,
    className = '',
    ...props
}: WindowFrameProps) {
    const classNames = [
        'window-frame',
        isActive && 'window-frame--active',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classNames} {...props}>
            <div className="window-frame__title-bar">
                <div className="window-frame__controls">
                    <button
                        className="window-frame__button window-frame__button--close"
                        aria-label="Close"
                        onClick={onClose}
                    />
                    <button
                        className="window-frame__button window-frame__button--minimize"
                        aria-label="Minimize"
                        onClick={onMinimize}
                    />
                    <button
                        className="window-frame__button window-frame__button--zoom"
                        aria-label="Zoom"
                        onClick={onZoom}
                    />
                </div>
                <div className="window-frame__title">{title}</div>
            </div>
            <div className="window-frame__content">
                {children}
            </div>
        </div>
    );
}

WindowFrame.displayName = 'WindowFrame';
