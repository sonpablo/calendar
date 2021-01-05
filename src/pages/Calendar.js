import Header from 'components/calendar/Header';
import Month from 'components/calendar/Month';
import useCalendar from 'hooks/useCalendar'
import React, { useEffect } from 'react';


export default function Calendar() {
    const { dispatch } = useCalendar()
    useEffect(() => {
        dispatch({ type: 'INIT' })
    }, [])


    return (
        <section className="calendar-container">
            <Header />
            <Month />
        </section>
    );
}