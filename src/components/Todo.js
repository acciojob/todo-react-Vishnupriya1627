import React from "react";
import "./Input.css";
import { useState } from "react";
import List from "./List.js";

const Input = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // console.log(input);

  const handleSubmit = () => {
    const userInput = input.trim();
    if (userInput === "") {
      alert("Input a task");
      return;
    }

    setList((prev) => [...prev, userInput]);
    setInput("");
  };

//   console.log("Added List ", list);

  const handleDelete = (index) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div id="container">
        <div id="input">
          <input
            type="text"
            placeholder=""
            value={input}
            onChange={handleInput}
          />
          <button type="submit" onClick={handleSubmit}>
            Add Todo
          </button>
        </div>
        <List list={list} onDelete={handleDelete}/>
      </div>
    </>
  );
};

export default Input;
