import React from 'react';
import './Header.css'
import useCalendar from 'hooks/useCalendar'

export default function Header() {

    const { calendar } = useCalendar()

    console.log(calendar)
    debugger
    const title = `${calendar.info[calendar.selectedMonth - 1].monthName} ${calendar.selectedYear}`
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}