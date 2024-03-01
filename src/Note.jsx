import React from "react";
const Note = (props) => {
  const deleteItem = () => {
    props.passDelete(props.id);
  };
  return ( 
    <>
      <div className="note">
        <h2> {props.title}</h2>
        <p> {props.message}</p>
          <button onClick={deleteItem}>✖</button>
      </div>
    </>
  );
};
export default Note;
