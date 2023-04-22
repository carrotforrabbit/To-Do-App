import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import Form from "../Form/Form";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="app__title">To Do List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
