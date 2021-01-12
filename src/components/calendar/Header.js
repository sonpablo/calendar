import Actions from 'components/calendar/Actions';
import useCalendar from 'hooks/useCalendar';
import React from 'react';
import './Header.css';

export default function Header() {

    const { calendar } = useCalendar()
    const calendarInfo = calendar.info[calendar.selectedMonth]
    const title = `${calendarInfo ? calendarInfo.monthName : ''} ${calendar.selectedYear}`

    return (
        <header className="header-container">
            <h1>{title}</h1>
            <Actions />
        </header>
    )
}
