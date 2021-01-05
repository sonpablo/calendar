import Calendar from 'pages/Calendar';
import { CalendarContext } from 'context/CalendarContext'
function App() {

    return (
        <CalendarContext>
            <Calendar />
        </CalendarContext>
    );
}

export default App;
