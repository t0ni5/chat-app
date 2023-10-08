import { BaseState } from "../../../../types/base-state.type";

export interface UserState extends BaseState {
  userId: string | null;
  userName: string | null;
  image: string;
}
