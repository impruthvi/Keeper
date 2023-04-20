import { createAction } from "../../utils/reducer/reducer.util";
import { NOTE_ACTION_TYPE } from "./note.types";

export const removeNote = (notes, id) => {
  const filteredNotes = notes.filter((note) => note._id !== id);
  return createAction(NOTE_ACTION_TYPE.REMOVE_NOTE, filteredNotes);
};

export const fetchNoteStart = () =>
  createAction(NOTE_ACTION_TYPE.FETCH_NOTE_START);

export const fetchNoteSuccess = (NoteArray) =>
  createAction(NOTE_ACTION_TYPE.FETCH_NOTE_SUCCESS, NoteArray);

export const fetchNoteFailed = (error) =>
  createAction(NOTE_ACTION_TYPE.FETCH_NOTE_FAILED, error);

export const addNoteStart = ({ note, notes }) => {
  const newNotesArray = [note, ...notes];
  return createAction(NOTE_ACTION_TYPE.ADD_NOTE_START, newNotesArray);
};

export const addNoteFailed = (error) =>
  createAction(NOTE_ACTION_TYPE.ADD_NOTE_FAILED, error);

export const removeNoteStart = ({ notes, id }) => {
  const filteredNotes = notes.filter((note) => note._id !== id);
  return createAction(NOTE_ACTION_TYPE.REMOVE_NOTE_START, {
    notes: filteredNotes,
    id,
  });
};

export const removeNoteFailed = (error) =>
  createAction(NOTE_ACTION_TYPE.REMOVE_NOTE_FAILED, error);
