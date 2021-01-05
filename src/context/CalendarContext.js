import React, { useReducer } from 'react'
import { calendarReducer } from 'reducers/calendarReducer'

const Context = React.createContext({})

export function CalendarContext({ children }) {

    const [calendar, dispatch] = useReducer(calendarReducer, {
        info: {},
        currentDay: 0,
        currentMonth: 0,
        currentYear: 0,
        selectedMonth: 0,
        selectedYear: 0
    })

    return <Context.Provider value={{
        calendar,
        dispatch
    }}>
        {children}
    </Context.Provider>
}
export default Context