export const incrementAdults = () => {
    return {
        type: 'ADULTS_INCREMENT'
    }
};

export const decrementAdults = () => {
    return {
        type: 'ADULTS_DECREMENT'
    }
};

export const incrementChild = () => {
    return {
        type: 'CHILD_INCREMENT'
    }
};

export const decrementChild = () => {
    return {
        type: 'CHILD_DECREMENT'
    }
};
export const incrementBabies = () => {
    return {
        type: 'BABIES_INCREMENT'
    }
};

export const decrementBabies = () => {
    return {
        type: 'BABIES_DECREMENT'
    }
};

export const setLocation = (location) => {
    return {
        type: 'SET_LOCATION',
        payload: location
    }
};

export const setArrivalDate = (date) => {
    return {
        type: 'SET_ARRIVAL_DATE',
        payload: date
    }
}

export const setDepartureDate = (date) => {
    return {
        type: 'SET_DEPARTURE_DATE',
        payload: date
    }
};
export const setHotel = (data) => {
    return {
        type: 'SET_HOTEL',
        payload: data
    }
};
