import './HomePage.css';

export function HomePage() {
    return (
        <div className="home-page">
            <h1 className="home-page__title">Jiwon's Design System</h1>
            <p className="home-page__intro">
                Fully Vibe coded with Antigravity. Did not touch Figma at all. Heavily referenced with the Apple Aqua (circa 2000) design system.
                View components rendered live, inspect exact design specs, and copy source code.
            </p>

            <section className="home-page__section">
                <h2 className="home-page__section-title">What's Inside</h2>
                <ul className="home-page__list">
                    <li><strong>Foundations</strong> — Design tokens (colors, spacing, typography)</li>
                    <li><strong>Atoms</strong> — Button, Icon, Text, Spinner, Divider, Radio Button, Checkbox, Alert, Badge, Dropdown, Loading Bar</li>
                    <li><strong>Molecules</strong> — TextField, Tabs, Popover, Menu, Accordion, Calendar</li>
                    <li><strong>Organisms</strong> — Window Frame, Dialog, Toolbar, Sidebar</li>
                </ul>
            </section>

            <section className="home-page__section">
                <h2 className="home-page__section-title">How to Use</h2>
                <ul className="home-page__list">
                    <li>Browse components using the sidebar navigation</li>
                    <li>View live previews and copy example code</li>
                    <li>Check accessibility guidelines and keyboard interactions</li>
                    <li>Inspect component source code directly</li>
                </ul>
            </section>
        </div>
    );
}
