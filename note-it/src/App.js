import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";
// import styling
import "./styles/app.scss";

function App() {
  // All status
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredNotes, setFilteredNotes] = useState([]);

  // useEffect
  useEffect(() => {
    getLocalNotes();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalNotes();
  }, [notes, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredNotes(notes.filter((ele) => ele.completed === true));
        break;
      case "uncompleted":
        setFilteredNotes(notes.filter((ele) => ele.completed === false));
        break;
      default:
        setFilteredNotes(notes);
    }
  };
  const saveLocalNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const getLocalNotes = () => {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      let noteText = JSON.parse(localStorage.getItem("notes"));
      setNotes(noteText);
    }
  };

  return (
    <div className="App">
      <Nav />

      <CreateNote notes={notes} setNotes={setNotes} setStatus={setStatus} />
      <NoteList
        notes={notes}
        setNotes={setNotes}
        filteredNotes={filteredNotes}
      />
    </div>
  );
}

export default App;
