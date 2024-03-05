import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import ShowDataScreen from "./ShowDataScreen";
import DownloadData from "./components/DownloadData";
import DataSelection from "./components/DataSelection";
import ShowCurrentValues from "./components/ShowCurrentValues";
import SelfTest from "./components/SelfTest";

const Drawer = createDrawerNavigator();

function AdminHomeScreenNavigation({ navigation }) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showSelection, setShowSelection] = useState(false);
  const [selectedDataSet, setSelectedDataSet] = useState(null);

  const handleDownloadData = () => {
    DownloadData(setDownloading, setDownloadSuccess);
  };

  useEffect(() => {
    if (selectedDataSet) {
      navigation.navigate("Past Data", { dataSet: selectedDataSet });
    }
  }, [selectedDataSet]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image
          style={{ resizeMode: "contain", height: 140, width: 210 }}
          source={require("./assets/logo.png")}
          alt="logo"
        ></Image>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>System connected</Text>
      </View>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={handleDownloadData}
          disabled={downloading}
        >
          <View style={styles.textAndLogo}>
            <Feather name="download" size={26} color="white"></Feather>
            <Text style={styles.buttonText}>Download Data</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Self Test")}
        >
          <View style={styles.textAndLogo}>
            <FontAwesome5 name="cogs" size={26} color="white" />
            <Text style={styles.buttonText}>Self Test</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Current Data")}
        >
          <View style={styles.textAndLogo}>
            <Octicons name="graph" size={26} color="white"></Octicons>
            <Text style={styles.buttonText}>Current Data</Text>
          </View>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setShowSelection(true)}>
          <View style={styles.textAndLogo}>
            <Octicons name="graph" size={26} color="white"></Octicons>
            <Text style={styles.buttonText}>Past Data</Text>
          </View>
        </Pressable>
        <Pressable style={styles.button} onPress={ShareData}>
          <View style={styles.textAndLogo}>
            <Feather name="share" size={26} color="white" />
            <Text style={styles.buttonText}>Share Data</Text>
          </View>
        </Pressable>
      </ScrollView>
      {downloading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#32C762" />
          <Text style={styles.loadingText}>Downloading Data...</Text>
        </View>
      )}
      <DataSelection
        isVisible={showSelection}
        onSelect={(dataSet) => {
          setSelectedDataSet(dataSet);
          setShowSelection(false);
        }}
        onClose={() => setShowSelection(false)}
      />
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = async () => {
    setLogoutModalVisible(false);
    // Remove the token and role from AsyncStorage
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("role");
    // Navigate to the Login screen
    props.navigation.navigate("Login");
  };

  const cancelLogout = () => {
    setLogoutModalVisible(false);
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      {/*DrawerItemlist will list all the existing lists from the Drawer.Navigator. */}
      <DrawerItemList {...props} />
      <DrawerItem
        label="Software update"
        onPress={SoftwareUpdate}
        icon={() => (
          <MaterialIcons
            name="system-update"
            size={16}
            color={"black"}
            style={styles.drawerItemStyle}
          />
        )}
      />
      <DrawerItem
        label="Share Data"
        onPress={ShareData}
        icon={() => (
          <Feather
            name="share"
            size={16}
            color={"black"}
            style={styles.drawerItemStyle}
          />
        )}
      />
      {/*Add Logout Item. Performs logout logic */}
      <DrawerItem label="Logout" onPress={handleLogout} />
      <Modal isVisible={isLogoutModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Are you sure you want to log out?
          </Text>
          <View style={styles.modalButtonContainer}>
            <Pressable style={styles.modalButton} onPress={confirmLogout}>
              <Text style={styles.modalButtonText}>Yes</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={cancelLogout}>
              <Text style={styles.modalButtonText}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </DrawerContentScrollView>
  );
}

const ShareData = () => {
  const showToast = () => {
    Toast.show("Shared successfully!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
  showToast();
};

const SoftwareUpdate = () => {
  const showToast = () => {
    Toast.show("Software already up to date!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
  showToast();
};

function AdminHomeScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerRight: () => <DrawerToggleButton tintColor="black" />,
        headerLeft: () => null,
        drawerActiveTintColor: "#32C762",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={AdminHomeScreenNavigation}
        options={{
          headerTitle: "",
          drawerIcon: () => (
            <Feather
              name="home"
              size={16}
              color={"black"}
              style={styles.drawerItemStyle}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Self Test"
        component={SelfTest}
        options={{
          drawerIcon: () => (
            <FontAwesome5
              name="cogs"
              size={16}
              color="black"
              style={styles.drawerItemStyle}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Current Data"
        component={ShowCurrentValues}
        options={{
          headerTitle: "",
          drawerIcon: () => (
            <Octicons
              name="graph"
              size={16}
              color={"black"}
              style={styles.drawerItemStyle}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Past Data"
        component={ShowDataScreen}
        options={{
          headerTitle: "",
          drawerIcon: () => (
            <Octicons
              name="graph"
              size={16}
              color={"black"}
              style={styles.drawerItemStyle}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    rowGap: 10,
    paddingTop: 30,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    justifyContent: "center",
    color: "#32C762",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center", // the text is centered withing the button element
    margin: "2.7%",
    paddingLeft: 20,
    borderRadius: 7,
    elevation: 3, // gives the shadow
    backgroundColor: "#32C762",
    width: 316,
    height: 70,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  loadingText: {
    fontSize: 20,
    color: "white",
  },
  buttonText: { fontSize: 25, color: "#fff", margin: 5, padding: 5 },
  textAndLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 7,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalButton: {
    backgroundColor: "#32C762",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
  drawerItemStyle: {
    alignSelf: "center",
    marginRight: 6,
    paddingLeft: 2,
  },
});

export default AdminHomeScreen;
