import { ADD_STORE_DATA, REMOVE_STORE_DATA } from './Constants';

const initialState = [];

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STORE_DATA:
            return [
                ...state,
                action.payload,
            ];
        case REMOVE_STORE_DATA:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
