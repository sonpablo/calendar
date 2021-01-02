import React from 'react'
import './Header.css'

export default function Header({ month, year }) {

    const title = `${month} ${year}`
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}