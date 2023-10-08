import { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import { styles } from "../../../assets/styles";
import { useAppDispatch } from "../../../hooks/hooks";
import { setUser, setUserId } from "../../core/user/store/user.slice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: React.FC<HomeProps> = ({ navigation }: HomeProps) => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");

  const handleSignIn = () => {
    if (userName.trim()) {
      dispatch(setUser(userName));
      dispatch(setUserId(uuidv4()));
      navigation.navigate("ChatList");
    } else {
      Alert.alert("Username is required.");
    }
  };

  return (
    <SafeAreaView style={styles.loginScreen}>
      <View style={styles.loginScreen}>
        <Text style={styles.loginHeading}>Sign in</Text>
        <View style={styles.loginInputContainer}>
          <TextInput
            autoCorrect={false}
            placeholder="Enter your username"
            style={styles.loginInput}
            onChangeText={(value) => setUserName(value)}
          />
        </View>

        <Pressable onPress={handleSignIn} style={styles.loginButton}>
          <View>
            <Text style={styles.loginButtonText}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
