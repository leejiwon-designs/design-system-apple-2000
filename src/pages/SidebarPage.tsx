import { Sidebar, WindowFrame, Toolbar } from '../components/organisms';
import { Button, Icon } from '../components/atoms';
import { TextField } from '../components/molecules';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Sidebar } from '@/components/organisms';

<Sidebar style={{ width: '200px', height: '100%' }}>
  <Sidebar.Group title="Favorites">
    <Sidebar.Item icon="folder" label="All Files" active />
    <Sidebar.Item icon="document" label="Recent" />
  </Sidebar.Group>
  
  <Sidebar.Group title="Devices">
    <Sidebar.Item icon="folder" label="Macintosh HD" />
  </Sidebar.Group>
</Sidebar>`;

const propsData = [
    { name: 'children', type: 'ReactNode', default: '—', description: 'Sidebar content (Groups/Items)' },
    { name: 'width', type: 'string', default: '—', description: 'Width of the sidebar (often set via style)' },
    { name: 'Sidebar.Group', type: 'Component', default: '—', description: 'Grouping container with optional title' },
    { name: 'Sidebar.Item', type: 'Component', default: '—', description: 'Selectable item with icon and label' },
];

export function SidebarPage() {
    return (
        <DocPage
            title="Sidebar"
            level="organism"
            description="Vertical list navigation often used in Finder windows (Source List). Features grouping and blue selection state."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Finder Example">
                <DocPreview>
                    <div style={{ height: '350px' }}>
                        <WindowFrame title="Finder">
                            <Toolbar>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <Button size="sm"><Icon name="arrow-right" size="sm" style={{ transform: 'rotate(180deg)' }} /></Button>
                                    <Button size="sm"><Icon name="arrow-right" size="sm" /></Button>
                                </div>
                                <Toolbar.Spacer />
                                <TextField placeholder="Search" size="sm" startIcon={<Icon name="search" size="sm" />} />
                            </Toolbar>
                            <div style={{ display: 'flex', height: '100%' }}>
                                <Sidebar style={{ width: '150px' }}>
                                    <Sidebar.Group title="Favorites">
                                        <Sidebar.Item icon="folder" label="Desktop" />
                                        <Sidebar.Item icon="folder" label="Applications" active />
                                        <Sidebar.Item icon="document" label="Documents" />
                                        <Sidebar.Item icon="folder" label="Downloads" />
                                    </Sidebar.Group>
                                    <Sidebar.Group title="Devices">
                                        <Sidebar.Item icon="folder" label="Macintosh HD" />
                                        <Sidebar.Item icon="folder" label="iDisk" />
                                    </Sidebar.Group>
                                </Sidebar>
                                <div style={{ flex: 1, padding: '20px', background: 'white' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '16px' }}>
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                                <div style={{ width: '48px', height: '48px', background: '#ccc', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <div style={{ width: '32px', height: '32px', background: 'white', opacity: 0.5 }}></div>
                                                </div>
                                                <span style={{ fontSize: '11px' }}>App {i}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </WindowFrame>
                    </div>
                </DocPreview>
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
