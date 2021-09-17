const initialState = [
    {
        id: 0,
        name: 'Danny Wu',
        number: 1234567890,
        email: 'hiunji64@gmail.com'
    },
    {
        id: 1,
        name: 'test Name',
        number: 789456123,
        email: '123@gmail.com'
    }
]
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...state, action.payload]
        case "UPDATE_CONTACT":
            // const splitState = state.filter(contact => contact.id !== action.payload.id)
            // return [...splitState, action.payload]
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            return [...updateState]
        case "DELETE_CONTACT":
            const filterState = state.filter(contact => contact.id !== action.payload)
            return [...filterState]
        default:
            return state
    }
}
export default contactReducer