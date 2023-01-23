import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todos";
import filtersReducer from "./reducers/filters";
import dateFieldsReducer from "./reducers/date";
import { statusReducer } from "./reducers/status";
const rootReducer = {
  dateFields: dateFieldsReducer,
  todos: todosReducer,
  filters: filtersReducer,
  status: statusReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
