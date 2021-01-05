import Day from 'components/calendar/Day'
import WeekHeader from 'components/calendar/WeekHeader'
import useCalendar from 'hooks/useCalendar'
import React from 'react'
import './Month.css'

export default function Month({ currentDay }) {
    const { calendar } = useCalendar()

    if (calendar.currentDay === 0) return <></>

    const getMonthDays = (month) => {

        const days = [...Array(calendar.info[month - 1].daysOfMonth).keys()]
        const startsOn = calendar.info[month - 1].startsOn + 1
        const isCurrentDate = calendar.selectedYear === calendar.currentYear
            && calendar.selectedMonth === calendar.currentMonth

        return days.map(day => {
            const dayNumber = day + 1;

            return (
                <Day currentDay={calendar.currentDay}
                    dayNumber={dayNumber}
                    isCurrentDate={isCurrentDate}
                    isFirstDay={dayNumber === 1}
                    key={day}
                    startsOn={startsOn}
                />
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
