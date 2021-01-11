
import useCalendar from 'hooks/useCalendar';
import React, { useState } from 'react';
import './EventViewer.css';


export default function EventCreator({ selectedDay = 0, handleClose, show }) {
    const { calendar } = useCalendar()
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name && surname) {

            let store = localStorage.getItem('events')
                ? JSON.parse(localStorage.getItem('events'))
                : []

            let newEvent = new Promise((resolve, reject) => {
                let eventToStore = {
                    date: new Date(calendar.selectedYear,
                        calendar.selectedMonth - 1,
                        selectedDay),
                    name: name,
                    surname: surname
                }

                store.push(eventToStore)

                localStorage.setItem('events', JSON.stringify(store))
                resolve()
            })

            newEvent.then(() => {
                handleClose()
            })
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }

    return (
        <div className={showHideClassName}>
            <section className='modal modal-main'>
                <h4>Create event</h4>
                <form className="event-content" onSubmit={handleSubmit}>
                    <div>
                        <p>Name</p>
                        <input autoFocus="autoFocus" onChange={handleNameChange} placeholder="René.." type="text" ></input>
                    </div>
                    <div>
                        <p>Surname</p>
                        <input type="text" onChange={handleSurnameChange} placeholder="Descartes.."></input>
                    </div>
                    <div>
                        <button className="action-button" type="submit">Add</button>
                        <button className="action-button" onClick={handleClose}>Maybe later</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
