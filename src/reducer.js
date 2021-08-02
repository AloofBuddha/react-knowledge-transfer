import { fromJS } from 'immutable';
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    FETCH_DOG_IMAGE,
    FETCH_DOG_IMAGE_SUCCESS
} from './actions';

const initialState = fromJS({
    counterValue: 0,
    dogImage: {
        isLoading: true,
        results: null
    }
});
  

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state.set('counterValue', state.get('counterValue') + 1);
        
        case DECREMENT_COUNTER:
            return state.set('counterValue', state.get('counterValue') - 1);
    
        case FETCH_DOG_IMAGE:
            return state.setIn(['dogImage', 'isLoading'], true)
                .setIn(['dogImage', 'results'], null);

        case FETCH_DOG_IMAGE_SUCCESS:
            return state.setIn(['dogImage', 'isLoading'], false)
                .setIn(['dogImage', 'results'], action.results);

        default:
            return state;
    }
}

export default rootReducer;