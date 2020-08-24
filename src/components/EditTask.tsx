import React, { useContext, useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react";
import Context from "../context";

export const EditTask: React.FC = observer(() => {
  const state = useContext(Context);
  const [isError, setIsError] = useState<boolean>(false);
  const [inputVal, setInputValue] = useState<string>("");
  const [textareaVal, setTextareaValue] = useState<string>("");

  const classesOfInput = [
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ];

  useEffect(() => {
    setInputValue(state.selectedTask.title);
    setTextareaValue(state.selectedTask.description);
  }, [state.selectedTask]);

  if (isError) {
    classesOfInput.push("border-red-500");
  }

  const changeInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const changeTextareaHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextareaValue(event.target.value);
    },
    []
  );

  const onUpdateTask = useCallback(() => {
    if (inputVal.trim()) {
      state.selectedTask.title = inputVal;
      state.selectedTask.description = textareaVal;
      state.updateTask(state.selectedTask);
    } else {
      setIsError(true);
    }
  }, [inputVal, state, textareaVal]);

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
          onChange={changeInputHandler}
          id="title"
          type="text"
          value={inputVal}
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
          value={textareaVal}
          onChange={changeTextareaHandler}
          id="description"
          placeholder="Description"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 px-2 py-1 uppercase text-xs font-bold hover:text-white border border-blue-500 hover:border-transparent rounded"
          onClick={onUpdateTask}
        >
          Update
        </button>
      </div>
    </>
  );
});
