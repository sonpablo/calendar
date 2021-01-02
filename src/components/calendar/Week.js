import WeekHeader from 'components/calendar/WeekHeader'
import Day from 'components/calendar/Day'
import React from 'react'
import './Week.css'

export default function Week({ calendar, month }) {

    const getMonthDays = (month) => {

        const days = [...Array(calendar[month - 1].daysOfMonth).keys()]
        const startOn = calendar[month - 1].startsOn + 1

        return days.map(day => {
            return day === 0
                ? <Day dayNumber={day + 1} isFirstDay={true} key={day} startOn={startOn}> {day + 1}</Day>
                : <Day dayNumber={day + 1} key={day + 1}  > {day + 1}</Day>
        })
    }

    return (
        <>
            <WeekHeader />
            <ol>
                {getMonthDays(month)}
            </ol>
        </>
    )
}