import { createSelector } from "@reduxjs/toolkit";

export function sortBy(dateFieldIds, { sortBy }) {
  if (sortBy === "oldest") {
    const dateFieldIdsClone = [...dateFieldIds];
    return dateFieldIdsClone.reverse();
  }

  return dateFieldIds;
}

export const dateFieldIds = (state) => state.dateFields.ids;
export const filters = (state) => state.filters;

export const sortBySelector = createSelector(
  dateFieldIds,
  filters,
  (ids, filters) => sortBy(ids, filters)
);
