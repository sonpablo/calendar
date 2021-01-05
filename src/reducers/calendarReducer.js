
const currentDate = new Date();

const dateCurrentYear = currentDate.getUTCFullYear()
const dateCurrentMonthNumber = currentDate.getUTCMonth() + 1
const dateCurrentDayNumber = currentDate.getUTCDate()
const locale = 'en'
const intlForMonths = new Intl.DateTimeFormat(locale, { month: 'long' })
const months = [...Array(12).keys()]

export const calendarReducer = (state, action) => {
    let month = state.selectedMonth
    let year = state.selectedYear
    debugger
    switch (action.type) {
        case 'INIT':
            return {
                info: getCalendarInformation(dateCurrentYear),
                currentDay: dateCurrentDayNumber,
                currentMonth: dateCurrentMonthNumber,
                currentYear: dateCurrentYear,
                selectedMonth: dateCurrentMonthNumber,
                selectedYear: dateCurrentYear

            }
        case 'NEXT_MONTH':
            if (state.month === 12) {
                month = 1
                year = state.selectedYear + 1
            } else {
                month = state.selectedMonth + 1
            }

            return {
                info: getCalendarInformation(year),
                currentDay: dateCurrentDayNumber,
                currentMonth: dateCurrentMonthNumber,
                currentYear: dateCurrentYear,
                selectedMonth: month,
                selectedYear: year

            }

        case 'PREVIOUS_MONTH':
            if (state.month === 1) {
                month = 12
                year = state.selectedYear - 1
            } else {
                month = state.selectedMonth - 1
            }

            return {
                info: getCalendarInformation(year),
                currentDay: dateCurrentDayNumber,
                currentMonth: dateCurrentMonthNumber,
                currentYear: dateCurrentYear,
                selectedMonth: month,
                selectedYear: year

            }
        default:
            return state

    }
}

function getCalendarInformation(year) {
    const calendarInformation = months.map((monthIndex) => {
        const monthName = intlForMonths.format(new Date(dateCurrentYear, monthIndex))
        const nextMonthIndex = (monthIndex + 1) % 12
        const daysOfMonth = new Date(dateCurrentYear, nextMonthIndex, 0).getDate()
        const startsOn = new Date(year, monthIndex, 1).getDay()

        return {
            daysOfMonth,
            monthName,
            startsOn
        }
    })

    return calendarInformation

}

