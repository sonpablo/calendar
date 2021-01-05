import { CalendarContext } from 'context/CalendarContext';
import Calendar from 'pages/Calendar';

export default function App() {
    return (
        <CalendarContext>
            <Calendar />
        </CalendarContext>
    );
}