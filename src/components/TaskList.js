import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const tasksArray = Array.from(tasks);

  return (
    <div className="tasks">
      {tasksArray.map((task) => (
        <Task key={task.text} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
