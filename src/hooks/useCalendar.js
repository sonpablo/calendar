import Context from 'context/CalendarContext'
import { useContext } from 'react'

export default function useCalendar() {
    const { calendar, dispatch } = useContext(Context)

    return { calendar, dispatch }
}
