import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  fetchNoteFailed,
  fetchNoteSuccess,
} from "./note.action";
import { NOTE_ACTION_TYPE } from "./note.types";
import { getAllNotes } from "../../lib/api";


export function* fetchNotesAsync() {
    try {
      const categoriesArray = yield call(getAllNotes);
      yield put(fetchNoteSuccess(categoriesArray));
    } catch (error) {
      yield put(fetchNoteFailed(error));
    }
  }


export function* onFetchNotes() {
    yield takeLatest(
      NOTE_ACTION_TYPE.FETCH_NOTE_START,
      fetchNotesAsync
    );
  }

  export function* onAddNote() {
    yield takeLatest(
      NOTE_ACTION_TYPE.FETCH_NOTE_START,
      fetchNotesAsync
    );
  }

export function* noteSagas() {
  yield all([
      call(onFetchNotes),
  ]);
}
