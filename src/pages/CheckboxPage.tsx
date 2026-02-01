import { Checkbox } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Checkbox } from '@/components/atoms';

<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <Checkbox label="Enable notifications" defaultChecked />
  <Checkbox label="Auto update" />
</div>`;

const propsData = [
    { name: 'label', type: 'ReactNode', default: '—', description: 'Label text displayed next to the checkbox' },
    { name: 'checked', type: 'boolean', default: 'undefined', description: 'Controlled checked state' },
    { name: 'defaultChecked', type: 'boolean', default: 'undefined', description: 'Initial checked state' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
];

export function CheckboxPage() {
    return (
        <DocPage
            title="Checkbox"
            level="atom"
            description="Binary selection control with the Aqua glossy checkmark."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Example">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Checkbox label="Enable notifications" defaultChecked />
                        <Checkbox label="Auto update" />
                        <Checkbox label="Disabled Option" disabled />
                        <Checkbox label="Disabled & Checked" disabled defaultChecked />
                    </div>
                </DocPreview>
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
