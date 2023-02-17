import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSingleNote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useDispatch } from "react-redux";
import { noteActions } from "../store/note-slice";

const Note = (props) => {
  
  const dispatch = useDispatch();
  const { sendRequest: sendDeleteNoteRequest, status: deleteNoteStatus } =
    useHttp(deleteSingleNote);


  const handleClick = () => {
    sendDeleteNoteRequest(props.id);
    dispatch(noteActions.deleteNoteReducer(props.id));
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
