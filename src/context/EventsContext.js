import React, { createContext, useEffect, useReducer } from 'react';
import { eventsReducer } from 'reducers/eventsReducer';

const Context = createContext({})

export function EventsContext({ children }) {

    const [events, dispatch] = useReducer(eventsReducer, [], () => {
        const stored = localStorage.getItem('events');
        return stored ? JSON.parse(stored)
            : []
    })

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

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
