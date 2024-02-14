import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDel: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span className="taskNameI">{task.taskName}</span>
        <span>{task.deadLine}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
        className="delx"
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
