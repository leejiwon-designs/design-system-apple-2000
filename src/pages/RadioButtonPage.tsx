import { RadioButton } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { RadioButton } from '@/components/atoms';

<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <RadioButton name="choice" value="a" label="Option A" defaultChecked />
  <RadioButton name="choice" value="b" label="Option B" />
</div>`;

const propsData = [
    { name: 'label', type: 'ReactNode', default: '—', description: 'Label text displayed next to the radio button' },
    { name: 'checked', type: 'boolean', default: 'undefined', description: 'Controlled checked state' },
    { name: 'defaultChecked', type: 'boolean', default: 'undefined', description: 'Initial checked state' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
];

export function RadioButtonPage() {
    return (
        <DocPage
            title="Radio Button"
            level="atom"
            description="Selection control for choosing one option from a set. Features the signature Aqua glossy blue dot."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Example">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <RadioButton name="example" value="1" label="Standard Selection" defaultChecked />
                        <RadioButton name="example" value="2" label="Another Option" />
                        <RadioButton name="example" value="3" label="Disabled Option" disabled />
                        <RadioButton name="example2" value="4" label="Disabled & Checked" disabled defaultChecked />
                    </div>
                </DocPreview>
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
