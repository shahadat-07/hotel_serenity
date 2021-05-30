const adultsReducer = (state = 2, action) => {
    switch (action.type) {
        case 'ADULTS_INCREMENT':
            return state + 1;
        case 'ADULTS_DECREMENT':
            if(state > 0) {
                return state - 1; 
            } else {
                return state;
            } 
        default:
            return state;
    }
}

export default adultsReducer;