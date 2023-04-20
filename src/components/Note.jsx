import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeNoteStart } from "../store/note/note.action";
import { selectAllNotes } from "../store/note/note.selector";

const Note = (props) => {
  const notes = useSelector(selectAllNotes);

  const dispatch = useDispatch();
 
  const handleClick = () => {
    // sendDeleteNoteRequest(props.id);
    dispatch(removeNoteStart({ notes, id: props.id }));
  };

  const style = {
    bgcolor: "background.paper",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    width: "480px",
    margin: "30px auto 20px auto",
    background: "#fff",
    padding: "15px",
    borderRadius: "7px",
    boxShadow: "0 1px 5px rgb(138, 137, 137)",
    top: "50%",
    left: "50%",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const initialState = {
    title: props.title,
    content: props.content,
  };
  const [note, setNote] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="note">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form className="create-note">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />

          <textarea
            name="content"
            // onClick={() => {
            //   setExpand(true);
            // }}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={5}
          />
        </form>
      </Modal>
    </>
  );
};

export default Note;
