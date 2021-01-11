import React from 'react'
import './EventViewer.css'

export default function EventViewer({ event, handleClose, show }) {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className='modal modal-main'>
                <h4>{event.name}</h4>
                <p>{event.surname}</p>
                <button className="action-button" onClick={handleClose}>Delete</button>
                <button className="action-button" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}
