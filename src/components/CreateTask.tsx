import React, { useContext, useRef, useState, useCallback } from "react";
import { observer } from "mobx-react";
import Context from "../context";

export const CreateTask: React.FC = observer(() => {
  const [isError, setIsError] = useState<boolean>(false);
  const state = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const classesOfInput = [
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ];

  if (isError) {
    classesOfInput.push("border-red-500");
  }

  const clearControls = useCallback(() => {
    inputRef.current!.value = "";
    textAreaRef.current!.value = "";
  }, []);

  const onCreateTask = useCallback(() => {
    if (inputRef.current!.value.trim()) {
      const newTask = {
        id: +new Date(),
        title: inputRef.current!.value,
        description: textAreaRef.current!.value,
        isRunning: false,
        isStopped: false,
        isCompleted: false,
        timeStart: 0,
        duration: 0,
      };
      state.createTask(newTask);
      clearControls();
    } else {
      setIsError(true);
    }
  }, [clearControls, state]);

  const onCreateTaskAndActivate = useCallback(() => {
    if (inputRef.current!.value.trim()) {
      const date = +new Date();
      const newTask = {
        id: date,
        title: inputRef.current!.value,
        description: textAreaRef.current!.value,
        isRunning: true,
        isStopped: false,
        isCompleted: false,
        timeStart: date,
        duration: 0,
      };
      state.createTaskAndActivate(newTask);
      clearControls();
    } else {
      setIsError(true);
    }
  }, [clearControls, state]);

  return (
    <>
      <div className="mb-6 relative">
        <label
          className="mb-1 block font-bold text-gray-700 text-sm uppercase"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className={classesOfInput.join(" ")}
          ref={inputRef}
          id="title"
          type="text"
          placeholder="Title"
        />
        {isError && (
          <p className="-mb-5 absolute bottom-0 italic left-0 text-red-500 text-xs">
            This field is required.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-1 block font-bold text-gray-700 text-sm uppercase"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          ref={textAreaRef}
          id="description"
          placeholder="Description"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold hover:text-white border border-blue-500 hover:border-transparent rounded"
          onClick={onCreateTask}
        >
          Create
        </button>

        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold ml-2 hover:text-white border border-blue-500 hover:border-transparent rounded"
          onClick={onCreateTaskAndActivate}
        >
          Create and activate
        </button>
      </div>
    </>
  );
});
