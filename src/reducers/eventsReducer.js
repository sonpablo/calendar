
import { v4 as uuidv4 } from 'uuid';

export const eventsReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_EVENT':
            return [...state, {
                date: action.event.date,
                name: action.event.name,
                surname: action.event.surname,
                id: uuidv4()
            }]
        case 'REMOVE_EVENT':
            return state.filter(event => event.id !== action.id)
        default:
            return state
    }
}
