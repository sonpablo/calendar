import React from 'react'
import './EventViewer.css'

export default function EventViewer({ handleClose, show }) {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className='modal modal-main'>
                <h4>Date taked</h4>
                <p>Clinton Barton</p>
                <button onClick={handleClose}>Click me!</button>
            </section>
        </div>
    )
}
