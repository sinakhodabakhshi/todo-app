import {
  createAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const loclalyStore = (data) => {
  const data_seriallized = JSON.stringify(data);
  localStorage.setItem("todos", data_seriallized);
};

const todosAdaptor = createEntityAdapter();

const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdaptor.getInitialState(),
  reducers: {
    todoFetchInialState: (state, { payload }) => {
      state.entities = payload.entities;
      state.ids = payload.ids;
    },
    addTodo: (state, { payload }) => {
      todosAdaptor.addOne(state, payload);
      loclalyStore(state);
    },
    removeTodo: (state, { payload }) => {
      todosAdaptor.removeOne(state, payload.id);
      loclalyStore(state);
    },
    editeTodo: (state, { payload }) => {
      todosAdaptor.updateOne(state, payload);
      loclalyStore(state);
    },
    toggleTodo(state, { payload }) {
      state.entities[payload].compeleted = !state.entities[payload].compeleted;
      loclalyStore(state);
    },
    removeCompleted: (state, { payload }) => {
      const todoIds = payload.map((todo) => todo.id);
      todosAdaptor.removeMany(state, todoIds);
      loclalyStore(state);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editeTodo,
  toggleTodo,
  removeCompleted,
  todoFetchInialState,
} = todosSlice.actions;

export default todosSlice.reducer;
