import { createAction } from "../../utils/reducer/reducer.util";
import { NOTE_ACTION_TYPE } from "./note.types";

export const addNewNote = (notes, newNote) => {
  const newNotesArray = [newNote, ...notes];
  return createAction(NOTE_ACTION_TYPE.ADD_NOTE, newNotesArray);
};

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

