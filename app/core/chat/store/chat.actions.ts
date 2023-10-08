import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "../../../../repository";
import { ChatRoom } from "../types/chat-dto.type";

export const getChatRooms = createAsyncThunk<ChatRoom[]>(
  "GET/chat rooms",
  async (_, { rejectWithValue }) => {
    try {
      const response = await repository.get(`/getChatRooms`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue("error");
    }
  },
);

export const createChatRoom = createAsyncThunk<ChatRoom, ChatRoom>(
  "POST/chat room",
  async (newChatRoom, { rejectWithValue }) => {
    try {
      const response = await repository.post(`/createChatRoom`, newChatRoom);
      return response.data;
    } catch (error: any) {
      return rejectWithValue("error");
    }
  },
);

export const deleteChatRoom = createAsyncThunk<ChatRoom, ChatRoom>(
  "DELETE/chat room",
  async (roomToDelete, { rejectWithValue }) => {
    console.log(roomToDelete, "room to delet");
    try {
      const response = await repository.delete(`/deleteChatRoom`, {
        data: roomToDelete,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue("error");
    }
  },
);

export const updateChatRoom = createAsyncThunk<ChatRoom, ChatRoom>(
  "PUT/chat room",
  async (roomToUpdate, { rejectWithValue }) => {
    try {
      const response = await repository.put(`/updateChatRoom`, roomToUpdate);
      return response.data;
    } catch (error: any) {
      return rejectWithValue("error");
    }
  },
);
