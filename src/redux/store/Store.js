import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import LoginReducer from "../reducers/LoginReducer";
import ErrorReducer from '../reducers/ErrorReducer';
import MoviesReducer from '../reducers/MoviesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    session: LoginReducer,
    error: ErrorReducer,
    movies: MoviesReducer
})

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;