import { RootState } from "../../../../store";

export const userSelector = (state: RootState) => state.user.userName;
export const userIdSelector = (state: RootState) => state.user.userId;
export const imageSelector = (state: RootState) => state.user.image;
