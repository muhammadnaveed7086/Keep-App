import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Keep from "./Keep";
function App() {
  const [item, setItem] = useState([]);
  const AddNote = (values) => {
    setItem((oldVal) => {
      return [...oldVal, values];
    });
  };
  const deleteNote = (id) => {
    console.log("deleted id is", id);
    setItem((oldVal) => {
      return oldVal.filter((currVal, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <Keep passNote={AddNote} />
      {item.map((currVal, index) => {
        console.log(currVal);
        return (
          <Note
            title={currVal.title}
            message={currVal.message}
            key={index}
            id={index}
            passDelete={deleteNote}
          />
        );
      })}
    </>
  );
}
export default App;
