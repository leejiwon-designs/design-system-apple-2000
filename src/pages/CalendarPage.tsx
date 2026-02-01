import { useState } from 'react';
import { Calendar } from '../components/molecules';
import { DocPage, DocSection, DocPreview, DocCode, DocPropsTable } from './DocPage';

const usageCode = `import { Calendar } from '@/components/molecules';

<Calendar
  navigation="controls"
  selectedDate={new Date()}
  onSelect={(date) => console.log(date)}
/>`;

const monthControlsCode = `<Calendar navigation="controls" />`;

const rangeSelectionCode = `<Calendar
  selection="range"
  onRangeSelect={(range) => console.log(range)}
/>`;

const propsData = [
    { name: 'month', type: 'number', default: 'current month', description: '0-11 month index' },
    { name: 'year', type: 'number', default: 'current year', description: 'Four digit year' },
    { name: 'selectedDate', type: 'Date', default: '—', description: 'Currently selected date' },
    { name: 'selectedRange', type: '{ start?: Date; end?: Date }', default: '—', description: 'Currently selected range' },
    { name: 'weekStartsOn', type: '0 | 1', default: '0', description: 'Start of week (0=Sun, 1=Mon)' },
    { name: 'navigation', type: '"none" | "controls"', default: '"none"', description: 'Show month navigation controls' },
    { name: 'selection', type: '"single" | "range"', default: '"single"', description: 'Selection mode' },
    { name: 'onMonthChange', type: '(month: number, year: number) => void', default: '—', description: 'Callback when month changes' },
    { name: 'onSelect', type: '(date: Date) => void', default: '—', description: 'Called when a date is selected' },
    { name: 'onRangeSelect', type: '(range: { start?: Date; end?: Date }) => void', default: '—', description: 'Called when a range is selected' },
];

export function CalendarPage() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedRange, setSelectedRange] = useState<{ start?: Date; end?: Date }>({});

    return (
        <DocPage
            title="Calendar"
            level="molecule"
            description="Month grid for date selection with Aqua-styled chrome."
        >
            <DocSection title="Usage">
                <DocCode code={usageCode} />
            </DocSection>

            <DocSection title="Example">
                <DocPreview>
                    <Calendar
                        navigation="controls"
                        selectedDate={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </DocPreview>
            </DocSection>

            <DocSection title="Month Controls">
                <DocPreview>
                    <Calendar navigation="controls" />
                </DocPreview>
                <DocCode code={monthControlsCode} />
            </DocSection>

            <DocSection title="Range Selection">
                <DocPreview>
                    <Calendar selection="range" selectedRange={selectedRange} onRangeSelect={setSelectedRange} />
                </DocPreview>
                <DocCode code={rangeSelectionCode} />
            </DocSection>

            <DocSection title="Props">
                <DocPropsTable props={propsData} />
            </DocSection>
        </DocPage>
    );
}
