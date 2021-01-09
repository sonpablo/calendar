import React from 'react'
import './EventViewer.css'

export default function Event({ handleClose, show }) {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className='modal modal-main'>
                <h4>Create event</h4>
                <section className="event-content">
                    <div>
                        <p>Name</p>
                        <input autofocus="autofocus" placeholder="René.." type="text" ></input>
                    </div>
                    <div>
                        <p>Surname</p>
                        <input type="text" placeholder="Descartes.."></input>
                    </div>
                    <button onClick={handleClose}>Click me!</button>
                </section>
            </section>
        </div>
    )
}
