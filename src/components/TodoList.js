import React from "react";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li> // list + key
      ))}
    </ul>
  );
}

export default TodoList;