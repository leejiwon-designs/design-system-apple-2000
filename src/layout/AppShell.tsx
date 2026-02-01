import type { ReactNode } from 'react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { WindowFrame } from '../components/organisms/WindowFrame';
import { Icon } from '../components/atoms';
import './AppShell.css';

interface AppShellProps {
    children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="app-shell">
            <WindowFrame title="Anna Jiwon Lee Vibe Coding Design System Showcase" style={{ height: '100vh', width: '100vw', borderRadius: 0 }}>
                <div className="app-shell__layout">
                    <div className={`app-shell__sidebar ${isSidebarOpen ? 'app-shell__sidebar--open' : ''}`}>
                        <Sidebar />
                    </div>
                    <div
                        className={`app-shell__overlay ${isSidebarOpen ? 'app-shell__overlay--visible' : ''}`}
                        onClick={() => setIsSidebarOpen(false)}
                        aria-hidden="true"
                    />
                    <main className="app-shell__main">
                        <div className="app-shell__mobile-bar">
                            <button
                                type="button"
                                className="app-shell__menu-button"
                                onClick={() => setIsSidebarOpen(true)}
                                aria-label="Open navigation"
                            >
                                <Icon name="menu" size="sm" />
                            </button>
                        </div>
                        <div className="app-shell__content">
                            {children}
                        </div>
                    </main>
                </div>
            </WindowFrame>
        </div>
    );
}
