import { createSlice } from "@reduxjs/toolkit";
import { ChatState } from "../types/chat-state.type";
import {
  createChatRoom,
  deleteChatRoom,
  getChatRooms,
  updateChatRoom,
} from "./chat.actions";

const initialState: ChatState = {
  chatRooms: [],
  filterText: "",
  selectedRoom: null,
  pending: {
    chatRooms: false,
  },
  errors: {
    chatRooms: null,
  },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setFilterText(state, action) {
      state.filterText = action.payload;
    },
    setSelectedRoom(state, action) {
      state.selectedRoom = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // ============ GET CHAT ROOMS ============ //
      .addCase(getChatRooms.pending, (state) => {
        state.pending.chatRooms = true;
        state.errors.chatRooms = null;
      })
      .addCase(getChatRooms.fulfilled, (state, { payload }) => {
        state.pending.chatRooms = false;
        state.chatRooms = payload;
      })
      .addCase(
        getChatRooms.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.chatRooms = false;
          state.errors.chatRooms = action.payload.message;
        },
      );

    builder
      // ============ CREATE CHAT ROOM ============ //
      .addCase(createChatRoom.pending, (state) => {
        state.pending.chatRooms = true;
        state.errors.chatRooms = null;
      })
      .addCase(createChatRoom.fulfilled, (state, { payload }) => {
        state.pending.chatRooms = false;
        const newChatRoom = payload;
        state.chatRooms.push(newChatRoom);
      })
      .addCase(
        createChatRoom.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.chatRooms = false;
          state.errors.chatRooms = action.payload.message;
        },
      );

    builder
      // ============ DELETE CHAT ROOM ============ //
      .addCase(deleteChatRoom.pending, (state) => {
        state.pending.chatRooms = true;
        state.errors.chatRooms = null;
      })
      .addCase(deleteChatRoom.fulfilled, (state, { payload }) => {
        state.pending.chatRooms = false;
        state.chatRooms = state.chatRooms.filter(
          (chatRoom) => chatRoom.id !== payload.id,
        );
      })
      .addCase(
        deleteChatRoom.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.chatRooms = false;
          state.errors.chatRooms = action.payload.message;
        },
      );

    builder
      // ============ UPDATE CHAT ROOM's NAME ============ //
      .addCase(updateChatRoom.pending, (state) => {
        state.pending.chatRooms = true;
        state.errors.chatRooms = null;
      })
      .addCase(updateChatRoom.fulfilled, (state, { payload }) => {
        state.pending.chatRooms = false;
        console.log(payload, "updated");
        const updatedRooms = state.chatRooms.map((chatRoom) =>
          chatRoom.id === payload.id ? payload : chatRoom,
        );
        state.chatRooms = updatedRooms;
      })
      .addCase(
        updateChatRoom.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.chatRooms = false;
          state.errors.chatRooms = action.payload.message;
        },
      );
  },
});

export const { setFilterText, setSelectedRoom } = chatSlice.actions;
