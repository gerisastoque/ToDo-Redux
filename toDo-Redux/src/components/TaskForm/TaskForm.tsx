import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addTask } from "../../redux/tasksSlice";
import { v4 as uuidv4 } from "uuid";
import styles from "./TaskForm.module.css";

const TaskForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTask({ id: uuidv4(), title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        required
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
