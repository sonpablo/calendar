import useCalendar from 'hooks/useCalendar'
import React from 'react'
import './Actions.css'

export default function Actions() {

    const { dispatch } = useCalendar()

    const handelPreviousMonth = () => {
        dispatch({ type: 'PREVIOUS_MONTH' })
    }

    const handelToDay = () => {
        dispatch({ type: 'INIT' })
    }

    const handelNextMonth = () => {
        dispatch({ type: 'NEXT_MONTH' })
    }

    return (
        <section>
            <button className='action-button' onClick={handelPreviousMonth}>◄</button>
            <button className='action-button' onClick={handelToDay}>Today</button>
            <button className='action-button' onClick={handelNextMonth}>►</button>
        </section>
    )
}