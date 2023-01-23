import React from "react";
import { useSelector } from "react-redux";
import TodosField from "./TodosField";
import { todosIdSelector } from "../../../selectors/todosSelector";

export default function FilterTodos({ todoId }) {
  const condition = useSelector((state) => todosIdSelector(state, todoId));
  
  return (
    <>
      {condition ? (
        <TodosField id={todoId} />
      ) : (
        <div className="opacity-20">
          <TodosField id={todoId} />{" "}
        </div>
      )}
    </>
  );
}
