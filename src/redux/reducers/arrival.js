const arrivalReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_ARRIVAL_DATE':
            return action.payload;      
        default:
            return state;
    }
}

export default arrivalReducer;