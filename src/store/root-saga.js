import { all, call } from 'redux-saga/effects';
import { noteSagas } from './note/note.saga';


export function* rootSaga(){
    yield all([call(noteSagas)])
}