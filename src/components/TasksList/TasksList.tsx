import React from "react";

import { TasksListItem } from "./TasksListItem";

export const TasksList: React.FC = () => {
  return (
    <div>
      <h2>TasksList</h2>

      <TasksListItem />
    </div>
  );
};
