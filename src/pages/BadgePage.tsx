import { Badge, Icon } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Badge } from '@/components/atoms';

<Badge>New</Badge>`;

const variantsCode = `<Badge>Neutral</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`;

const sizesCode = `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`;

const withIconCode = `<Badge>
  <Icon name="check" size="sm" />
  Verified
</Badge>
<Badge variant="success">
  <Icon name="check" size="sm" />
  Approved
</Badge>
<Badge variant="warning">
  <Icon name="close" size="sm" />
  Warning
</Badge>`;

const propsData = [
    { name: 'variant', type: '"neutral" | "info" | "success" | "warning" | "error"', default: '"neutral"', description: 'Visual style variant' },
    { name: 'size', type: '"sm" | "md"', default: '"md"', description: 'Badge size' },
    { name: 'children', type: 'ReactNode', default: '—', description: 'Badge content (required)' },
];

export function BadgePage() {
    return (
        <DocPage
            title="Badge"
            level="atom"
            description="Compact status label for counts and metadata."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Variants">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Badge>Neutral</Badge>
                        <Badge variant="info">Info</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="error">Error</Badge>
                    </div>
                </DocPreview>
                <DocCode code={variantsCode} />
            </DocSection>

            <DocSection title="Sizes">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Badge size="sm">Small</Badge>
                        <Badge size="md">Medium</Badge>
                    </div>
                </DocPreview>
                <DocCode code={sizesCode} />
            </DocSection>

            <DocSection title="With Icon">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Badge>
                            <Icon name="check" size="sm" />
                            Verified
                        </Badge>
                        <Badge variant="success">
                            <Icon name="check" size="sm" />
                            Approved
                        </Badge>
                        <Badge variant="warning">
                            <Icon name="close" size="sm" />
                            Warning
                        </Badge>
                    </div>
                </DocPreview>
                <DocCode code={withIconCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
