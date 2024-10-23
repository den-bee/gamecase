import {configureStore} from "@reduxjs/toolkit";
import {rawgApi} from "../slices/apiSlice/apiSlice";

export default configureStore({
  reducer: {
    [rawgApi.reducerPath]: rawgApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rawgApi.middleware),
});
