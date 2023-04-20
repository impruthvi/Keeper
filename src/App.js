import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useDispatch, useSelector } from "react-redux";
import { fetchNoteStart } from "./store/note/note.action";
import { selectAllNotes } from "./store/note/note.selector";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchNoteStart());
  },[])
  const notes = useSelector(selectAllNotes);


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
