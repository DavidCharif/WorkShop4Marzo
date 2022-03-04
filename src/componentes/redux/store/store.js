import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import { reducerRegister } from '../reducers/reducerRegister';



const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    register: reducerRegister,
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)