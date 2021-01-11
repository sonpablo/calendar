import { useState, useEffect } from 'react'
import useCalendar from 'hooks/useCalendar'

export default function useEvents() {
    const { calendar } = useCalendar()
    const [events, setEvents] = useState([])

    let store = localStorage.getItem('events')
        ? JSON.parse(localStorage.getItem('events'))
        : []

    useEffect(() => {
        if (store.lentgh === 0) return

    
        const date = new Date(calendar.selectedYear,
            calendar.selectedMonth - 1,
            1)
        const eventsFiltered = store.filter(event => new Date(event.date).getYear() === date.getYear()
            && new Date(event.date).getMonth() === date.getMonth())

        setEvents(eventsFiltered)

    }, [calendar])

    return { events }

}