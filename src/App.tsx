import React from "react";
import { observer } from "mobx-react";
import { ToastContainer } from "react-toastify";

import { ActiveTasks } from "./components/ActiveTasks/ActiveTasks";
import { TasksList } from "./components/TasksList/TasksList";
import { Modal } from "./components/Modal";

import Context, { useApplicationService } from "./context";

const App: React.FC = observer(() => {
  const state = useApplicationService();

  return (
    <Context.Provider value={state}>
      <div className="pt-20">
        <div className="fixed top-0 left-0 right-0 z-10 bg-white flex-wrap py-4 px-6 border-b border-gray-300 shadow-sm flex justify-between items-center w-full">
          <h1 className="font-bold text-gray-800 text-md uppercase">
            Tasks management
          </h1>

          <div className="flex items-center">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold ml-2 hover:text-white border border-blue-500 hover:border-transparent rounded"
              onClick={state.showCreateTaskModal}
            >
              Create a task
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold ml-2 hover:text-white border border-blue-500 hover:border-transparent rounded"
              onClick={state.showReportModal}
            >
              Report
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-sm md:max-w-lg py-4 px-6">
          <ActiveTasks />
          <TasksList />
        </div>

        {state.kindOfModal && <Modal />}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Context.Provider>
  );
});

export default App;
