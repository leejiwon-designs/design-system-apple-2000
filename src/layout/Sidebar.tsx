import { NavLink } from 'react-router-dom';
import './Sidebar.css';

interface NavItem {
    label: string;
    path?: string;
}

interface NavGroup {
    title: string;
    items: NavItem[];
}

const navigation: NavGroup[] = [
    {
        title: 'Foundations',
        items: [
            { label: 'Tokens', path: '/foundations/tokens' },
        ],
    },
    {
        title: 'Atoms',
        items: [
            { label: 'Button', path: '/atoms/button' },
            { label: 'Icon', path: '/atoms/icon' },
            { label: 'Text', path: '/atoms/text' },
            { label: 'Spinner', path: '/atoms/spinner' },
            { label: 'Divider', path: '/atoms/divider' },
            { label: 'Radio Button', path: '/atoms/radio' },
            { label: 'Checkbox', path: '/atoms/checkbox' },
            { label: 'Alert', path: '/atoms/alert' },
            { label: 'Badge', path: '/atoms/badge' },
            { label: 'Dropdown', path: '/atoms/dropdown' },
            { label: 'Loading Bar', path: '/atoms/loading-bar' },
        ],
    },
    {
        title: 'Molecules',
        items: [
            { label: 'TextField', path: '/molecules/textfield' },
            { label: 'Tabs', path: '/molecules/tabs' },
            { label: 'Popover', path: '/molecules/popover' },
            { label: 'Menu', path: '/molecules/menu' },
            { label: 'Accordion', path: '/molecules/accordion' },
            { label: 'Calendar', path: '/molecules/calendar' },
        ],
    },
    {
        title: 'Organisms',
        items: [
            { label: 'Window Frame', path: '/organisms/window-frame' },
            { label: 'Dialog', path: '/organisms/dialog' },
            { label: 'Toolbar', path: '/organisms/toolbar' },
            { label: 'Sidebar', path: '/organisms/sidebar' },
        ],
    },
];

export function Sidebar() {
    return (
        <aside className="sidebar" role="navigation" aria-label="Component navigation">
            <nav className="sidebar__nav">
                {navigation.map((group) => (
                    <div key={group.title} className="sidebar__group">
                        <h2 className="sidebar__group-title">{group.title}</h2>
                        {group.items.map((item) => (
                            item.path ? (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ) : (
                                <div key={item.label} className="sidebar__text">
                                    {item.label}
                                </div>
                            )
                        ))}
                    </div>
                ))}
            </nav>
        </aside>
    );
}
