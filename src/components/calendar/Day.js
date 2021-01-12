import Event from 'components/events/Event'
import EventCreator from 'components/events/EventCreator'
import React, { useState } from 'react'
import './Day.css'

export default function Day({ dayNumber, events = [], isCurrentDate = false, isFirstOfTheMonth = false, startsOn = 0 }) {

    const [createEvent, setCreateEvent] = useState(false)

    const styleFirstDayStart = { "--first-day-start": startsOn }

    const classNameFirstDay = isFirstOfTheMonth ? 'day-item first-day' : 'day-item'

    const classNameDayNumber = dayNumber && isCurrentDate
        ? "day-number current-day "
        : "day-number"

    const handleEventCreate = () => {
        setCreateEvent(!createEvent)
    }

    const renderEventCreator = createEvent && <EventCreator handleClose={handleEventCreate} selectedDay={dayNumber} show={createEvent} />

    const renderDatedEvents = events.length > 0
        && events.map((event, index) =>
            <Event key={index} event={event} />
        )

    return (
        <li className={classNameFirstDay} style={styleFirstDayStart}>

            <div className="header-section hover-to-show-action" onClick={handleEventCreate}>
                <span className="hover-to-show">+</span>
                <p className={classNameDayNumber} >{dayNumber}</p>
            </div>
            <div className="days-events-container">
                {renderDatedEvents}
            </div>
            {renderEventCreator}
        </li>
    )
}
