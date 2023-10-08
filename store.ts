import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./app/core/user/store/user.slice";
import { chatSlice } from "./app/core/chat/store/chat.slice";

export const store = configureStore({
  reducer: { user: userSlice.reducer, chat: chatSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
