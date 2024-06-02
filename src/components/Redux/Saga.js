import{GET_AlADAN_DATA_HANFI, GET_AlADAN_DATA_SHAFI, HANFI, SHAFI} from './Constant'
import {put, takeEvery} from 'redux-saga/effects'

//api 
import { aladanAPI } from '../Functions/aladanAPI';


function* getaAladanShafiData(action){
    //it will get the school=shafi data from API 
    const result = yield aladanAPI(action.payload);
    
    yield put({
        type:GET_AlADAN_DATA_SHAFI,
        payload:result.request._response
    })
    
}

function* getAladanHanfiData(action){
    //it will get the school=shafi data from API
    const result = yield aladanAPI(action.payload);
    yield put({
        type:GET_AlADAN_DATA_HANFI,
        payload :result.request._response
    })
    
}

export function* SagaAladanData(){
    yield takeEvery(SHAFI , getaAladanShafiData);
    yield takeEvery(HANFI , getAladanHanfiData);
}

