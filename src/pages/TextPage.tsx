import { Text } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Text } from '@/components/atoms';

<Text>Standard text paragraph.</Text>`;

const variantsCode = `<Text variant="primary">Primary (Default)</Text>
<Text variant="secondary">Secondary</Text>
<Text variant="disabled">Disabled</Text>
<Text variant="success">Success</Text>
<Text variant="warning">Warning</Text>
<Text variant="error">Error</Text>
<Text variant="link">Link Style</Text>`;

const sizesCode = `<Text size="xs">XS (10px)</Text>
<Text size="sm">SM (11px)</Text>
<Text size="base">Base (12px)</Text>
<Text size="md">MD (13px)</Text>
<Text size="lg">LG (14px)</Text>
<Text size="xl">XL (16px)</Text>
<Text size="2xl">2XL (18px)</Text>
<Text size="3xl">3XL (22px)</Text>`;

const weightsCode = `<Text weight="normal">Normal</Text>
<Text weight="medium">Medium</Text>
<Text weight="bold">Bold</Text>`;

const headingsCode = `<Text heading="h1">Heading 1</Text>
<Text heading="h2">Heading 2</Text>
<Text heading="h3">Heading 3</Text>
<Text heading="h4">Heading 4</Text>
<Text heading="h5">Heading 5</Text>
<Text heading="h6">Heading 6</Text>`;

const propsData = [
    { name: 'variant', type: 'string', default: '"primary"', description: 'Color/style variant: primary, secondary, disabled, success, warning, error, link' },
    { name: 'size', type: 'string', default: '"base"', description: 'xs, sm, base, md, lg, xl, 2xl, 3xl' },
    { name: 'weight', type: 'string', default: '"normal"', description: 'normal, medium, bold' },
    { name: 'heading', type: 'string', default: '—', description: 'Heading style: h1, h2, h3, h4, h5, h6' },
    { name: 'align', type: 'string', default: '—', description: 'left, center, right, justify' },
    { name: 'truncate', type: 'boolean', default: 'false', description: 'Truncate text with ellipsis' },
    { name: 'as', type: 'ElementType', default: '"p"', description: 'HTML tag to render (e.g., h1, span, div)' },
];

export function TextPage() {
    return (
        <DocPage
            title="Text"
            level="atom"
            description="The primary typography component for displaying text in various sizes, weights, and colors based on Aqua2000 tokens."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Variants">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Text variant="primary">Primary Text (Default)</Text>
                        <Text variant="secondary">Secondary Text</Text>
                        <Text variant="disabled">Disabled Text</Text>
                        <Text variant="success">Success Text</Text>
                        <Text variant="warning">Warning Text</Text>
                        <Text variant="error">Error Text</Text>
                        <Text variant="link">Link Style Text</Text>
                    </div>
                </DocPreview>
                <DocCode code={variantsCode} />
            </DocSection>

            <DocSection title="Sizes">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Text size="xs">XS: The quick brown fox</Text>
                        <Text size="sm">SM: The quick brown fox</Text>
                        <Text size="base">Base: The quick brown fox</Text>
                        <Text size="md">MD: The quick brown fox</Text>
                        <Text size="lg">LG: The quick brown fox</Text>
                        <Text size="xl">XL: The quick brown fox</Text>
                        <Text size="2xl">2XL: The quick brown fox</Text>
                        <Text size="3xl">3XL: The quick brown fox</Text>
                    </div>
                </DocPreview>
                <DocCode code={sizesCode} />
            </DocSection>

            <DocSection title="Weights">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Text weight="normal">Normal Weight (400)</Text>
                        <Text weight="medium">Medium Weight (500)</Text>
                        <Text weight="bold">Bold Weight (700)</Text>
                    </div>
                </DocPreview>
                <DocCode code={weightsCode} />
            </DocSection>

            <DocSection title="Headings">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Text heading="h1">Heading 1</Text>
                        <Text heading="h2">Heading 2</Text>
                        <Text heading="h3">Heading 3</Text>
                        <Text heading="h4">Heading 4</Text>
                        <Text heading="h5">Heading 5</Text>
                        <Text heading="h6">Heading 6</Text>
                    </div>
                </DocPreview>
                <DocCode code={headingsCode} />
            </DocSection>

            <DocSection title="Polymorphism">
                <p style={{ marginBottom: '16px' }}>Render as different HTML elements using the <code>as</code> prop.</p>
                <DocPreview>
                    <Text as="h1" size="3xl" weight="bold">Heading 1</Text>
                    <Text as="span" variant="secondary">Span inline text </Text>
                    <Text as="strong" weight="bold">Strong text</Text>
                </DocPreview>
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
