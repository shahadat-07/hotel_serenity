const hotelReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_HOTEL':
            return action.payload;      
        default:
            return state;
    }
}

export default hotelReducer;