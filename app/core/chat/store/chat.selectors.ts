import { RootState } from "../../../../store";

export const chatRoomsSelector = (state: RootState) => state.chat.chatRooms;
export const filteredChatRoomsSelector = (
  state: RootState,
  filterText: string,
) => {
  if (filterText.trim() === "") {
    return state.chat.chatRooms;
  }

  return state.chat.chatRooms.filter((chatRoom) =>
    chatRoom.name.toLowerCase().includes(filterText),
  );
};
export const selectedRoomsSelector = (state: RootState) =>
  state.chat.selectedRoom;
