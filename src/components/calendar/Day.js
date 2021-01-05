import Event from 'components/calendar/Event'
import React, { useState } from 'react'
import './Day.css'

export default function Day({ currentDay, dayNumber, isFirstDay = false, startsOn = 0 }) {

    const [showModal, setShowModal] = useState(false)

    const styleFirstDayStart = { "--first-day-start": startsOn }

    const classNameFirstDay = isFirstDay ? 'first-day' : ''

    const classNameDayNumber = currentDay === dayNumber ? "day-number current-day" : "day-number"

    const hanldeOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <li className={classNameFirstDay} style={styleFirstDayStart}>
            <p className={classNameDayNumber}>{dayNumber}</p>
            <div className="days-events-container">
                <p className="days-events" onClick={hanldeOpenModal}>
                    PR
                </p>
            </div>
            <Event handleClose={handleCloseModal} show={showModal} />
        </li>
    )
}
