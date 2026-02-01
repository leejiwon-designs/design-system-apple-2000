import { Dialog } from '../components/organisms';
import { Button, Icon } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Dialog } from '@/components/organisms';

<Dialog 
  title="Alert"
  description="Are you sure you want to delete this file?"
  actions={
    <>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Delete</Button>
    </>
  }
/>`;

const propsData = [
    { name: 'title', type: 'string', default: '—', description: 'Dialog title (usually bold)' },
    { name: 'description', type: 'ReactNode', default: '—', description: 'Main message text' },
    { name: 'icon', type: 'ReactNode', default: '<Icon />', description: 'Icon displayed on the left' },
    { name: 'actions', type: 'ReactNode', default: '—', description: 'Buttons displayed in the footer' },
    { name: 'open', type: 'boolean', default: 'true', description: 'Visibility state' },
];

export function DialogPage() {
    return (
        <DocPage
            title="Dialog"
            level="organism"
            description="A modal alert or confirmation dialog. Features the classic Aqua pinstripe background and icon-heavy layout."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Standard Alert">
                <DocPreview>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Dialog
                            title="Save changes to the document?"
                            description="If you don't save, your changes will be lost."
                            icon={<Icon name="document" size="xl" />}
                            actions={
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <Button variant="tertiary">Cancel</Button>
                                    <Button variant="secondary">Don't Save</Button>
                                    <Button>Save</Button>
                                </div>
                            }
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
