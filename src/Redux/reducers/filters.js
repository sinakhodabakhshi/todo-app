import { createSlice } from "@reduxjs/toolkit";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = {
  searched: "",
  sortBy: "latest",
  rangeStart: null,
  rangeEnd: null,
  types: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searched(state, { payload }) {
      state.searched = payload;
    },
    sortBy(state, { payload }) {
      state.sortBy = payload;
    },
    ranagePick(state, { payload }) {
      const { startDate, endDate } = payload;
      state.rangeStart = startDate;
      state.rangeEnd = endDate;
    },
    type(state, { payload }) {
        state.types = Object.values(payload).map(type => type.name)
      
    },
  },
});

export const { searched, ranagePick, sortBy, type } = filtersSlice.actions;
export default filtersSlice.reducer;
