import { DocPage, DocSection, DocCode } from './DocPage';
import '../styles/tokens.css';

const tokenGroups = [
    {
        title: 'Color Palette',
        description: 'Primary Aqua blues and system grays',
        tokens: [
            { name: '--color-aqua-500', value: '#1a8fff', usage: 'Primary accent' },
            { name: '--color-aqua-600', value: '#0066cc', usage: 'Links, active states' },
            { name: '--color-surface-window', value: '#d6d6d6', usage: 'Window backgrounds' },
            { name: '--color-surface-content', value: '#ffffff', usage: 'Content area' },
            { name: '--color-text-primary', value: '#1a1a1a', usage: 'Primary text' },
            { name: '--color-text-secondary', value: '#4a4a4a', usage: 'Secondary text' },
        ],
    },
    {
        title: 'Spacing (2px Grid)',
        description: 'Based on Aqua-era HIG guidance',
        tokens: [
            { name: '--space-2', value: '4px', usage: 'Tight spacing' },
            { name: '--space-4', value: '8px', usage: 'Default small spacing' },
            { name: '--space-8', value: '16px', usage: 'Default medium spacing' },
            { name: '--space-12', value: '24px', usage: 'Section spacing' },
            { name: '--space-16', value: '32px', usage: 'Large spacing' },
        ],
    },
    {
        title: 'Typography',
        description: 'Font families and sizes',
        tokens: [
            { name: '--font-family-system', value: 'Lucida Grande, ...', usage: 'Primary font' },
            { name: '--font-size-sm', value: '11px', usage: 'Small text' },
            { name: '--font-size-base', value: '12px', usage: 'Body text' },
            { name: '--font-size-lg', value: '14px', usage: 'Headings' },
        ],
    },
    {
        title: 'Gradients',
        description: 'Aqua glass and gel gradients used for buttons and tabs',
        tokens: [
            { name: '--gradient-button-aqua', value: 'linear-gradient(...)', usage: 'Primary button' },
            { name: '--gradient-button-gray', value: 'linear-gradient(...)', usage: 'Secondary button' },
            { name: '--gradient-button-graphite', value: 'linear-gradient(...)', usage: 'Graphite button' },
            { name: '--gradient-button-danger', value: 'linear-gradient(...)', usage: 'Danger button' },
            { name: '--gradient-tab', value: 'linear-gradient(...)', usage: 'Tab background' },
            { name: '--gradient-glass-shine', value: 'linear-gradient(...)', usage: 'Glass shine overlay' },
        ],
    },
];

const usageCode = `/* Import tokens in your CSS */
@import './styles/tokens.css';

/* Use tokens via CSS variables */
.my-component {
  color: var(--color-text-primary);
  padding: var(--space-4);
  font-family: var(--font-family-system);
}`;

export function TokensPage() {
    return (
        <DocPage
            title="Design Tokens"
            level="foundation"
            description="Design tokens are the single source of truth for colors, spacing, typography, and other visual properties in the Aqua2000 system."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} language="css" />
            </DocSection>

            {tokenGroups.map((group) => (
                <DocSection key={group.title} title={group.title}>
                    <p style={{ marginBottom: 'var(--space-8)' }}>{group.description}</p>
                    <table className="doc-page__props-table">
                        <thead>
                            <tr>
                                <th>Token</th>
                                <th>Value</th>
                                <th>Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {group.tokens.map((token) => (
                                <tr key={token.name}>
                                    <td><code>{token.name}</code></td>
                                    <td>
                                        {token.name.includes('color') || token.name.includes('gradient') ? (
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span
                                                    style={{
                                                        width: '32px',
                                                        height: '16px',
                                                        background: token.value.startsWith('linear') ? `var(${token.name})` : token.value,
                                                        backgroundColor: token.value.startsWith('#') ? token.value : undefined,
                                                        border: '1px solid #ccc',
                                                        borderRadius: '2px',
                                                    }}
                                                />
                                                <code>{token.value}</code>
                                            </span>
                                        ) : (
                                            <code>{token.value}</code>
                                        )}
                                    </td>
                                    <td>{token.usage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </DocSection>
            ))}
        </DocPage>
    );
}
