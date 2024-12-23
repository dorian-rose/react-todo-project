//import { useTodoList } from "../hooks/useTodoList";

import { UpdateButton } from "./UpdateButton";
import { DeleteButton } from "./DeleteButton";
import { ToggleButton } from "./ToggleButton";
import { useState } from "react";

export const Entry = ({ todo }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <>
      <article className="flex justify-between border border-1 border-lines rounded-3xl mx-5 mt-4 p-2">
        <div className="flex">
          <ToggleButton key={todo.todo} todo={todo} />{" "}
          <div className="ms-3">
            <h3
              className={
                todo.done
                  ? "line-through text-lines sm:text-xl"
                  : "text-secondary sm:text-xl"
              }
            >
              {todo.todo}
            </h3>
            <p
              className={`text-sm ${
                todo.done
                  ? "line-through text-lines sm:text-lg"
                  : "text-secondary sm:text-lg"
              }`}
            >
              {todo.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between sm:py-1.5 me-2">
          <DeleteButton key={todo._id + 1} todo={todo} />
          <button onClick={() => setShowUpdate(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-primary hover:text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
      </article>
      <UpdateButton
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
        todo={todo}
      />
    </>
  );
};
