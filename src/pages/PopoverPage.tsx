import { Popover } from '../components/molecules';
import { Button, Text, Divider } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Popover } from '@/components/molecules';

<Popover 
  trigger={<Button>Open Popover</Button>}
  content={
    <div style={{ padding: '8px' }}>
      <Text>This is a popover content.</Text>
    </div>
  }
/>`;

const complexCode = `<Popover 
  trigger={<Button variant="secondary">User Profile</Button>}
  content={
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
      <Text weight="bold">Admin User</Text>
      <Text size="sm" variant="secondary">admin@system.local</Text>
      <Divider />
      <Button size="sm" fullWidth>Log Out</Button>
    </div>
  }
/>`;

const propsData = [
    { name: 'trigger', type: 'ReactNode', default: '—', description: 'Element that toggles the popover' },
    { name: 'content', type: 'ReactNode', default: '—', description: 'Content to display inside the popover' },
    { name: 'isOpen', type: 'boolean', default: 'undefined', description: 'Controlled open state' },
    { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Callback when open state changes' },
];

export function PopoverPage() {
    return (
        <DocPage
            title="Popover"
            level="molecule"
            description="A floating content panel triggered by an element. Uses a signature 'bubble' arrow pointing to the trigger."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Example">
                <DocPreview>
                    <div style={{ display: 'flex', gap: '32px', padding: '32px' }}>
                        <Popover
                            trigger={<Button>Click Me</Button>}
                            content={
                                <div style={{ padding: '4px' }}>
                                    <Text>Hello from Aqua!</Text>
                                </div>
                            }
                        />

                        <Popover
                            trigger={<Button variant="secondary">More Info</Button>}
                            content={
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '180px' }}>
                                    <Text weight="bold">Details</Text>
                                    <Text size="sm">Additional context goes here.</Text>
                                    <Divider />
                                    <Button size="sm">Action</Button>
                                </div>
                            }
                        />
                    </div>
                </DocPreview>
                <DocCode code={complexCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
