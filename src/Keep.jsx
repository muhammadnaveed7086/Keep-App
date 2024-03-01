import React, { useState } from "react";
const Keep = (props) => {
  const [values, setValues] = useState({
    title: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { value, name } = event.target;
    console.log("name is ", name, " and text is ", value);
    setValues((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const AddNote = () => {
    props.passNote(values);
  };

  console.log(values);

  return (
    <>
        <button className="btnCn" onClick={AddNote}>
          +
        </button>
      <section className="CreateNotes">
        <input
          value={values.title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={InputEvent}
        />
        <textarea
          value={values.message}
          type="text"
          name="message"
          placeholder="Write a Note..."
          onChange={InputEvent}
        />
      </section> 
    </>
  );
};

export default Keep;
