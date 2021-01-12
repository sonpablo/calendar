import { CalendarContext } from 'context/CalendarContext';
import Calendar from 'pages/Calendar';
import React from 'react';

export default function App() {

    return (
        <CalendarContext>
            <Calendar />
        </CalendarContext>
    );
}