import CalendarDay from 'components/CalendarDay';
import CalendarHeader from 'components/CalendarHeader';
import React from 'react';
import './Calendar.css';

export default function Calendar() {

    const currentDate = new Date();

    const currentYear = currentDate.getUTCFullYear();
    const currentMonthNumber = currentDate.getUTCMonth() + 1;
    const currentDayNumber = currentDate.getUTCDate();

    const locale = 'en'

    const intlForMonths = new Intl.DateTimeFormat(locale, { month: 'long' })

    const months = [...Array(12).keys()]

    const weekDays = new Array(7);
    weekDays[0] = "Sunday";
    weekDays[1] = "Monday";
    weekDays[2] = "Tuesday";
    weekDays[3] = "Wednesday";
    weekDays[4] = "Thursday";
    weekDays[5] = "Friday";
    weekDays[6] = "Saturday";

    const calendar = months.map((monthIndex) => {
        const monthName = intlForMonths.format(new Date(currentYear, monthIndex))
        const nextMonthIndex = (monthIndex + 1) % 12
        const daysOfMonth = new Date(currentYear, nextMonthIndex, 0).getDate()
        const startsOn = new Date(currentYear, monthIndex, 1).getDay()

        return {
            daysOfMonth,
            monthName,
            startsOn
        }
    })

    const getWeekDays = () => {
        return weekDays.map(dayIndex => {
            return <li className="weekday" key={dayIndex}>{dayIndex}</li>
        })
    }

    const getMonthDays = (month) => {

        const days = [...Array(calendar[month - 1].daysOfMonth).keys()]
        const startOn = calendar[month - 1].startsOn + 1

        return days.map(day => {
            return day === 0
                ? <CalendarDay dayNumber={day + 1} isFirstDay={true} key={day} startOn={startOn}> {day + 1}</CalendarDay>
                : <CalendarDay dayNumber={day + 1} key={day + 1}  > {day + 1}</CalendarDay>
        })
    }
    console.log(calendar)
    return (
        <section className="calendar-container">
            <CalendarHeader month={calendar[currentMonthNumber - 1].monthName} year={currentYear} />
            <ol>
                {getWeekDays()}
                {getMonthDays(currentMonthNumber)}
            </ol>
        </section>
    );
}