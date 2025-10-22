import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export async function loginAndLoadData() {
  try {
    const response = await fetch("https://api.osremyglobel.club/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "tanthangsport@gmail.com",
        password: "abcd",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Login response:", data);

    // return some dummy todos for now
    return ["Learn React", "Build a project"];
  } catch (error) {
    console.error("Error calling API:", error);
    return []; // return empty array on error
  }
}

function App() {
  // State
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(true);

  // Lifecycle with useEffect
  useEffect(() => {
    async function fetchData() {
      const loginResult = await loginAndLoadData();
      console.log("loginResult", loginResult);
      setTodos(["Learn React", "Build a project"]);
          // simulate API call


      setLoading(false);
    }

    fetchData()

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