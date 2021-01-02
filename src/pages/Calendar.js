import Header from 'components/calendar/Header';
import Week from 'components/calendar/Week';
import React from 'react';

export default function Calendar() {

    const currentDate = new Date();

    const currentYear = currentDate.getUTCFullYear();
    const currentMonthNumber = currentDate.getUTCMonth() + 1;
    const currentDayNumber = currentDate.getUTCDate();

    const locale = 'en'

    const intlForMonths = new Intl.DateTimeFormat(locale, { month: 'long' })

    const months = [...Array(12).keys()]

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

    return (
        <section className="calendar-container">
            <Header month={calendar[currentMonthNumber - 1].monthName} year={currentYear} />
            <Week calendar={calendar} month={currentMonthNumber} />
        </section>
    );
}