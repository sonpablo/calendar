import React from 'react';
import './WeekHeader.css';

export default function WeekHeader() {
    const weekDays = [...Array(7).keys()];
    const locale = 'en-us'

    const intlForWeeks = new Intl.DateTimeFormat(locale, { weekday: 'short' })

    const weekDaysName = weekDays.map((dayIndex) =>
        intlForWeeks.format(new Date(2021, 7, dayIndex + 1))
    )

    const getWeekDays = () => {
        return weekDaysName.map(dayIndex => {
            return <li className="weekday" key={dayIndex}>{dayIndex}</li>
        })
    }

    return (
        <ol className="list-days-name">
            {getWeekDays()}
        </ol>
    )
}
