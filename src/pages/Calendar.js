import Header from 'components/calendar/Header';
import Month from 'components/calendar/Month';
import { EventsContext } from 'context/EventsContext';
import useCalendar from 'hooks/useCalendar';
import React, { useEffect } from 'react';
import './Calendar.css';

export default function Calendar() {

    const { dispatch } = useCalendar()

    useEffect(() => {
        dispatch({ type: 'INIT' })
    }, [])

    return (
        <section className="calendar-container">
            <Header />
            <EventsContext>
                <Month />
            </EventsContext>
        </section>
    );
}
