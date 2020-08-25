import React, { useContext, useCallback } from "react";
import { observer } from "mobx-react";
import Context from "../context";

export const Report: React.FC = observer(() => {
  const state = useContext(Context);

  const getTotalTime = useCallback(() => {
    let totalTime = 0;
    state.tasksWithTime.forEach((t) => {
      totalTime += state.getTimeAsSecondsFromTask(t);
    });
    return state.getTimeAsString(totalTime);
  }, [state]);

  return (
    <div>
      {state.tasksWithTime &&
        state.tasksWithTime.map((task) => (
          <div key={task.id} className="mt-2 flex justify-between items-start">
            <div className="flex-1">
              <h2 className="font-medium text-md">{task.title}</h2>
              <p className="text-gray-700 text-sm">{task.description}</p>
            </div>

            <div className="flex flex-col items-end ml-2">
              {task.isRunning && (
                <div className="bg-teal-500 border border-teal-600 mb-1 px-2 rounded-full text-white text-xs">
                  Running
                </div>
              )}

              <div className="font-medium text-gray-700 text-xs">
                {state.getSpendTime(task)}
              </div>
            </div>
          </div>
        ))}

      <div className="flex justify-between mt-4">
        <h4 className="font-bold text-sm uppercase">Total time:</h4>
        <p className="font-semibold text-gray-700 text-sm">{getTotalTime()}</p>
      </div>
    </div>
  );
});
