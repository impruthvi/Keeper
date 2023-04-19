import { combineReducers } from 'redux';
import { noteReducer } from './note/note.reducer';

export const rootReducer = combineReducers({
  note: noteReducer,
});
