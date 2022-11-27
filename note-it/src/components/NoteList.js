import React from "react";
import Note from "./Note";

const NoteList = ({ notes, setNotes, filteredNotes }) => {
  return (
    <ul className="noteList">
      {filteredNotes.map((note) => (
        <Note notes={notes} note={note} setNotes={setNotes} key={note.id} />
      ))}
    </ul>
  );
};

export default NoteList;
