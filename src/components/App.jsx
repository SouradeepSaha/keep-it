import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteList from "../notes";


export default function App() {
  return (
    <div>
      <Header />
      {NoteList.map(note =>
        <Note key= {note.key} title={note.title} content={note.content}/>
      )}
      <Footer />
    </div>
  );
}