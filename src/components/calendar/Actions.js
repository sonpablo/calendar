import Button from 'components/controls/Button'
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
            <Button onClick={handelPreviousMonth} text={'◄'} />
            <Button onClick={handelToDay} text={'Today'} />
            <Button onClick={handelNextMonth} text={'►'} />
        </section>
    )
}