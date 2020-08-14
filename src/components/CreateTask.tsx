import { observable } from "mobx";
import React from "react";
import { observer } from "mobx-react";
import { Input, InputState } from "./Input";
import { Textarea, TextareaState } from "./Textarea";

export class CreateTaskState {
  @observable
  inputValue = new InputState();

  @observable
  TextareaValue = new TextareaState();
}

export const CreateTask: React.FC<{ state: CreateTaskState }> = observer(
  ({ state }) => {
    return (
      <>
        <div className="">
          <Input state={state.inputValue} />
        </div>
        <div className="">
          <Textarea state={state.TextareaValue} />
        </div>
      </>
    );
  }
);
