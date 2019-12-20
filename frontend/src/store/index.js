import {combineReducers, createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

// importing the reducers.
import Contacts from './contacts';

const enhancers = [];


if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

/**
 * Combining the reducers.
 *
 * @type {Reducer<unknown>}
 */
const reducers = combineReducers({
    Contacts
});
/**
 * @return ReduxStore
 */
export default createStore(
    reducers,
    applyMiddleware(thunk),
);
