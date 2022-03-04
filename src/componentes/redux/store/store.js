import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import { loginReducer } from '../reducers/loginReducer';
import { usersReducers } from '../reducers/usersReducer';

import { reducerRegister } from '../reducers/reducerRegister';



const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    register: reducerRegister,
    login: loginReducer,
    users: usersReducers
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)