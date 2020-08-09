import { createStore } from 'redux';
import {combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cthuluReducer from './state/reducer';

const rootReducer = combineReducers({cthuluReducer});

const store = createStore(rootReducer, {}, composeWithDevTools());

export default store;