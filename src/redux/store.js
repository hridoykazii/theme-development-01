import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import drawerReducer from "./features/drawer/drawerSlice";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    drawer: drawerReducer,
    themeSlice: themeReducer
  },
});
