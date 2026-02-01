import { Spinner } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Spinner } from '@/components/atoms';

<Spinner />`;

const variantsCode = `<Spinner variant="secondary" />
<Spinner variant="primary" />
<div style={{ background: '#333', padding: '8px', borderRadius: '4px' }}>
  <Spinner variant="inverse" />
</div>`;

const sizesCode = `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`;

const propsData = [
    { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Size of the spinner' },
    { name: 'variant', type: '"primary" | "secondary" | "inverse"', default: '"secondary"', description: 'Color theme' },
];

export function SpinnerPage() {
    return (
        <DocPage
            title="Spinner"
            level="atom"
            description="Indicates a background process is active. Modeled after the classic 12-spoke system loader."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Variants">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <Spinner variant="secondary" />
                        <Spinner variant="primary" />
                        <div style={{ background: '#333', padding: '8px', borderRadius: '4px', display: 'flex' }}>
                            <Spinner variant="inverse" />
                        </div>
                    </div>
                </DocPreview>
                <DocCode code={variantsCode} />
            </DocSection>

            <DocSection title="Sizes">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <Spinner size="sm" />
                        <Spinner size="md" />
                        <Spinner size="lg" />
                        <Spinner size="xl" />
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
