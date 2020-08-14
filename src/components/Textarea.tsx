import { observable, action } from "mobx";
import React from "react";
import { observer } from "mobx-react";

export class TextareaState {
  @observable
  value: string = "";

  @action
  onChange(newValue: string): void {
    this.value = newValue;
  }
}

export const Textarea: React.FC<{ state: TextareaState }> = observer(
  ({ state }) => {
    return (
      <textarea
        value={state.value}
        onChange={(e) => state.onChange(e.target.value)}
      />
    );
  }
);
