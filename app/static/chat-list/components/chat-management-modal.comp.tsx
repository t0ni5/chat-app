import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../../../assets/styles";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { updateChatRoom } from "../../../core/chat/store/chat.actions";
import { v4 as uuidv4 } from "uuid";
import { userSelector } from "../../../core/user/store/user.selectors";
import { createChatRoom } from "../../../core/chat/store/chat.actions";
import { ChatRoom } from "../../../core/chat/types/chat-dto.type";
import { selectedRoomsSelector } from "../../../core/chat/store/chat.selectors";

interface ChatManagementModalProps {
  setVisible: (arg: boolean) => void;
  isCreating: boolean;
  chatItemId?: string;
}

const ChatManagementModal: React.FC<ChatManagementModalProps> = ({
  setVisible,
  isCreating,
}: ChatManagementModalProps) => {
  const dispatch = useAppDispatch();
  const [groupName, setGroupName] = useState("");

  const user = useAppSelector(userSelector);
  const selectedRoom = useAppSelector(selectedRoomsSelector);

  const closeModal = () => setVisible(false);

  const handleCreateRoom = () => {
    const newChatRoom = {
      id: uuidv4(),
      name: groupName,
      createdBy: user,
      messages: [],
    } as ChatRoom;
    dispatch(createChatRoom(newChatRoom));
    closeModal();
  };

  const handleEditRoom = () => {
    dispatch(updateChatRoom({ ...selectedRoom, name: groupName } as ChatRoom));
    closeModal();
  };
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalSubheading}>Enter your chat name</Text>
      <TextInput
        style={styles.modalInput}
        placeholder="Chat name"
        onChangeText={(value) => setGroupName(value)}
      />

      <View style={styles.modalButtonContainer}>
        <Pressable
          style={styles.modalButton}
          onPress={isCreating ? handleCreateRoom : handleEditRoom}
        >
          <Text style={styles.modalText}>{isCreating ? "CREATE" : "EDIT"}</Text>
        </Pressable>
        <Pressable
          style={[styles.modalButton, { backgroundColor: "#E14D2A" }]}
          onPress={closeModal}
        >
          <Text style={styles.modalText}>CANCEL</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatManagementModal;
