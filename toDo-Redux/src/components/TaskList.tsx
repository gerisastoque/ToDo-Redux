import React from "react";
import { useAppSelector } from "../redux/hooks";
import TaskItem from "./TaskItem/TaskItem";

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
};

export default TaskList;
