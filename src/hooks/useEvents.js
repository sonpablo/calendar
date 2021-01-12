import Context from 'context/EventsContext'
import { useContext, useEffect, useState } from 'react'

export default function useEvents(selectedMonth) {
    const { events, dispatch } = useContext(Context)
    const [eventsInMonth, setEventsInMonth] = useState([])

    useEffect(() => {
        setEventsInMonth(events.filter(event => new Date(event.date).getMonth() === selectedMonth))
    }, [events, selectedMonth])


    return { dispatch, eventsInMonth }
}