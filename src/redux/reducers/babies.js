const babiesReducer = (state = 2, action) => {
    switch (action.type) {
        case 'BABIES_INCREMENT':
            return state + 1;   
        case 'BABIES_DECREMENT':
            if(state > 0) {
                return state - 1; 
            } else {
                return state;
            }    
        default:
            return state;
    }
}

export default babiesReducer;