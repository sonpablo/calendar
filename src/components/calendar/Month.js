import Day from 'components/calendar/Day'
import WeekHeader from 'components/calendar/WeekHeader'
import useCalendar from 'hooks/useCalendar'
import React from 'react'
import './Month.css'

export default function Month({ currentDay }) {
    const { calendar } = useCalendar()

    if (calendar.currentDay === 0)
        return <></>

    const getMonthDays = (month) => {
        const days = [...Array(calendar.info[month - 1].daysOfMonth).keys()]
        const startsOn = calendar.info[month - 1].startsOn + 1

        return days.map(day => {
            const dayNumber = day + 1;

            let dayProps = {
                currentDay: calendar.currentDay,
                dayNumber,
                key: dayNumber
            }

            if (day === 0) {
                dayProps.isFirstDay = true
                dayProps.startsOn = startsOn
            }

            return (
                <Day {...dayProps}>
                    {dayNumber}
                </Day>
            )
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
