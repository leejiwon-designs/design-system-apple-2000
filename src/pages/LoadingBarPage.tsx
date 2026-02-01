import { LoadingBar } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { LoadingBar } from '@/components/atoms';

<LoadingBar value={55} />`;

const variantsCode = `<LoadingBar value={30} />
<LoadingBar value={70} />
<LoadingBar variant="indeterminate" />`;

const propsData = [
    { name: 'value', type: 'number', default: '0', description: 'Progress value (0-100) for determinate mode' },
    { name: 'variant', type: '"determinate" | "indeterminate"', default: '"determinate"', description: 'Loading bar style' },
];

export function LoadingBarPage() {
    return (
        <DocPage
            title="Loading Bar"
            level="atom"
            description="A glossy Aqua-style progress bar for loading states."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Examples">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <LoadingBar value={30} />
                        <LoadingBar value={70} />
                        <LoadingBar variant="indeterminate" />
                    </div>
                </DocPreview>
                <DocCode code={variantsCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
