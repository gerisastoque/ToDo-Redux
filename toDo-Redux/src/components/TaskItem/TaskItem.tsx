import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTask, editTask } from "../../redux/tasksSlice";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  id: string;
  title: string;
  description: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, description }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);

  const handleSave = () => {
    dispatch(editTask({ id, title: newTitle, description: newDesc }));
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <textarea value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <div className={styles.actions}>
            <button onClick={handleSave} className={`${styles.button} ${styles.edit}`}>
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <button onClick={() => setIsEditing(true)} className={`${styles.button} ${styles.edit}`}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteTask(id))} className={`${styles.button} ${styles.delete}`}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
