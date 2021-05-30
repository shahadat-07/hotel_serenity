const departureReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_DEPARTURE_DATE':
            return action.payload;      
        default:
            return state;
    }
}

export default departureReducer;