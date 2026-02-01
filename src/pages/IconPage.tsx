import { Icon } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Icon } from '@/components/atoms';

<Icon name="search" />`;

const libraryCode = `<Icon name="search" />
<Icon name="close" />
<Icon name="menu" />
<Icon name="check" />
<Icon name="arrow-right" />
<Icon name="folder" />
<Icon name="document" />`;

const variantsCode = `<Icon name="folder" variant="primary" />
<Icon name="check" variant="success" />
<Icon name="close" variant="error" />
<Icon name="search" variant="disabled" />`;

const sizesCode = `<Icon name="folder" size="sm" />
<Icon name="folder" size="md" />
<Icon name="folder" size="lg" />
<Icon name="folder" size="xl" />`;

const propsData = [
    { name: 'name', type: 'IconName', default: '—', description: 'Name of the built-in icon to render' },
    { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Size of the icon' },
    { name: 'variant', type: 'string', default: '"default"', description: 'Color style variant' },
];

const icons = ['search', 'close', 'menu', 'check', 'arrow-right', 'folder', 'document'] as const;

export function IconPage() {
    return (
        <DocPage
            title="Icon"
            level="atom"
            description="Scalable vector icons with support for sizing and coloring."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Icon Library">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        {icons.map((name) => (
                            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <Icon name={name} size="lg" />
                                <span style={{ fontSize: '10px', color: '#666', fontFamily: 'monospace' }}>{name}</span>
                            </div>
                        ))}
                    </div>
                </DocPreview>
                <DocCode code={libraryCode} />
            </DocSection>

            <DocSection title="Variants">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Icon name="folder" variant="primary" size="lg" />
                        <Icon name="check" variant="success" size="lg" />
                        <Icon name="close" variant="error" size="lg" />
                        <Icon name="search" variant="disabled" size="lg" />
                    </div>
                </DocPreview>
                <DocCode code={variantsCode} />
            </DocSection>

            <DocSection title="Sizes">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <Icon name="folder" size="sm" />
                        <Icon name="folder" size="md" />
                        <Icon name="folder" size="lg" />
                        <Icon name="folder" size="xl" />
                    </div>
                </DocPreview>
                <DocCode code={sizesCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
