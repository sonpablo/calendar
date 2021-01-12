import Day from 'components/calendar/Day'
import WeekHeader from 'components/calendar/WeekHeader'
import useCalendar from 'hooks/useCalendar'
import useEvents from 'hooks/useEvents'
import React from 'react'
import './Month.css'

export default function Month({ currentDay }) {

    const { calendar } = useCalendar()
    const { eventsInMonth } = useEvents(calendar.selectedMonth)

    if (calendar.currentDay === 0) return <></>

    const getMonthDays = (month) => {

        const days = [...Array(calendar.info[month].daysOfMonth).keys()]
        const startsOn = calendar.info[month].startsOn + 1
        const isCurrentMonth = calendar.selectedYear === calendar.currentYear
            && calendar.selectedMonth === calendar.currentMonth

        return days.map(day => {
            const dayNumber = day + 1;
            const date = new Date(calendar.selectedYear,
                calendar.selectedMonth,
                dayNumber)

            const eventsFiltered = eventsInMonth.filter(event => new Date(event.date).getDate() === date.getDate())

            return (
                <Day dayNumber={dayNumber}
                    events={eventsFiltered}
                    isCurrentDate={isCurrentMonth && calendar.currentDay === dayNumber}
                    isFirstOfTheMonth={dayNumber === 1}
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
