import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/user-state.type";

const initialState: UserState = {
  userId: null,
  userName: null,
  image: "https://loremflickr.com/140/140/dog",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { setUser, setUserId } = userSlice.actions;
