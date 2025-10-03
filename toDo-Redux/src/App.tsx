// src/App.tsx
import React from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>My To-do App 📝</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
