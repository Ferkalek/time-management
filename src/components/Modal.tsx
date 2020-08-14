import { observable } from "mobx";
import React from "react";
import { observer } from "mobx-react";
import { CreateTask, CreateTaskState } from "./CreateTask";
import { EditTask } from "./EditTask";
import { Report } from "./Report";

export class CreateModalState {
  @observable
  createTaskState = new CreateTaskState();
}

interface ModalType {
  modalType: string;
  onClose: () => void;
  createState: CreateModalState;
}

export const Modal: React.FC<ModalType> = observer(
  ({ modalType, onClose, createState }) => {
    const titleOfModal =
      modalType === "create"
        ? "Create a task"
        : modalType === "edit"
        ? "Edit a task"
        : "Report";
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
        <div className="py-4 px-6 rounded shadow-xs max-w-sm w-full">
          <div className="flex justify-between">
            <h2>{titleOfModal}</h2>

            <button onClick={() => onClose()}>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="x w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="py-2">
            {modalType === "create" && (
              <CreateTask state={createState.createTaskState} />
            )}
            {modalType === "edit" && <EditTask />}
            {modalType === "report" && <Report />}
          </div>
        </div>
      </div>
    );
  }
);
