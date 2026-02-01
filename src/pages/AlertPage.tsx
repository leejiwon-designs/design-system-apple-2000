import { Alert } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Alert } from '@/components/atoms';

<Alert
  title="Sync Complete"
  description="All files are up to date."
  onClose={() => console.log('dismiss')}
/>`;

const variantsCode = `<Alert variant="info" title="Info" description="General message." onClose={() => {}} />
<Alert variant="success" title="Success" description="Your changes were saved." onClose={() => {}} />
<Alert variant="warning" title="Warning" description="Storage is almost full." onClose={() => {}} />
<Alert variant="error" title="Error" description="Something went wrong." onClose={() => {}} />`;

const propsData = [
    { name: 'variant', type: '"info" | "success" | "warning" | "error"', default: '"info"', description: 'Visual style variant' },
    { name: 'title', type: 'ReactNode', default: '—', description: 'Alert title text' },
    { name: 'description', type: 'ReactNode', default: '—', description: 'Supporting message text' },
    { name: 'onClose', type: '() => void', default: '—', description: 'Shows dismiss button and fires on click' },
    { name: 'children', type: 'ReactNode', default: '—', description: 'Custom content (overrides title/description)' },
];

export function AlertPage() {
    return (
        <DocPage
            title="Alert"
            level="atom"
            description="Inline notification banner for status, success, warning, or error messages."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Variants">
                <DocPreview>
                    <div style={{ display: 'grid', gap: '12px' }}>
                        <Alert title="Info" description="General message." onClose={() => {}} />
                        <Alert variant="success" title="Success" description="Your changes were saved." onClose={() => {}} />
                        <Alert variant="warning" title="Warning" description="Storage is almost full." onClose={() => {}} />
                        <Alert variant="error" title="Error" description="Something went wrong." onClose={() => {}} />
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
