import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  View,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAvoidingView, Platform } from "react-native";

import { useState } from "react";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (username === "admin" && password === "admin") {
      // Perform authentication logic here (e.g., API call)
      // Save the role in AsyncStorage
      await AsyncStorage.setItem("role", "admin");
      navigation.navigate("AdminHome");
    } else if (username === "technician" && password === "technician") {
      await AsyncStorage.setItem("role", "technician");
      // Goes in the same view for now
      navigation.navigate("AdminHome");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="auto"></StatusBar>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
          alt="logo"
        ></Image>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={"#32C762"}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#32C762"}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}> Login</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  logoContainer: { margin: 25 },

  logo: {
    resizeMode: "contain",
    height: 200,
    width: 300,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 15,
  },
  button: {
    margin: 7,
    backgroundColor: "#32C762",
    color: "#fff",
    height: 40,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 22,
    color: "#fff",
  },

  input: {
    height: 40,
    width: "80%",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#32C762",
    borderRadius: 7,
  },
});

export default LoginScreen;
