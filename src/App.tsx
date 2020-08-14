import React, { useState } from "react";

import { ActiveTasks } from "./components/ActiveTasks/ActiveTasks";
import { TasksList } from "./components/TasksList/TasksList";
import { Modal } from "./components/Modal";

const App: React.FC = () => {
  const [kindOfModal, setKindOfModal] = useState<string>("");

  function showCreateTaskModal() {
    setKindOfModal("create");
  }

  function showEditTaskModal() {
    setKindOfModal("edit");
  }

  function showReportModal() {
    setKindOfModal("report");
  }

  function closeHandler() {
    setKindOfModal("");
  }
  return (
    <>
      <div className="py-4 px-6 mb-4 border-b border-gray-500 flex justify-between w-full">
        <h1>Hi</h1>

        <div className="flex">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
            onClick={showCreateTaskModal}
          >
            Create a task
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
            onClick={showEditTaskModal}
          >
            Edit a task
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
            onClick={showReportModal}
          >
            Report
          </button>
        </div>
      </div>

      <ActiveTasks />

      <TasksList />

      {kindOfModal && <Modal modalType={kindOfModal} onClose={closeHandler} />}
    </>
  );
};

export default App;
