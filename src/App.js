import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import useHttp from "./hooks/use-http";
import { getAllNotes } from "./lib/api";
import { useDispatch, useSelector } from "react-redux";
import { setAllNotes } from "./store/note/note.action";
import { selectAllNotes } from "./store/note/note.selector";

const App = () => {
  const dispatch = useDispatch();

  const {
    sendRequest: sendGetAllNotesRequest,
    status: getNoteStatus,
    data: loadedNotes,
  } = useHttp(getAllNotes);

  // const notes = [];
  const notes = useSelector(selectAllNotes);

  useEffect(() => {
    sendGetAllNotesRequest();
  }, [sendGetAllNotesRequest]);

  useEffect(() => {
    dispatch(setAllNotes(loadedNotes));
  }, [loadedNotes]);

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
