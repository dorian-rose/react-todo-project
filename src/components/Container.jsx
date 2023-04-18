import React from "react";
import { Form } from "./Form";
import { EntryContainer } from "./EntryContainer";

export const Container = () => {
  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <Form />
      <EntryContainer />
    </>
  );
};
