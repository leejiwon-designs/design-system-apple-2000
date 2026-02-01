import { Toolbar, WindowFrame } from '../components/organisms';
import { Button, Icon, Text } from '../components/atoms';
import { TextField } from '../components/molecules';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Toolbar } from '@/components/organisms';

<Toolbar>
  <Button icon={<Icon name="arrow-right" style={{transform:'rotate(180deg)'}} />}>Back</Button>
  <Button icon={<Icon name="arrow-right" />}>Forward</Button>
  <Toolbar.Divider />
  <Button icon={<Icon name="folder" />}>View</Button>
  <Toolbar.Spacer />
  <TextField placeholder="Search" startIcon={<Icon name="search" />} />
</Toolbar>`;

const propsData = [
    { name: 'children', type: 'ReactNode', default: '—', description: 'Toolbar items (Buttons, Inputs, Spacers)' },
    { name: 'Toolbar.Spacer', type: 'Component', default: '—', description: 'Pushes subsequent items to the far right' },
    { name: 'Toolbar.Divider', type: 'Component', default: '—', description: 'Vertical etched separator line' },
];

export function ToolbarPage() {
    return (
        <DocPage
            title="Toolbar"
            level="organism"
            description="A control bar typically placed below the window title. Features flexible spacing and etched dividers."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Browser Application Example">
                <p style={{ marginBottom: '16px' }}>A classic browser toolbar layout within a Window Frame.</p>
                <DocPreview>
                    <div style={{ height: '300px' }}>
                        <WindowFrame title="Internet Explorer">
                            <Toolbar>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <Button size="sm"><Icon name="arrow-right" size="sm" style={{ transform: 'rotate(180deg)' }} /></Button>
                                    <Button size="sm"><Icon name="arrow-right" size="sm" /></Button>
                                    <Button size="sm"><Icon name="close" size="sm" /></Button>
                                    <Button size="sm"><Icon name="menu" size="sm" /></Button>
                                </div>
                                <Toolbar.Divider />
                                <div style={{ flex: 1, padding: '0 8px' }}>
                                    <TextField
                                        fullWidth
                                        size="md"
                                        defaultValue="http://www.apple.com"
                                        startIcon={<Icon name="search" size="sm" />}
                                    />
                                </div>
                                <Toolbar.Divider />
                                <Button size="sm">Go</Button>
                            </Toolbar>
                            <div style={{ padding: '20px', background: '#fff', height: '100%' }}>
                                <Text size="xl">Welcome to the web.</Text>
                            </div>
                        </WindowFrame>
                    </div>
                </DocPreview>
            </DocSection>

            <DocSection title="Finder Example">
                <DocPreview>
                    <div style={{ height: '200px' }}>
                        <WindowFrame title="Finder">
                            <Toolbar>
                                <Button variant="secondary" size="sm"><Icon name="menu" size="sm" /> Views</Button>
                                <Button variant="secondary" size="sm"><Icon name="folder" size="sm" /> Action</Button>
                                <Toolbar.Spacer />
                                <TextField size="sm" placeholder="Search" startIcon={<Icon name="search" size="sm" />} />
                            </Toolbar>
                            <div style={{ padding: '20px', background: '#fff', height: '100%' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                    <div style={{ textAlign: 'center' }}><Icon name="folder" size="lg" /><Text size="xs">Docs</Text></div>
                                    <div style={{ textAlign: 'center' }}><Icon name="document" size="lg" /><Text size="xs">File</Text></div>
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
