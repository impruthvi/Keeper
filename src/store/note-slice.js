import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
  },
  reducers: {
    getAllNotesReducer(state, actions) {
      state.notes = actions.payload
    },
    addNoteReducer(state, actions) {
      state.notes.push(actions.payload)
    },
    deleteNoteReducer(state, actions) {
      state.notes =  state.notes.filter((noteItem) => {
        return noteItem._id !== actions.payload;
      });
    }
  },
});

export const noteActions = noteSlice.actions;
export default noteSlice;
