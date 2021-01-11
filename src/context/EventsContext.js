import React, { useReducer } from 'react'
import { calendarReducer } from 'reducers/calendarReducer'

const Context = React.createContext({})

export function EventsContext({ children }) {

    const [events, dispatch] = useReducer(calendarReducer, [])

    return (
        <Context.Provider value={{
            events,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
