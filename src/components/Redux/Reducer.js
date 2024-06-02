import {GET_AlADAN_DATA_SHAFI , GET_AlADAN_DATA_HANFI} from "./Constant";

const initialState = 0

export function Reducer(state = initialState, action) {
    switch(action.type) {
        case GET_AlADAN_DATA_SHAFI:
            return [action.payload];

        case GET_AlADAN_DATA_HANFI:
            return [action.payload];
            
        default:
            return state;
    }
}