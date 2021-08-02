// ACTION TYPES
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const FETCH_DOG_IMAGE = 'FETCH DOG IMAGE';
export const FETCH_DOG_IMAGE_SUCCESS = 'FETCH_DOG_IMAGE_SUCCESS';

//ACTIONS
export function incrementCounter() {
    return { 
        type: INCREMENT_COUNTER
    }
}

export function decrementCounter() {
    return { 
        type: DECREMENT_COUNTER
    }
}

export function fetchDogImage() {
    return { 
        type: FETCH_DOG_IMAGE
    }
}
