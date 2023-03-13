import { combineReducers, legacy_createStore as createStore } from 'redux';
import createReducer from "./reducers/create-reducer";
import plantsReducer from "./reducers/plants-reducer";
import searchReducer from "./reducers/search-reducer";
import viewReducer from "./reducers/view-reducer";
import rarenessReducer from './reducers/rareness-reducer';
import locationsReducer from './reducers/locations-reducer';

let reducers = combineReducers({
 searchReducer,
 viewReducer,
 createReducer,
 plantsReducer,
 rarenessReducer,
 locationsReducer
})

let store = createStore(reducers)

window['store'] = store

export default store