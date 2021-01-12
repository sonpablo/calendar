import EventViewer from 'components/events/EventViewer';
import React, { useState } from 'react';
import './EventViewer.css';

export default function Event(event) {

    const [showEvent, setShowEvent] = useState(false)

    const handleEventViewer = () => {
        setShowEvent(!showEvent)
    }
    const renderEventViewer = showEvent && <EventViewer event={event.event} handleClose={handleEventViewer} show={showEvent} />

    return (
        <>
            <p className="days-events" onClick={handleEventViewer}>
                {event.event['name'].charAt(0).toUpperCase() + event.event['surname'].charAt(0).toUpperCase()}
            </p>
            {renderEventViewer}
        </>
    )
}