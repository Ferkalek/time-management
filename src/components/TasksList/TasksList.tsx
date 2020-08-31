import React from "react";
import { observer } from "mobx-react";

import { TasksListItem } from "./TasksListItem";
import Context from "../../context";

export const TasksList: React.FC = observer(() => {
  const state = React.useContext(Context);
  return (
    <div>
      <h2 className="font-bold mb-4 mt-8 text-gray-800 text-xl uppercase">
        All tasks
      </h2>
      {state.tasks.length ? (
        state.tasks.map((task) => <TasksListItem key={task.id} task={task} />)
      ) : (
        <p className="text-gray-500 text-sm -mt-4">You do not have any task!</p>
      )}
    </div>
  );
});
