import React from 'react'
import './Button.css'

export default function Button({ onClick, text }) {

    return (
        <button className='action-button' onClick={onClick}>
            {text}
        </button>
    )
}