import { Tabs } from '../components/molecules';
import { Text } from '../components/atoms';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Tabs } from '@/components/molecules';

<Tabs items={[
  { value: 'account', label: 'Account' },
  { value: 'password', label: 'Password' }
]}>
  {(value) => (
    <div style={{ padding: '16px' }}>
      {value === 'account' && <Text>Account Settings</Text>}
      {value === 'password' && <Text>Password Change</Text>}
    </div>
  )}
</Tabs>`;

const propsData = [
    { name: 'items', type: '{ value: string, label: string, disabled?: boolean }[]', default: '[]', description: 'List of tab items' },
    { name: 'value', type: 'string', default: 'undefined', description: 'Controlled active value' },
    { name: 'defaultValue', type: 'string', default: 'items[0].value', description: 'Initial active value' },
    { name: 'onValueChange', type: '(value: string) => void', default: '—', description: 'Callback when active tab changes' },
    { name: 'children', type: '(value: string) => ReactNode', default: '—', description: 'Render prop for content' },
];

export function TabsPage() {
    return (
        <DocPage
            title="Tabs"
            level="molecule"
            description="Classic Aqua folder tabs for organizing content into separate views."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Example">
                <DocPreview>
                    <Tabs
                        items={[
                            { value: 'general', label: 'General' },
                            { value: 'network', label: 'Network' },
                            { value: 'sharing', label: 'Sharing', disabled: true },
                        ]}
                    >
                        {(value) => (
                            <div>
                                {value === 'general' && (
                                    <Text>General content area. This resembles a physical file folder.</Text>
                                )}
                                {value === 'network' && (
                                    <Text>Network settings panel.</Text>
                                )}
                            </div>
                        )}
                    </Tabs>
                </DocPreview>
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
