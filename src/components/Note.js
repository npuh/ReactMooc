import React from "react";

const Note = ({ note }) => {
  return (
    <span>
      <li>{note.content}</li>
      <li>{note.date}</li>
      <hr />
    </span>
  );
};

export default Note;
