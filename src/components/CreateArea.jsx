import { Fab, Zoom } from "@mui/material";
import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import AddIcon from "@mui/icons-material/Add";
import mongoose from "mongoose";
import { useDispatch, useSelector } from "react-redux";
// import { noteActions } from "../store/note-slice";

import { addNoteStart } from "../store/note/note.action";
import { selectAllNotes } from "../store/note/note.selector";

const CreateArea = (props) => {
  const notes = useSelector(selectAllNotes);
  const dispatch = useDispatch();


  const ref = useDetectClickOutside({
    onTriggered: () => {
      setExpand(false);
    },
  });

  const initialState = {
    title: "",
    content: "",
  };
  const [isExpand, setExpand] = useState(false);

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

  const submitNote = (event) => {
    event.preventDefault();

    const _id = new mongoose.Types.ObjectId();
    note._id = _id;
    dispatch(addNoteStart({ notes, note }));
    setNote(initialState);
    setExpand(false);
  };

  return (
    <div>
      <form className="create-note" ref={ref}>
        {isExpand ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={() => {
            setExpand(true);
          }}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />

        {note.title.trim() !== "" && note.content.trim() !== "" && (
          <Zoom in={isExpand ? true : false}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
};

export default CreateArea;
