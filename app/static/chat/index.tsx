import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { useAppSelector } from "../../../hooks/hooks";
import {
  imageSelector,
  userIdSelector,
  userSelector,
} from "../../core/user/store/user.selectors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import socket from "../../../utils/socket";
import { v4 as uuidv4 } from "uuid";

type ChatProps = NativeStackScreenProps<RootStackParamList, "Chat">;

const Chat: React.FC<ChatProps> = ({ navigation }: ChatProps) => {
  const user = useAppSelector(userSelector);
  const userId = useAppSelector(userIdSelector);
  const usersImage = useAppSelector(imageSelector);
  const [messages, setMessages] = useState<IMessage[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: usersImage,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={() => console.log("logout")}
        >
          <Text>logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hey",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "User2",
          avatar: "https://loremflickr.com/140/140/dog",
        },
      },
      {
        _id: 2,
        text: "whats up",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "User3",
          avatar: "https://loremflickr.com/140/140/dog",
        },
      },
      {
        _id: 3,
        text: "heiheihei",
        createdAt: new Date(),
        user: {
          _id: 3,
          name: "user",
          avatar: "https://loremflickr.com/140/140/dog",
        },
      },
      {
        _id: 4,
        text: "Message3",
        createdAt: new Date(),
        user: {
          _id: userId ?? 5,
          name: "user",
          avatar: "https://loremflickr.com/140/140/dog",
        },
      },
    ]);
  }, []);

  useEffect(() => {
    socket.on("message", (message: string) => {
      const newMessage = {
        _id: uuidv4(),
        text: message,
        createdAt: new Date(),
        user: {
          _id: userId ?? 0,
          name: "user",
          avatar: "https://loremflickr.com/140/140/dog",
        },
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [newMessage]),
      );
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ title: user ?? "Chat" });
  }, []);

  const onSend = useCallback((newMessages: IMessage[]) => {
    socket.emit("message", newMessages[0].text);
  }, []);
  return (
    <GiftedChat
      messages={messages as IMessage[]}
      showAvatarForEveryMessage={true}
      renderUsernameOnMessage={true}
      onSend={(messages: IMessage[]) => onSend(messages)}
      user={{
        _id: userId ?? 0,
        name: user ?? "user",
        avatar: "https://loremflickr.com/140/140/dog",
      }}
    />
  );
};

export default Chat;
