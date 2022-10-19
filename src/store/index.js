import { configureStore } from "@reduxjs/toolkit";
import { projectsOn } from "./slices/projects.slice";

export default configureStore({
  reducer: {
    projectsOn,
  },
});
