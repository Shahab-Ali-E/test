import {ADD_STORE_DATA  , REMOVE_STORE_DATA} from './Constants'

export const addToCart = (data)=>{
    return{
        type:ADD_STORE_DATA,
        payload:data
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_STORE_DATA,
        payload: id,
    };
};
