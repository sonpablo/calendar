import React from 'react'
import './CalendarEvent.css'

export default function CalendarEvent({ handleClose, show }) {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className='modal modal-main'>
                <p>I´m a modal</p>
                <button onClick={handleClose}>Click me!</button>
            </section>
        </div>
    )
}