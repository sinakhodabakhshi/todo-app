import { createSelector } from "@reduxjs/toolkit";
import moment from "moment/moment";

export const listSelector = (
  todosId,
  todos,
  { searched, rangeStart, rangeEnd, types }
) => {
  const todo = todos[todosId];
  const include = todo.name.search(searched) > -1;
  const typeCheck = types.length !== 0 ? types.includes(todo.type) : true;
  const after = moment
    .unix(todo.deadLine)
    .isSameOrAfter(moment.unix(rangeStart), "day");
  const befor = moment
    .unix(todo.deadLine)
    .isSameOrBefore(moment.unix(rangeEnd), "day");

  return include && typeCheck && after && befor;
};

export const todos = (state) => state.todos.entities;

export const filters = (state) => state.filters;

export const compeletedTodosIds = createSelector(todos, (todos) => {
  const test = Object.values(todos)
    .filter((todo) => todo.compeleted)
    .map((todo) => ({ id: todo.id, dateField: todo.deadLine }));
  return test;
});

export const todosIdSelector = (state, todoId) =>
  listSelector(todoId, state.todos.entities, filters(state));

const statusSelector = (state) => state.status;

export const currentStatusSelector = createSelector(
  statusSelector,
  (status) => status.current
);
