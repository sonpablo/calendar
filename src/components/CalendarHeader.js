import React from 'react'
import './CalendarHeader.css'

export default function CalendarHeader({ month, year }) {

    const title = `${month} ${year}`
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}