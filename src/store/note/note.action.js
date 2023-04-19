import { createAction } from "../../utils/reducer/reducer.util";
import { NOTE_ACTION_TYPE } from "./note.types";

export const setAllNotes = (notes) =>
  createAction(NOTE_ACTION_TYPE.SET_ALL_NOTES, notes);

// export const addNewNote = (note) => createAction(NOTE_ACTION_TYPE.ADD_NOTE, note);

export const addNewNote = (notes, newNote) => {
  const newCartItems = [newNote, ...notes ];
  return createAction(NOTE_ACTION_TYPE.ADD_NOTE, newCartItems);
};

export const removeNote = (notes, id) => {
  const filteredNotes =  notes.filter((note) => note._id !== id);
  return createAction(NOTE_ACTION_TYPE.REMOVE_NOTE, filteredNotes);
};
