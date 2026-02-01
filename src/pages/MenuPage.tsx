import { Menu } from '../components/molecules';
import { Button, Icon } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Menu } from '@/components/molecules';

<Menu 
  trigger={<Button>File</Button>}
  groups={[
    {
      id: 'file-actions',
      items: [
        { id: 'new', label: 'New File' },
        { id: 'open', label: 'Open...' }
      ]
    },
    {
      id: 'exit-group',
      items: [
        { id: 'exit', label: 'Exit' }
      ]
    }
  ]}
/>`;

const detachedCode = `<Menu 
  detached
  trigger={<Button variant="secondary" icon={<Icon name="menu" />}>Options</Button>}
  groups={[
    {
      id: 'g1',
      items: [
        { id: 'edit', label: 'Edit', icon: <Icon name="document" size="sm" /> },
        { id: 'dup', label: 'Duplicate' }
      ]
    },
    {
      id: 'g2',
      label: 'Danger Zone',
      items: [{ id: 'del', label: 'Delete', disabled: true }]
    }
  ]}
/>`;

const propsData = [
    { name: 'trigger', type: 'ReactNode', default: '—', description: 'Element that opens the menu' },
    { name: 'groups', type: 'MenuGroup[]', default: '[]', description: 'Array of groups containing items' },
    { name: 'detached', type: 'boolean', default: 'false', description: 'If true, menu floats with rounded corners (context menu style)' },
];

export function MenuPage() {
    return (
        <DocPage
            title="Menu"
            level="molecule"
            description="A list of actions or selection options. Supports grouping, icons, and separators."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Standard Menu">
                <p style={{ marginBottom: '16px' }}>Attached directly to the trigger (square top corners).</p>
                <DocPreview>
                    <Menu
                        trigger={<Button>File</Button>}
                        groups={[
                            {
                                id: 'main',
                                items: [
                                    { id: 'new', label: 'New File', onClick: () => alert('New File') },
                                    { id: 'open', label: 'Open...', onClick: () => alert('Open') },
                                ]
                            },
                            {
                                id: 'recent',
                                label: 'Recent',
                                items: [
                                    { id: 'doc1', label: 'document.txt' },
                                    { id: 'doc2', label: 'notes.md' }
                                ]
                            },
                            {
                                id: 'exit',
                                items: [
                                    { id: 'quit', label: 'Exit' }
                                ]
                            }
                        ]}
                    />
                </DocPreview>
            </DocSection>

            <DocSection title="Detached (Context) Menu">
                <p style={{ marginBottom: '16px' }}>Floating menu with fully rounded corners, often used for settings or context actions.</p>
                <DocPreview>
                    <Menu
                        detached
                        trigger={<Button variant="secondary"><span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Options <Icon name="menu" size="sm" /></span></Button>}
                        groups={[
                            {
                                id: 'actions',
                                items: [
                                    { id: 'edit', label: 'Edit', icon: <Icon name="document" size="sm" /> },
                                    { id: 'share', label: 'Share', icon: <Icon name="folder" size="sm" /> }
                                ]
                            },
                            {
                                id: 'destructive',
                                items: [
                                    { id: 'delete', label: 'Delete', disabled: true, icon: <Icon name="close" size="sm" /> }
                                ]
                            }
                        ]}
                    />
                </DocPreview>
                <DocCode code={detachedCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
