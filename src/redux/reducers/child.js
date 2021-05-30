const childReducer = (state = 2, action) => {
    switch (action.type) {
        case 'CHILD_INCREMENT':
            return state + 1;
        case 'CHILD_DECREMENT':
            if (state > 0) {
                return state - 1;
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default childReducer;