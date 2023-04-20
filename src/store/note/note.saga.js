import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  fetchNoteFailed,
  fetchNoteSuccess,
} from "./note.action";
import { NOTE_ACTION_TYPE } from "./note.types";
import { addNote, deleteSingleNote, getAllNotes } from "../../lib/api";

export function* addNotesAsync(action) {
  try {
    yield call(addNote, action.payload[0]);
  } catch (error) {
    yield put(fetchNoteFailed(error));
  }
}

export function* fetchNotesAsync() {
  try {
    const categoriesArray = yield call(getAllNotes);
    yield put(fetchNoteSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchNoteFailed(error));
  }
}

export function* removeNotesAsync(action) {
  try {
    yield call(deleteSingleNote, action.payload.id);
  } catch (error) {
    yield put(fetchNoteFailed(error));
  }
}

export function* onFetchNotes() {
  yield takeLatest(NOTE_ACTION_TYPE.FETCH_NOTE_START, fetchNotesAsync);
}

export function* onAddNote() {
  yield takeLatest(NOTE_ACTION_TYPE.ADD_NOTE_START, addNotesAsync);
}

export function* onDeleteNote() {
  yield takeLatest(NOTE_ACTION_TYPE.REMOVE_NOTE_START, removeNotesAsync);
}

export function* noteSagas() {
  yield all([call(onFetchNotes), call(onAddNote),call(onDeleteNote)]);
}
