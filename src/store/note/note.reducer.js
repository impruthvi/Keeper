import { NOTE_ACTION_TYPE } from "./note.types";

const INITIAL_NOTE = {
  notes: [],
};

export const noteReducer = (state = INITIAL_NOTE, action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTE_ACTION_TYPE.SET_ALL_NOTES:
      return {
        ...state,
        notes: payload,
      };

    case NOTE_ACTION_TYPE.ADD_NOTE:
      return {
        ...state,
        notes: payload,
      };
    case NOTE_ACTION_TYPE.REMOVE_NOTE:
      return {
        ...state,
        notes: payload,
      };
    default:
      return state;
  }
};
