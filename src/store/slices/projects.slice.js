import { createSlice } from "@reduxjs/toolkit";

export const projectsOn = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    setProjects: (state, action) => action.payload,
  },
});

export const { setProjects } = projectsOn.actions;
export default projectsOn.reducer;
