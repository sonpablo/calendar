import React from 'react'
import './EventViewer.css'

export default function Event({ handleClose, show }) {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className='modal modal-main'>
                <h4>Create event</h4>
                <div className="event-content">
                    <div>
                        <p>Name</p>
                        <input autofocus="autofocus" placeholder="René.." type="text" ></input>
                    </div>
                    <div>
                        <p>Surname</p>
                        <input type="text" placeholder="Descartes.."></input>
                    </div>
                    <div>
                        <button className="action-button" onClick={handleClose}>Add</button>
                        <button className="action-button" onClick={handleClose}>Maybe later</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
