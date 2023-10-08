import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../../assets/styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { chatRoomsSelector } from "../../../core/chat/store/chat.selectors";
import { deleteChatRoom } from "../../../core/chat/store/chat.actions";
import ContextMenu from "./context-menu.comp";
import { setSelectedRoom } from "../../../core/chat/store/chat.slice";
interface Message {
  id: string;
  text: string;
  time: string;
  user: string;
}

interface ChatRoom {
  id: string;
  name: string;
  messages: Message[];
  createdBy: string;
}

interface ChatItemProps {
  item: ChatRoom;
  showModalMenu: (arg: boolean) => void;
  setIsCreating: (arg: boolean) => void;
}

const ChatItem: React.FC<ChatItemProps> = ({
  item,
  showModalMenu,
  setIsCreating,
}: ChatItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const [messages, setMessages] = useState<Message | null>(null);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    top: 0,
    left: 0,
  });

  const chats = useAppSelector(chatRoomsSelector);

  useLayoutEffect(() => {
    if (item.messages.length > 0) {
      setMessages(item.messages[item.messages.length - 1]);
    }
  }, []);

  const handleNavigation = () => {
    navigation.navigate("Chat", {
      id: item.id,
      name: item.name,
    });
  };

  const handleLongPress = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    setContextMenuPosition({ top: pageY, left: pageX });
    setIsContextMenuVisible(true);
  };

  const handleHideContextMenu = () => {
    setIsContextMenuVisible(false);
  };

  const handleDelete = () => {
    console.log(chats, "chats");
    dispatch(deleteChatRoom(item));
  };

  const handleEdit = () => {
    dispatch(setSelectedRoom(item));
    setIsCreating(false);
    showModalMenu(true);
  };

  return (
    <>
      <View style={styles.chatItemWrapper}>
        <Pressable
          style={styles.chatItemWrapper}
          onPress={handleNavigation}
          onLongPress={handleLongPress}
        >
          <Ionicons
            name="person-circle-outline"
            size={45}
            color="black"
            style={styles.chatItemAvatar}
          />

          <View style={styles.chatItemRightContainer}>
            <View>
              <Text style={styles.chatItemUsername}>{item.name}</Text>

              <Text style={styles.chatItemMessage}>
                {messages?.text ? messages.text : "Tap to start chatting"}
              </Text>
            </View>
            <View>
              <Text style={styles.chatItemTime}>
                {messages?.time ? messages.time : "now"}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      <ContextMenu
        isContextMenuVisible={isContextMenuVisible}
        handleHideContextMenu={handleHideContextMenu}
        contextMenuPosition={contextMenuPosition}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        item={item}
      />
    </>
  );
};

export default ChatItem;
