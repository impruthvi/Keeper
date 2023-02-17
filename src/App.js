import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import useHttp from "./hooks/use-http";
import { addNote as addNotes, getAllNotes, deleteSingleNote } from "./lib/api";
import mongoose from "mongoose";

const App = () => {
  const { sendRequest: sendCreateNoteRequest, status: createNoteStatus } =
    useHttp(addNotes);

  const {
    sendRequest: sendGetAllNotesRequest,
    status: getNoteStatus,
    data: loadedNotes,
  } = useHttp(getAllNotes);

  const { sendRequest: sendDeleteNoteRequest, status: deleteNoteStatus } =
    useHttp(deleteSingleNote);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    sendGetAllNotesRequest();
  }, [sendGetAllNotesRequest]);

  useEffect(() => {
    setNotes(loadedNotes);
  }, [loadedNotes]);

  const addNote = async (newNote) => {
    const _id = new mongoose.Types.ObjectId();
    newNote._id = _id;
    sendCreateNoteRequest(newNote);
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  };

  const deleteNote = (id) => {
    sendDeleteNoteRequest(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem._id !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes &&
        notes.map((noteItem) => {
          return (
            <Note
              key={noteItem._id}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      <Footer />
    </div>
  );
};

export default App;
