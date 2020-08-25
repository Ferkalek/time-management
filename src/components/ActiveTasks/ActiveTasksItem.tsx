import React, { useContext } from "react";
import { observer } from "mobx-react";
import Context from "../../context";
import { ITask } from "../../interfaces";

export const ActiveTasksItem: React.FC<{ task: ITask }> = observer(
  ({ task }) => {
    const state = useContext(Context);
    const classes = ["progress-bar bg-blue-500"];

    if (task.isRunning) {
      classes.push("h-full");
    }
    return (
      <div className="text-gray-700 bg-white rounded shadow-sm hover:shadow-md mb-2 py-2 px-4 transition ease-in-out duration-300">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xs uppercase font-bold">{task.title}</h3>

          <div className="flex justify-end pt-1 flex-no-wrap">
            <button
              className="ml-1 duration-300 ease-in-out hover:text-gray-900 transition"
              onClick={() => state.editTask(task)}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="pencil-alt w-5 h-5"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              className="ml-1 duration-300 ease-in-out hover:text-gray-900 transition"
              onClick={() => state.showConfirmationModal(task)}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="trash w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-1 progress border border-gray-400 bg-gray-300 h-2 overflow-hidden rounded">
            <div className={classes.join(" ")}></div>
          </div>
          <div className="flex">
            {/* play */}
            {!task.isRunning && (
              <button
                className="ml-1"
                onClick={state.startedTask.bind(null, task.id)}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="play w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            )}

            {/* pausa */}
            {task.isRunning && (
              <button
                className="ml-1"
                onClick={state.pausedTask.bind(null, task.id)}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="pause w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            )}

            {/* stop */}
            {(task.isRunning || task.isStopped) && (
              <button
                className="ml-1"
                onClick={state.stopedTask.bind(null, task.id)}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="stop w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </div>
        <p className="text-xs">{task.description}</p>
      </div>
    );
  }
);
