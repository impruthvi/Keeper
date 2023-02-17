import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import useHttp from "./hooks/use-http";
import { getAllNotes } from "./lib/api";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "./store/note-slice";

const App = () => {
  const dispatch = useDispatch();

  const {
    sendRequest: sendGetAllNotesRequest,
    status: getNoteStatus,
    data: loadedNotes,
  } = useHttp(getAllNotes);

  const notes = useSelector((state) => state.note.notes);

  useEffect(() => {
    sendGetAllNotesRequest();
  }, [sendGetAllNotesRequest]);

  useEffect(() => {
    dispatch(noteActions.getAllNotesReducer(loadedNotes));
  }, [dispatch, loadedNotes]);

  return (
    <div>
      <Header />
      <CreateArea />
      {notes &&
        notes.map((noteItem) => {
          return (
            <Note
              key={noteItem._id}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
            />
          );
        })}
      <Footer />
    </div>
  );
};

export default App;
