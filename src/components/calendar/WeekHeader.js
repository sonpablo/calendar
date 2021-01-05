import React from 'react';
import './WeekHeader.css';

const weekDays = new Array(7);
weekDays[0] = "Sunday";
weekDays[1] = "Monday";
weekDays[2] = "Tuesday";
weekDays[3] = "Wednesday";
weekDays[4] = "Thursday";
weekDays[5] = "Friday";
weekDays[6] = "Saturday";

export default function WeekHeader() {

    const getWeekDays = () => {
        return weekDays.map(dayIndex => {
            return <li className="weekday" key={dayIndex}>{dayIndex}</li>
        })
    }

    return (
        <ol className="list-days-name">
            {getWeekDays()}
        </ol>
    )
}
