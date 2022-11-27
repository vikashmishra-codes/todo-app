import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateNote = ({ notes, setNotes, setStatus }) => {
  const [textInput, setTextInput] = useState("");

  const textInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { message: textInput, id: uuidv4(), completed: false },
    ]);
    setTextInput("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="createNote">
      <input
        onChange={textInputHandler}
        value={textInput}
        cols="30"
        rows="1"
        placeholder="Write Youre Note Here"
      />
      <button className="submitBtn" onClick={submitHandler} type="submit">
        <i className="fa-solid fa-square-plus fa-2x"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default CreateNote;
