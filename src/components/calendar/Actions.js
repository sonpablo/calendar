import useCalendar from 'hooks/useCalendar'
import React from 'react'

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
            <button onClick={handelPreviousMonth}>Previous</button>
            <button onClick={handelToDay}>To day</button>
            <button onClick={handelNextMonth}>Next</button>
        </section>
    )
}