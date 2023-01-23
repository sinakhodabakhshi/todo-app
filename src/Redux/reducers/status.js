import { createReducer } from "@reduxjs/toolkit";

const initailState = {
  current: "list",
};

export const statusReducer = createReducer(initailState, (builder) => {
  builder
    .addCase("listStatus", (state, { payload }) => {
      state.current = "list";
    })

    .addCase("todayStatus", (state, { payload }) => {
      state.current = "today";
    });
});
