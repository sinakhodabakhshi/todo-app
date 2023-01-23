import {
  createAction,
  createEntityAdapter,
  createReducer,
  current,
} from "@reduxjs/toolkit";

const dateFields = createEntityAdapter({
  selectId: (dateField) => dateField.date,
  sortComparer: (a, b) => b.date - a.date,
});

const loclalyStore = (data) => {
  const data_seriallized = JSON.stringify(data);
  localStorage.setItem("dateFields", data_seriallized);
};

export const fieldChanged = createAction("fieldDate/changed");
export const fetchInialState = createAction("fieldDate/fetchInialState");

const DateReducer = createReducer(dateFields.getInitialState(), (builder) => {
  builder

    .addCase(fetchInialState, (state, { payload }) => {
      state.entities = payload.entities;
      state.ids = payload.ids;
    })
    .addCase("todos/addTodo", (state, { payload }) => {
      const { deadLine, id } = payload;
      if (state.entities[deadLine]) state.entities[deadLine].todos.push(id);
      else dateFields.addOne(state, { date: deadLine, todos: [id] });

      loclalyStore(state);
    })

    .addCase("todos/removeTodo", (state, { payload }) => {
      const { dateField, id } = payload;
      const todos = state.entities[dateField].todos;
      todos.splice(todos.indexOf(id), 1);
      if (todos.length === 0) dateFields.removeOne(state, dateField);

      loclalyStore(state);
    })

    .addCase(fieldChanged, (state, { payload }) => {
      const { todoId, dateField, newDateField } = payload;
      const todos = state.entities[dateField].todos;
      todos.splice(todos.indexOf(todoId), 1);
      if (todos.length === 0) dateFields.removeOne(state, dateField);
      if (state.entities[newDateField])
        state.entities[newDateField].todos.push(todoId);
      else dateFields.addOne(state, { date: newDateField, todos: [todoId] });

      loclalyStore(state);
    })

    .addCase("todos/removeCompleted", (state, { payload }) => {
      payload.forEach((todo) => {
        const { id, dateField } = todo;
        const todos = state.entities[dateField].todos;
        todos.splice(todos.indexOf(id), 1);
        if (todos.length === 0) dateFields.removeOne(state, dateField);

        loclalyStore(state);
      });
    });
});

export default DateReducer;
