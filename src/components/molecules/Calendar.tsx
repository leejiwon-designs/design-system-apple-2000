import type { HTMLAttributes } from 'react';
import { useState } from 'react';
import { Icon } from '../atoms';
import './Calendar.css';

type WeekStart = 0 | 1; // 0 = Sunday, 1 = Monday

interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    month?: number; // 0-11
    year?: number;
    selectedDate?: Date;
    selectedRange?: { start?: Date; end?: Date };
    weekStartsOn?: WeekStart;
    navigation?: 'none' | 'controls';
    selection?: 'single' | 'range';
    onMonthChange?: (month: number, year: number) => void;
    onSelect?: (date: Date) => void;
    onRangeSelect?: (range: { start?: Date; end?: Date }) => void;
}

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const weekLabels: Record<WeekStart, string[]> = {
    0: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    1: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

function isSameDay(a: Date, b: Date) {
    return (
        a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate()
    );
}

function isBefore(a: Date, b: Date) {
    return a.getTime() < b.getTime();
}

function isWithinRange(date: Date, start?: Date, end?: Date) {
    if (!start || !end) return false;
    const time = date.getTime();
    return time >= start.getTime() && time <= end.getTime();
}

export function Calendar({
    month,
    year,
    selectedDate,
    selectedRange,
    weekStartsOn = 0,
    navigation = 'none',
    selection = 'single',
    onMonthChange,
    onSelect,
    onRangeSelect,
    className = '',
    ...props
}: CalendarProps) {
    const today = new Date();
    const isControlledMonth = month !== undefined && year !== undefined;
    const [internalMonth, setInternalMonth] = useState(month ?? today.getMonth());
    const [internalYear, setInternalYear] = useState(year ?? today.getFullYear());
    const activeMonth = isControlledMonth ? month : internalMonth;
    const activeYear = isControlledMonth ? year : internalYear;

    const [internalRange, setInternalRange] = useState<{ start?: Date; end?: Date } | undefined>(undefined);
    const activeRange = selectedRange ?? internalRange;

    const firstOfMonth = new Date(activeYear, activeMonth, 1);
    const lastOfMonth = new Date(activeYear, activeMonth + 1, 0);
    const daysInMonth = lastOfMonth.getDate();

    const firstDay = firstOfMonth.getDay();
    const offset = (firstDay - weekStartsOn + 7) % 7;

    const days: (number | null)[] = [];
    for (let i = 0; i < offset; i += 1) days.push(null);
    for (let day = 1; day <= daysInMonth; day += 1) days.push(day);

    const weeks: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    const label = `${monthNames[activeMonth]} ${activeYear}`;

    const handleNavigate = (delta: number) => {
        let nextMonth = activeMonth + delta;
        let nextYear = activeYear;
        if (nextMonth > 11) {
            nextMonth = 0;
            nextYear += 1;
        } else if (nextMonth < 0) {
            nextMonth = 11;
            nextYear -= 1;
        }
        if (onMonthChange) onMonthChange(nextMonth, nextYear);
        if (!isControlledMonth) {
            setInternalMonth(nextMonth);
            setInternalYear(nextYear);
        }
    };

    const handleSelect = (date: Date) => {
        if (selection === 'range') {
            const start = activeRange?.start;
            const end = activeRange?.end;
            let nextRange: { start?: Date; end?: Date };

            if (!start || (start && end)) {
                nextRange = { start: date, end: undefined };
            } else if (isBefore(date, start)) {
                nextRange = { start: date, end: start };
            } else {
                nextRange = { start, end: date };
            }

            if (onRangeSelect) onRangeSelect(nextRange);
            if (!selectedRange) setInternalRange(nextRange);
            return;
        }

        onSelect?.(date);
    };

    return (
        <div className={`calendar ${className}`} {...props}>
            <div className="calendar__header">
                {navigation === 'controls' && (
                    <button
                        type="button"
                        className="calendar__nav calendar__nav--prev"
                        aria-label="Previous month"
                        onClick={() => handleNavigate(-1)}
                    >
                        <Icon name="arrow-right" size="sm" style={{ transform: 'rotate(180deg)' }} />
                    </button>
                )}
                <span className="calendar__title">{label}</span>
                {navigation === 'controls' && (
                    <button
                        type="button"
                        className="calendar__nav calendar__nav--next"
                        aria-label="Next month"
                        onClick={() => handleNavigate(1)}
                    >
                        <Icon name="arrow-right" size="sm" />
                    </button>
                )}
            </div>
            <div className="calendar__weekdays">
                {weekLabels[weekStartsOn].map((day) => (
                    <span key={day} className="calendar__weekday">{day}</span>
                ))}
            </div>
            <div className="calendar__grid" role="grid" aria-label={label}>
                {weeks.flatMap((week, rowIndex) =>
                    week.map((day, colIndex) => {
                        if (!day) {
                            return <span key={`empty-${rowIndex}-${colIndex}`} className="calendar__cell calendar__cell--empty" />;
                        }

                        const date = new Date(activeYear, activeMonth, day);
                        const isToday = isSameDay(date, today);
                        const isSelected = selection === 'single'
                            ? (selectedDate ? isSameDay(date, selectedDate) : false)
                            : false;
                        const isRangeStart = selection === 'range' && activeRange?.start ? isSameDay(date, activeRange.start) : false;
                        const isRangeEnd = selection === 'range' && activeRange?.end ? isSameDay(date, activeRange.end) : false;
                        const isInRange = selection === 'range' && isWithinRange(date, activeRange?.start, activeRange?.end);

                        return (
                            <button
                                key={day}
                                type="button"
                                className={[
                                    'calendar__cell',
                                    isToday && 'calendar__cell--today',
                                    isSelected && 'calendar__cell--selected',
                                    isRangeStart && 'calendar__cell--range-start',
                                    isRangeEnd && 'calendar__cell--range-end',
                                    isInRange && 'calendar__cell--in-range',
                                ].filter(Boolean).join(' ')}
                                onClick={() => handleSelect(date)}
                                aria-selected={isSelected || undefined}
                            >
                                {day}
                            </button>
                        );
                    })
                )}
            </div>
        </div>
    );
}

Calendar.displayName = 'Calendar';
