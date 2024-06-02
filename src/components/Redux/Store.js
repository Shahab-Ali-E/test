import {configureStore} from '@reduxjs/toolkit'
import RootReducer from './RootReducer'
import createSagaMiddleware from 'redux-saga'

import {SagaAladanData} from './Saga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer:RootReducer,
    middleware:()=>[sagaMiddleWare]
});

sagaMiddleWare.run(SagaAladanData);
export default store;