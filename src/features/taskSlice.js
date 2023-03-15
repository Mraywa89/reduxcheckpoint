import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [...state, { id: new Date(), name: action.payload.name }];
    },
    deleteTask: (state, action) => {
      return state.filter((item, index) => index !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
