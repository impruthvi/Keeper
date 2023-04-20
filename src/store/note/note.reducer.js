import { NOTE_ACTION_TYPE } from "./note.types";

const INITIAL_NOTE = {
  notes: [],
  isLoading: false,
};

export const noteReducer = (state = INITIAL_NOTE, action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTE_ACTION_TYPE.FETCH_NOTE_START:
      return { ...state, isLoading: true };
    case NOTE_ACTION_TYPE.FETCH_NOTE_FAILED:
      return { ...state, isLoading: false, error: payload };
    case NOTE_ACTION_TYPE.FETCH_NOTE_SUCCESS:
      return { ...state, notes: payload, isLoading: false };

    case NOTE_ACTION_TYPE.ADD_NOTE_START:
      return {
        ...state,
        notes: payload,
      };
    case NOTE_ACTION_TYPE.REMOVE_NOTE_START:
      return {
        ...state,
        notes: payload.notes,
      };
    default:
      return state;
  }
};
