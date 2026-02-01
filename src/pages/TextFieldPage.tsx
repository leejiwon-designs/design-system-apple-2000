import { TextField } from '../components/molecules';
import { Icon } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { TextField } from '@/components/molecules';

<TextField label="Username" placeholder="Enter your username" />`;

const variantsCode = `<TextField label="Default" placeholder="Placeholder text" />
<TextField label="Filled" defaultValue="John Doe" />
<TextField label="Disabled" disabled defaultValue="Cannot edit" />
<TextField label="Error" error="Invalid field value" defaultValue="Wrong input" />`;

const iconsCode = `<TextField 
  label="Search" 
  placeholder="Search..." 
  startIcon={<Icon name="search" size="sm" />} 
/>
<TextField 
  label="Profile URL" 
  endIcon={<Icon name="check" size="sm" variant="success" />} 
  defaultValue="aqua2000"
/>`;

const sizesCode = `<TextField size="sm" placeholder="Small" />
<TextField size="md" placeholder="Medium" />
<TextField size="lg" placeholder="Large" />`;

const propsData = [
    { name: 'label', type: 'string', default: '—', description: 'Label content displayed above the input' },
    { name: 'helperText', type: 'string', default: '—', description: 'Assistive text displayed below the input' },
    { name: 'error', type: 'string', default: '—', description: 'Error message. If provided, input shows error state' },
    { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the input' },
    { name: 'startIcon', type: 'ReactNode', default: '—', description: 'Icon displayed at the start of the input' },
    { name: 'endIcon', type: 'ReactNode', default: '—', description: 'Icon displayed at the end of the input' },
    { name: 'fullWidth', type: 'boolean', default: 'true', description: 'Whether the input should take up the full container width' },
];

export function TextFieldPage() {
    return (
        <DocPage
            title="TextField"
            level="molecule"
            description="Allows users to enter and edit text. Features the signature Aqua inset shadow style for depth."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="States">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
                        <TextField label="Default" placeholder="Placeholder text" />
                        <TextField label="Filled" defaultValue="John Doe" />
                        <TextField label="Disabled" disabled defaultValue="Cannot edit" />
                        <TextField label="Error" error="Invalid field value" defaultValue="Wrong input" />
                    </div>
                </DocPreview>
                <DocCode code={variantsCode} />
            </DocSection>

            <DocSection title="With Icons">
                <p style={{ marginBottom: '16px' }}>
                    Supports <code>startIcon</code> and <code>endIcon</code> props for integrating atoms.
                </p>
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
                        <TextField
                            label="Search"
                            placeholder="Search..."
                            startIcon={<Icon name="search" size="sm" />}
                        />
                        <TextField
                            label="Profile URL"
                            endIcon={<Icon name="check" size="sm" variant="success" />}
                            defaultValue="aqua2000"
                        />
                    </div>
                </DocPreview>
                <DocCode code={iconsCode} />
            </DocSection>

            <DocSection title="Sizes">
                <DocPreview>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
                        <TextField size="sm" placeholder="Small" />
                        <TextField size="md" placeholder="Medium" />
                        <TextField size="lg" placeholder="Large" />
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
