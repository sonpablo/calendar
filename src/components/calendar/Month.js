import WeekHeader from 'components/calendar/WeekHeader'
import Day from 'components/calendar/Day'
import React from 'react'
import useCalendar from 'hooks/useCalendar'
import './Month.css'

export default function Month({ currentDay }) {
    const { calendar } = useCalendar()

    if (calendar.currentDay === 0) return <></>

    const getMonthDays = (month) => {
        debugger
        const days = [...Array(calendar.info[month - 1].daysOfMonth).keys()]
        const startOn = calendar.info[month - 1].startsOn + 1

        return days.map(day => {
            return day === 0
                ? <Day currentDay={calendar.currentDay} dayNumber={day + 1} isFirstDay={true} key={day} startOn={startOn}> {day + 1}</Day>
                : <Day currentDay={calendar.currentDay} dayNumber={day + 1} key={day + 1}  > {day + 1}</Day>
        })
    }

    return (
        <div className="month-container">
            <WeekHeader />
            <ol className="list-days">
                {getMonthDays(calendar.selectedMonth)}
            </ol>
        </div>
    )
}