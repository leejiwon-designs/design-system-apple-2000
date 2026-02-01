import { Button } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Button } from '@/components/atoms';

<Button>Click me</Button>`;

const variantsCode = `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="graphite">Graphite</Button>
<Button variant="danger">Danger</Button>`;

const sizesCode = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

const statesCode = `<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`;

const polymorphicCode = `// Render as a link
<Button as="a" href="/somewhere">Go Somewhere</Button>`;

const buttonProps = [
    { name: 'variant', type: '"default" | "secondary" | "tertiary" | "graphite" | "danger"', default: '"default"', description: 'Visual style variant' },
    { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the button' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the button is disabled' },
    { name: 'isLoading', type: 'boolean', default: 'false', description: 'Shows loading spinner and disables interaction' },
    { name: 'startIcon', type: 'ReactNode', default: '—', description: 'Icon to display before the label' },
    { name: 'endIcon', type: 'ReactNode', default: '—', description: 'Icon to display after the label' },
    { name: 'as', type: 'ElementType', default: '"button"', description: 'Render as a different element (e.g., "a" for links)' },
    { name: 'children', type: 'ReactNode', default: '—', description: 'Button content (required)' },
];

export function ButtonPage() {
    return (
        <DocPage
            title="Button"
            level="atom"
            description="Triggers an action or event. The Button component features the iconic Aqua gel appearance with gradient fills and subtle shadows."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Variants">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <Button variant="default">Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="tertiary">Tertiary</Button>
                        <Button variant="graphite">Graphite</Button>
                        <Button variant="danger">Danger</Button>
                    </div>
                </DocPreview>
                <DocCode code={variantsCode} />
            </DocSection>

            <DocSection title="Sizes">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </DocPreview>
                <DocCode code={sizesCode} />
            </DocSection>

            <DocSection title="States">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <Button disabled>Disabled</Button>
                        <Button isLoading>Loading</Button>
                    </div>
                </DocPreview>
                <DocCode code={statesCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={buttonProps} />
            </DocSection>

            <DocSection title="Polymorphism">
                <p style={{ marginBottom: 'var(--space-8)' }}>
                    Use the <code>as</code> prop to render the button as a different element while preserving styles.
                </p>
                <DocPreview>
                    <Button as="a" href="#polymorphism">Link Button</Button>
                </DocPreview>
                <DocCode code={polymorphicCode} />
            </DocSection>

            <DocSection title="Accessibility">
                <h4 style={{ marginBottom: 'var(--space-4)' }}>Keyboard Interactions</h4>
                <table className="doc-page__props-table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>Enter</code></td>
                            <td>Activates the button</td>
                        </tr>
                        <tr>
                            <td><code>Space</code></td>
                            <td>Activates the button</td>
                        </tr>
                        <tr>
                            <td><code>Tab</code></td>
                            <td>Moves focus to the next focusable element</td>
                        </tr>
                    </tbody>
                </table>

                <h4 style={{ margin: 'var(--space-8) 0 var(--space-4)' }}>ARIA Attributes</h4>
                <ul style={{ paddingLeft: 'var(--space-10)' }}>
                    <li><code>aria-disabled</code> — Set when button is disabled or loading</li>
                    <li><code>aria-busy</code> — Set when button is in loading state</li>
                    <li>Focus ring visible for keyboard navigation (3px outline)</li>
                </ul>
            </DocSection>
        </DocPage>
    );
}
