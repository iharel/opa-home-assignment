import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../stateMng/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
