import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ShowAlert = ({ visible, onClose, message }) => {
  const alertMessages = [];

  if (
    message["Day Values"].some(
      (item, index) => index >= 4 && item.__EMPTY_18 > 60
    )
  ) {
    alertMessages.push(
      "Warning! \n\nBattery temperature is over 60°C in: \n\n Day Values"
    );
  }

  if (
    message["Day Values"].some(
      (item, index) => index >= 4 && item.__EMPTY_1 < 3
    )
  ) {
    alertMessages.push(
      "Warning! \n\nBattery voltage is below 3V in: \n\n Day Values"
    );
  }

  if (
    message["Day Values"].some(
      (item, index) => index >= 4 && item.__EMPTY_12 === 1
    )
  ) {
    alertMessages.push(
      "Warning! \n\nOverload event detected in: \n\n Day Values"
    );
  }

  if (
    message["Day Values"].some(
      (item, index) => index >= 4 && item.__EMPTY_13 === 1
    )
  ) {
    alertMessages.push(
      "Warning! \n\nOvervoltage event detected in: \n\n Day Values"
    );
  }

  if (
    message["Day Values"].some(
      (item, index) => index === 1 && item["Bat temp max"] > 60
    )
  ) {
    alertMessages.push(
      "Warning! \n\nBattery temperature is over 60°C in: \n\n Day Values"
    );
  }

  if (
    message["Months Values"].some(
      (item, index) => index === 1 && item["V_min"] < 3
    )
  ) {
    alertMessages.push(
      "Warning! \n\nBattery voltage is below 3V in: \n\n Months Values"
    );
  }

  if (
    message["Months Values"].some(
      (item, index) => index === 1 && item["#load overcurrent"] === 1
    )
  ) {
    alertMessages.push(
      "Warning! \n\nOverload event detected in: \n\n Months Values"
    );
  }

  if (
    message["Months Values"].some(
      (item, index) => index === 1 && item["# overvoltage"] === 1
    )
  ) {
    alertMessages.push(
      "Warning! \n\nOvervoltage event detected in: \n\n Months Values"
    );
  }

  if (alertMessages.length === 0) {
    // Don't render anything if no conditions are met
    return null;
  }

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.modalOverlay}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {alertMessages.map((alert, index) => (
              <View key={index} style={styles.infoContainer}>
                <Text style={styles.infoText}>{alert}</Text>
              </View>
            ))}
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>OK</Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 20,
  },
  infoContainer: {
    width: 300,
    padding: 40,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#32C762",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    width: "80%",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});
export default ShowAlert;
