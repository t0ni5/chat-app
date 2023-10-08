/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/style-prop-object */
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/static/home";
import Chat from "./app/static/chat";
import ChatList from "./app/static/chat-list";
import { Provider } from "react-redux";
import { store } from "./store";

export type RootStackParamList = {
  Home: undefined;
  ChatList: undefined;
  Chat: {
    id: string;
    name: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChatList" component={ChatList} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
        <StatusBar style={"auto"} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
