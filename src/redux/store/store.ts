// Redux
import { createStore, applyMiddleware } from 'redux';
// Middleware
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// Reducer
import rootReducer from '../reducers';

export const createCustomStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk, ReduxLogger))
}
