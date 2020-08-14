import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export const CreateTask: React.FC = () => {
  return (
    <>
      <div className="">
        <Input />
      </div>
      <div className="">
        <Textarea />
      </div>
    </>
  );
};
