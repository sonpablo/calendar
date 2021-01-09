import EventViewer from 'components/EventViewer'
import Event from 'components/Event'

import React, { useState } from 'react'
import './Day.css'

export default function Day({ dayNumber, isCurrentDate = false, isFirstOfTheMonth = false, startsOn = 0 }) {

    const [createEvent, setCreateEvent] = useState(false)
    const [showEvent, setShowEvent] = useState(false)


    const styleFirstDayStart = { "--first-day-start": startsOn }

    const classNameFirstDay = isFirstOfTheMonth ? 'day-item first-day' : 'day-item'

    const classNameDayNumber = dayNumber && isCurrentDate
        ? "day-number current-day"
        : "day-number"


    const handleEventCreate = () => {
        setCreateEvent(!createEvent)
    }

    const handleEventViewer = () => {
        setShowEvent(!showEvent)
    }

    const renderEvent = createEvent && <Event handleClose={handleEventCreate} show={createEvent} />

    const renderEventViewer = showEvent && <EventViewer handleClose={handleEventViewer} show={showEvent} />

    return (
        <li className={classNameFirstDay} style={styleFirstDayStart}>
            <p className={classNameDayNumber} onClick={handleEventCreate}>{dayNumber}</p>
            <div className="days-events-container">
                <p className="days-events" onClick={handleEventViewer}>
                    PR
                </p>

            </div>
            {renderEvent}
            {renderEventViewer}
        </li>
    )
}
