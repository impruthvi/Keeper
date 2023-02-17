import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import useHttp from "./hooks/use-http";
import { addNote as addNotes, getAllNotes, deleteSingleNote } from "./lib/api";
import mongoose from "mongoose";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "./store/note-slice";

const App = () => {
  const dispatch = useDispatch();
  const { sendRequest: sendCreateNoteRequest, status: createNoteStatus } =
    useHttp(addNotes);

  const {
    sendRequest: sendGetAllNotesRequest,
    status: getNoteStatus,
    data: loadedNotes,
  } = useHttp(getAllNotes);

  const { sendRequest: sendDeleteNoteRequest, status: deleteNoteStatus } =
    useHttp(deleteSingleNote);

  const notes =  useSelector((state) => state.note.notes)
 
  useEffect(() => {
    sendGetAllNotesRequest();
  }, [sendGetAllNotesRequest]);

  useEffect(() => {
    dispatch(noteActions.getAllNotesReducer(loadedNotes))
  }, [dispatch, loadedNotes]);

  const addNote = async (newNote) => {
    const _id = new mongoose.Types.ObjectId();
    newNote._id = _id;
    sendCreateNoteRequest(newNote);
    dispatch(noteActions.addNoteReducer(newNote))
  };

  const deleteNote = (id) => {
    sendDeleteNoteRequest(id);
    dispatch(noteActions.deleteNoteReducer(id))
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
