import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleWare from 'redux-saga'

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleWare();

export default function configureStore() {
    const store = createStore(
        rootReducer, 
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
