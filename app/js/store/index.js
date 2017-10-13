import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore() {
    const middleware = [thunk];
    let initialState = {};

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );

    return store;
}
