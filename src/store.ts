import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/Slicers/authSlice";
import brandSlice from "./features/Slicers/brandSlice";
import chatSlice from "./features/Slicers/chatSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    brand: brandSlice,
    chat: chatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
