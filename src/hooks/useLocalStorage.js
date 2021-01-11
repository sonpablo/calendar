import useCalendar from 'hooks/useCalendar';
import { useEffect, useState } from 'react';

export default function useLocalStorage() {
    const [event, setEvent] = useState(null)
    const { calendar } = useCalendar()
    const [pushed, setPushed] = useState(false)

    let stored = localStorage.getItem('events');
    let newStore = stored ? JSON.parse(stored) : []

    useEffect(() => {

        if (!event) return

        let pushEvent = new Promise((resolve, reject) => {
            let eventToStore = {
                date: new Date(calendar.selectedYear, calendar.selectedMonth, event.day),
                name: event.name,
                surname: event.surname
            }

            newStore.push(eventToStore)

            localStorage.setItem('events', JSON.stringify(newStore))
            resolve()
        })

        pushEvent.then(() => {
            setPushed(true)
        })

    }, [event])


    return { pushed, setEvent }
}

