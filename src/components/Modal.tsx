import React, { useContext, useCallback } from "react";
import { observer } from "mobx-react";
import { CreateTask } from "./CreateTask";
import { EditTask } from "./EditTask";
import { Report } from "./Report";
import Context from "../context";
import { Confirmation } from "./Confirmation";

export const Modal: React.FC = observer(() => {
  const state = useContext(Context);
  const titleOfModal =
    state.kindOfModal === "create"
      ? "Create a task"
      : state.kindOfModal === "edit"
      ? "Edit a task"
      : state.kindOfModal === "report"
      ? "Report"
      : "Confirmation";

  const clickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        state.closeHandler();
      }
    },
    [state]
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
      onClick={clickHandler}
    >
      <div className="bg-white max-w-sm p-6 rounded shadow-xl w-full relative z-10">
        <div className="flex justify-between mb-2">
          <h2 className="uppercase text-gray-700 font-bold text-md">
            {titleOfModal}
          </h2>

          <button
            className="cursor-pointer text-gray-700 hover:text-gray-900 transition ease-in-out duration-300"
            onClick={state.closeHandler}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="x w-6 h-6">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="py-2">
          {state.kindOfModal === "create" && <CreateTask />}
          {state.kindOfModal === "edit" && <EditTask />}
          {state.kindOfModal === "report" && <Report />}
          {state.kindOfModal === "confirmation" && <Confirmation />}
        </div>
      </div>
    </div>
  );
});
