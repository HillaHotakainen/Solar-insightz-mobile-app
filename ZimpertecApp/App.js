import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminHomeScreen from "./AdminHomeScreen";
import LoginScreen from "./LoginScreen";
import { RootSiblingParent } from "react-native-root-siblings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminHome"
            component={AdminHomeScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="TechnicianHome" component={TechnianHomeScreen} 
          options={{ independent: true }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
