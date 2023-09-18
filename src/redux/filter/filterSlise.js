import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState } from "./initialState";


const filterSlise = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    chengeFilter: (state, action) => {
      return { ...state, filter: action.payload.toLowerCase().trim() };
    },
  },
});
export const filterReducer = filterSlise.reducer;
export const { chengeFilter } = filterSlise.actions;
