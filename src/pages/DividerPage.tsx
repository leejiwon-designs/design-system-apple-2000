import { Divider, Button, Text } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Divider } from '@/components/atoms';

// Default Horizontal
<Divider />`;

const verticalCode = `<div style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
  <Text>Item 1</Text>
  <Divider orientation="vertical" />
  <Text>Item 2</Text>
  <Divider orientation="vertical" />
  <Text>Item 3</Text>
</div>`;

const spacingCode = `// Small spacing
<Text>Section A</Text>
<Divider spacing="sm" />
<Text>Section B</Text>

// Large spacing
<Text>Section C</Text>
<Divider spacing="lg" />
<Text>Section D</Text>`;

const propsData = [
    { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Direction of the divider line' },
    { name: 'spacing', type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: 'Margin around the divider' },
];

export function DividerPage() {
    return (
        <DocPage
            title="Divider"
            level="atom"
            description="A thin, etched line used to separate content. Replicates the classic Aqua 'engraved' appearance."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Horizontal (Default)">
                <p style={{ marginBottom: '16px' }}>Standard etched line: 1px gray border with 1px white highlight.</p>
                <DocPreview>
                    <div style={{ background: '#f5f5f5', padding: '20px' }}>
                        <Text>Above the line</Text>
                        <Divider />
                        <Text>Below the line</Text>
                    </div>
                </DocPreview>
            </DocSection>

            <DocSection title="Vertical">
                <p style={{ marginBottom: '16px' }}>Used between inline elements. Requires a defined height in the parent container.</p>
                <DocPreview>
                    <div style={{ display: 'flex', alignItems: 'center', height: '24px', background: '#f5f5f5', padding: '0 10px' }}>
                        <Button size="sm">Edit</Button>
                        <Divider orientation="vertical" spacing="sm" />
                        <Button size="sm">View</Button>
                        <Divider orientation="vertical" spacing="sm" />
                        <Button size="sm" disabled>Delete</Button>
                    </div>
                </DocPreview>
                <DocCode code={verticalCode} />
            </DocSection>

            <DocSection title="Spacing">
                <DocPreview>
                    <div style={{ background: '#f5f5f5', padding: '10px' }}>
                        <Text size="sm" variant="secondary">Small Spacing</Text>
                        <Divider spacing="sm" />
                        <Text size="sm" variant="secondary">Large Spacing</Text>
                        <Divider spacing="lg" />
                        <Text size="sm" variant="secondary">No Spacing</Text>
                        <Divider spacing="none" />
                    </div>
                </DocPreview>
                <DocCode code={spacingCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
