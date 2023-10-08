import { BaseState } from "../../../../types/base-state.type";
import { ChatRoom } from "./chat-dto.type";

export interface ChatState extends BaseState {
  chatRooms: ChatRoom[];
  filterText: string;
  selectedRoom: ChatRoom | null;
  pending: {
    chatRooms: boolean;
  };
  errors: {
    chatRooms: string | null;
  };
}
