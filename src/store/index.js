import { combineReducers } from 'redux';
import { searchReducer } from './reducers/searchReducer';
import { songReducer } from './reducers/songReducer';

export const rootReducer = combineReducers({search: searchReducer, song: songReducer});