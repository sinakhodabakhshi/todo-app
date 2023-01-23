import React from "react";
import { useSelector } from "react-redux";
import FilterTodos from "./FilterTodos";

export default function ListPerDate({ date }) {
  const todoIds = useSelector((state) => {
    if (state.dateFields.entities[date]) {
      return state.dateFields.entities[date].todos;
    }
  });

  return (
    <ol className="space-y-1">
      {todoIds ? (
        todoIds.map((todoId) => <FilterTodos key={todoId} todoId={todoId} />)
      ) : (
        <div className="flex justify-center items-center mt-5">
          <p className="text-[#242424]/70 dark:text-white/70">
            You have nothing to do today
          </p>
        </div>
      )}
    </ol>
  );
}
