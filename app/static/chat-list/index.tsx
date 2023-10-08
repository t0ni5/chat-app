import React, { useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "../../../assets/styles";
import ChatItem from "./components/chat-item.comp";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getChatRooms } from "../../core/chat/store/chat.actions";
import {
  chatRoomsSelector,
  filteredChatRoomsSelector,
} from "../../core/chat/store/chat.selectors";
import ChatManagementModal from "./components/chat-management-modal.comp";
import SearchField from "./components/search-field.comp";

const ChatList = () => {
  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);
  const [textFilter, setTextFilter] = useState("");
  const [isCreating, setIsCreating] = useState(true);

  const rooms = useAppSelector(chatRoomsSelector);
  const filteredRooms = useAppSelector((state) =>
    filteredChatRoomsSelector(state, textFilter),
  );

  useEffect(() => {
    const loadChatRooms = async () => {
      {
        try {
          await dispatch(getChatRooms());
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };
    loadChatRooms();
  }, []);

  const handleChatCreating = () => {
    setIsCreating(true);
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.chatScreen}>
      <SearchField textFilter={textFilter} setTextFilter={setTextFilter} />
      <View style={styles.chatTopContainer}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatHeading}>Chats</Text>

          <Pressable onPress={handleChatCreating}>
            <Feather name="edit" size={24} color="green" />
          </Pressable>
        </View>
      </View>

      <View style={styles.chatListContainer}>
        {rooms?.length > 0 ? (
          <FlatList
            data={filteredRooms}
            renderItem={({ item }) => (
              <ChatItem
                item={item}
                showModalMenu={setVisible}
                setIsCreating={setIsCreating}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.chatEmptyContainer}>
            <Text style={styles.chatEmptyText}>No rooms created!</Text>
            <Text>Click the icon above to create a Chat room</Text>
          </View>
        )}
      </View>
      {visible ? (
        <ChatManagementModal setVisible={setVisible} isCreating={isCreating} />
      ) : (
        ""
      )}
    </SafeAreaView>
  );
};

export default ChatList;
