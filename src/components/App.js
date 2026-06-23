import React from "react";
import "./../styles/App.css";
import Input from "./Todo.js";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <Input />
    </div>
  );
};

export default App;
