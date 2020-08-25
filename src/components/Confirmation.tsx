import React, { useContext } from "react";
import { observer } from "mobx-react";
import Context from "../context";

export const Confirmation: React.FC = observer(() => {
  const state = useContext(Context);

  return (
    <>
      <p className="text-gray-700 text-sm font-medium">
        Are you sure that you want to delete task?
      </p>

      <div className="flex justify-end mt-6">
        <button
          className="w-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          onClick={state.closeHandler}
        >
          No
        </button>
        <button
          className="ml-2 w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => state.deleteTask(state.selectedTask.id)}
        >
          Yes
        </button>
      </div>
    </>
  );
});
