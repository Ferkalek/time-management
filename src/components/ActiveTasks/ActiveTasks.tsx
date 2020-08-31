import React, { useContext } from "react";
import { observer } from "mobx-react";

import { ActiveTasksItem } from "./ActiveTasksItem";
import Context from "../../context";

export const ActiveTasks: React.FC = observer(() => {
  const state = useContext(Context);

  return (
    <div>
      <h2 className="font-bold mb-4 text-gray-800 text-xl uppercase">
        Active tasks
      </h2>

      {!state.isRunningTask && !state.arePausedTasks.length && (
        <p className="text-gray-500 text-sm -mt-4">
          You do not have any active task!
        </p>
      )}

      {state.isRunningTask && <ActiveTasksItem task={state.isRunningTask} />}

      {state.arePausedTasks &&
        state.arePausedTasks.map((task) => (
          <ActiveTasksItem key={task.id} task={task} />
        ))}
    </div>
  );
});
