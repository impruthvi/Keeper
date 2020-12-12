import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((noteItem) => (
        <Note title={noteItem.title} content={noteItem.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
