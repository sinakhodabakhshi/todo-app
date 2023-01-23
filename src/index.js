import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Header from "./components/Header";
import { fetchInialState } from "./Redux/reducers/date";
import { todoFetchInialState } from "./Redux/reducers/todos";
const root = ReactDOM.createRoot(document.getElementById("root"));

if (localStorage.getItem("dateFields")) {
  store.dispatch(
    fetchInialState(JSON.parse(localStorage.getItem("dateFields")))
  );
}
if (localStorage.getItem("todos")) {
  store.dispatch(
    todoFetchInialState(JSON.parse(localStorage.getItem("todos")))
  );
}

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Header />
      <App />
    </React.StrictMode>
  </Provider>
);
