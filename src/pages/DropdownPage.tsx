import { Dropdown } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Dropdown } from '@/components/atoms';

<Dropdown
  placeholder="Select a mode"
  options={[
    { value: 'left', label: 'Left' },
    { value: 'middle', label: 'Middle' },
    { value: 'right', label: 'Right' },
  ]}
/>`;

const propsData = [
    { name: 'options', type: '{ value: string; label: ReactNode; disabled?: boolean }[]', default: '[]', description: 'List of dropdown options' },
    { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder option label' },
    { name: 'value', type: 'string', default: 'undefined', description: 'Controlled selected value' },
    { name: 'defaultValue', type: 'string', default: 'undefined', description: 'Initial selected value' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the dropdown' },
    { name: 'onChange', type: '(event) => void', default: '—', description: 'Change handler' },
];

export function DropdownPage() {
    return (
        <DocPage
            title="Dropdown"
            level="atom"
            description="A compact Aqua-inspired dropdown control for choosing a single option."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Example">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Dropdown
                            placeholder="Select option"
                            options={[
                                { value: 'left', label: 'Left' },
                                { value: 'middle', label: 'Middle' },
                                { value: 'right', label: 'Right' },
                            ]}
                        />
                        <Dropdown
                            defaultValue="otto"
                            options={[
                                { value: 'andrea', label: 'Andrea' },
                                { value: 'otto', label: 'Otto' },
                                { value: 'cimi', label: 'Cimi' },
                            ]}
                        />
                        <Dropdown
                            disabled
                            placeholder="Disabled"
                            options={[
                                { value: 'one', label: 'One' },
                            ]}
                        />
                    </div>
                </DocPreview>
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
