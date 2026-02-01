import { Accordion } from '../components/molecules';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Accordion } from '@/components/molecules';

<Accordion
  items={[
    { id: 'general', title: 'General', content: 'General settings.' },
    { id: 'network', title: 'Network', content: 'Network preferences.' },
  ]}
/>`;

const propsData = [
    { name: 'items', type: '{ id: string, title: ReactNode, content: ReactNode, disabled?: boolean }[]', default: '[]', description: 'List of accordion items' },
    { name: 'value', type: 'string | null', default: 'undefined', description: 'Controlled open panel id' },
    { name: 'defaultValue', type: 'string | null', default: 'null', description: 'Initial open panel id' },
    { name: 'onValueChange', type: '(value: string | null) => void', default: '—', description: 'Callback when open panel changes' },
];

export function AccordionPage() {
    return (
        <DocPage
            title="Accordion"
            level="molecule"
            description="Stacked disclosure panels with Aqua-styled headers."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Example">
                <DocPreview>
                    <Accordion
                        defaultValue="network"
                        items={[
                            { id: 'general', title: 'General', content: 'Control system-wide defaults and appearance.' },
                            { id: 'network', title: 'Network', content: 'Manage Ethernet, Wi‑Fi, and proxy settings.' },
                            { id: 'sharing', title: 'Sharing', content: 'Enable file sharing and remote access.', disabled: true },
                        ]}
                    />
                </DocPreview>
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
