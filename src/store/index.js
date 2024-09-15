import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";
import globalSlice from "./slices/global-slice";
import formDataSlice from "./slices/form-data-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalSlice,
    formData: formDataSlice,
  },
});

export default store;
