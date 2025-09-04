import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  // State
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(true);

  // Lifecycle with useEffect
  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setTodos(["Learn React", "Build a project"]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  // Event handling
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Props */}
      <Header title="Le Tan Thang Todo App" />

      {/* Conditional Rendering */}
      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <TodoList todos={todos} />
      )}

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)} // onChange
        />
        <button onClick={addTask}>Add Task</button> {/* onClick */}
        <button onClick={() => setTodos([])}>Clear All Tasks</button> {/* onClick */}
      </div>
    </div>
  );
}

export default App;