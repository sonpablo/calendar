import useEvents from 'hooks/useEvents'
import React from 'react'
import './EventViewer.css'

export default function EventViewer({ event, handleClose, show }) {

    const { dispatch } = useEvents()

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch({
            type: 'REMOVE_EVENT',
            id: event.id
        })
    }

    return (
        <div className={showHideClassName}>
            <form className='modal modal-main'>
                <h4>{event.name}</h4>
                <p>{event.surname}</p>
                <button className="action-button"
                    onClick={handleDelete}
                    type="submit">Delete</button>
                <button className="action-button"
                    onClick={handleClose}>Close</button>
            </form>
        </div>
    )
}
