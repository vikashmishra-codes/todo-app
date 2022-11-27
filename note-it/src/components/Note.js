import React from "react";

const Note = ({ notes, note, setNotes }) => {
  const deleteHandler = (e) => {
    setNotes(notes.filter((el) => el.id !== note.id));
  };

  const checkHandler = (e) => {
    setNotes(
      notes.map((item) => {
        if (item.id === note.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`note`}>
      <h3 className={`noteText ${note.completed ? "textlined" : ""}`}>
        {note.message}
      </h3>
      <div className="btn">
        <button onClick={checkHandler} className="check-btn">
          <i className="fa-solid fa-square-check"></i>
        </button>
        <button className="delete" id="deleteBtn" onClick={deleteHandler}>
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Note;
