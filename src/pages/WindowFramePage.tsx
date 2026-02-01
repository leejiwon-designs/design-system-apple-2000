import { WindowFrame } from '../components/organisms';
import { Button, Text, Divider, Icon } from '../components/atoms';
import { TextField } from '../components/molecules';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { WindowFrame } from '@/components/organisms';

<WindowFrame title="My Application">
  <div style={{ padding: '20px' }}>
    <Text>Window Content</Text>
  </div>
</WindowFrame>`;

const inactiveCode = `<WindowFrame title="Background Window" isActive={false}>
  <div style={{ padding: '20px', opacity: 0.5 }}>
    <Text>Inactive content...</Text>
  </div>
</WindowFrame>`;

const applicationExample = `<WindowFrame title="Finder - Applications">
  <div style={{ display: 'flex', height: '300px' }}>
    {/* Sidebar Area */}
    <div style={{ width: '150px', borderRight: '1px solid #ccc', padding: '10px', background: '#f0f0f0' }}>
      <Text size="sm" variant="secondary" style={{ marginBottom: '8px' }}>FAVORITES</Text>
      <Button variant="link" style={{ justifyContent: 'flex-start' }}><Icon name="folder" size="sm"/> Applications</Button>
      <Button variant="link" style={{ justifyContent: 'flex-start' }}><Icon name="document" size="sm"/> Documents</Button>
    </div>
    
    {/* Main Content */}
    <div style={{ flex: 1, padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <TextField startIcon={<Icon name="search" size="sm" />} placeholder="Search" />
      </div>
      <Text>No items found.</Text>
    </div>
  </div>
</WindowFrame>`;

const propsData = [
    { name: 'title', type: 'string', default: '"Untitled"', description: 'Text displayed in the title bar center' },
    { name: 'isActive', type: 'boolean', default: 'true', description: 'Visual state of window (active/focused vs background)' },
    { name: 'children', type: 'ReactNode', default: '—', description: 'Content rendered inside the window frame' },
    { name: 'onClose', type: '() => void', default: '—', description: 'Callback for red button click' },
    { name: 'onMinimize', type: '() => void', default: '—', description: 'Callback for yellow button click' },
    { name: 'onZoom', type: '() => void', default: '—', description: 'Callback for green button click' },
];

export function WindowFramePage() {
    return (
        <DocPage
            title="Window Frame"
            level="organism"
            description="The fundamental container for Aqua applications. Features a draggable title bar, window controls (traffic lights), and active/inactive states."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Active Window">
                <DocPreview>
                    <div style={{ height: '200px' }}>
                        <WindowFrame title="Active Window">
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text size="xl">Hello World</Text>
                                <Button>Click Me</Button>
                            </div>
                        </WindowFrame>
                    </div>
                </DocPreview>
            </DocSection>

            <DocSection title="Inactive State">
                <p style={{ marginBottom: '16px' }}>When a window loses focus, the title bar styling simplifies and controls dim.</p>
                <DocPreview>
                    <div style={{ height: '150px' }}>
                        <WindowFrame title="Background Task" isActive={false}>
                            <div style={{ padding: '20px' }}>
                                <Text style={{ opacity: 0.6 }}>Waiting...</Text>
                            </div>
                        </WindowFrame>
                    </div>
                </DocPreview>
                <DocCode code={inactiveCode} />
            </DocSection>

            <DocSection title="Complex Layout">
                <DocPreview>
                    <div style={{ height: '350px' }}>
                        <WindowFrame title="Finder">
                            <div style={{ display: 'flex', height: '100%' }}>
                                <div style={{ width: '140px', borderRight: '1px solid #d4d4d4', padding: '12px', background: '#e8e8e8' }}>
                                    <Text size="xs" weight="bold" style={{ color: '#666', marginBottom: '8px' }}>PLACES</Text>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}><Icon name="folder" size="sm" /> Desktop</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}><Icon name="folder" size="sm" /> Applications</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}><Icon name="document" size="sm" /> Documents</div>
                                    </div>
                                </div>
                                <div style={{ flex: 1, padding: '16px', background: '#fff' }}>
                                    <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text size="lg" weight="bold">Applications</Text>
                                        <div style={{ width: '150px' }}>
                                            <TextField size="sm" startIcon={<Icon name="search" size="sm" />} placeholder="Search" />
                                        </div>
                                    </div>
                                    <Divider spacing="sm" />
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '16px', marginTop: '16px' }}>
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                                <div style={{ width: '48px', height: '48px', background: '#e0e0e0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Icon name="document" size="lg" />
                                                </div>
                                                <Text size="xs">App {i}</Text>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </WindowFrame>
                    </div>
                </DocPreview>
                <DocCode code={applicationExample} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
