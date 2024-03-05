import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Pressable, SafeAreaView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import SysValueList from "./components/SysValueList";
import SosValueList from "./components/SosValueList";
import DayValueList from "./components/DayValueList";
import MonthValueList from "./components/MonthValueList";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ShowAlert from "./components/Alert";

function GetSystemID({ dataSet }) {
  let idString = "";

  // extracting the system ID string from EXCEL columns
  Object.entries(dataSet["SYS Values"][3]).forEach(([key, value]) => {
    if (key !== "__EMPTY") {
      idString += `${String(value)}`;
    }
  });

  return (
    // system informatios and layouting
    <SafeAreaView>
      <Text style={styles.systemTitle}>System ID:</Text>
      <Text>{idString}</Text>
      <View style={styles.dashedLine}></View>
      <Text style={styles.systemTitle}>System type:</Text>
      <Text style={{ textAlign: "center" }}>DC SHS</Text>
      <View style={styles.dashedLine}></View>
      <Text style={styles.systemTitle}>Data downloaded at:</Text>
      <Text style={{ textAlign: "center" }}>Date - Time</Text>
    </SafeAreaView>
  );
}

function ShowDataNavigation({ navigation, route }) {
  const { dataSet } = route.params;
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    setShowAlert(true); // Reset showAlert to true when component mounts
  }, [dataSet]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <SimpleLineIcons
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.heading}>Past Data</Text>
        <View></View>
      </View>
      <GetSystemID dataSet={dataSet}></GetSystemID>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Sys Values", { dataSet: dataSet })
          }
        >
          <Text style={styles.buttonText}>System Values</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("SoS Values", { dataSet: dataSet })
          }
        >
          <Text style={styles.buttonText}>State of System Values</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Day Values", { dataSet: dataSet })
          }
        >
          <Text style={styles.buttonText}>Day Values</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Months Values", { dataSet: dataSet })
          }
        >
          <Text style={styles.buttonText}>Months Values</Text>
        </Pressable>
      </View>
      <ShowAlert
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        message={dataSet}
      />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
function ShowDataScreen({ route }) {
  const { dataSet } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    // Handle navigation when dataSet changes
    if (dataSet) {
      navigation.navigate("Admin view", { dataSet });
    }
  }, [dataSet, navigation]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Admin view"
        component={ShowDataNavigation}
        options={{
          headerShown: false,
        }}
        initialParams={{ dataSet: dataSet }}
      ></Stack.Screen>
      <Stack.Screen name="Sys Values" component={SysValueList}></Stack.Screen>
      <Stack.Screen name="SoS Values" component={SosValueList}></Stack.Screen>
      <Stack.Screen name="Day Values" component={DayValueList}></Stack.Screen>
      <Stack.Screen
        name="Months Values"
        component={MonthValueList}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    rowGap: 30,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  systemTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  dashedLine: {
    height: 10,
    borderColor: "black",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flexWrap: "wrap", //will get the buttons into two row and columns
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center", // the text is centered withing the button element
    margin: "2.7%", // margin makes the button align into two rows and columns
    borderRadius: 7,
    elevation: 3, // gives the shadow
    backgroundColor: "#32C762",
    width: 115,
    height: 115,
  },
  buttonText: {
    fontSize: 25,
    color: "#fff",
    margin: 5,
    padding: 5,
  },
});

export default ShowDataScreen;
