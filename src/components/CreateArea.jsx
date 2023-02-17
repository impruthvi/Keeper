import { Fab, Zoom } from "@mui/material";
import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {

  const expand = () => {
    setExpand(true);
  };
  
  const close = () => {
    setExpand(false);
  };

  const ref = useDetectClickOutside({ onTriggered: close });
  
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
    props.onAdd(note);
    setNote(initialState);
    setExpand(false);
    event.preventDefault();
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
          onClick={expand}
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
