import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ExplanationPopUp = ({ visible, onClose, valueName }) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {valueName == "V min/max"
              ? "Maximum and minimum voltage during the Month \n\n" +
                "Units/resolution: 100 mV"
              : valueName == "Ah bat in/out"
              ? "Out: Ah discharged from Battery \nIn: Ah charged to Battery \n\n" +
                "Units/resolution: 1 Ah"
              : valueName == "SOC min/max"
              ? "Average of Minimum/Maximum State of Charge during all days of Month \n\n" +
                "Units/resolution: 6,25 %"
              : valueName == "C load/panel max"
              ? "Panel max: Maximum Panel current during all days of month in % of Nominal charging current \n\n" +
                "Load max: Maximum load current during all days of month in % of nominal load current \n\n" +
                "Units/resolution: 1 %"
              : valueName == "Bat temp min/max"
              ? "Maximum/Minimum Battery temperature during the month \n\n" +
                "Range: -25...+80 °C \n\n" +
                "Units/resolution: 7 °C"
              : valueName == "Load off"
              ? "Load disconnect because of low battery State of Charge"
              : valueName == "Load off overcurrent"
              ? "Load disconnect because of overload"
              : valueName == "Load off overvoltage"
              ? "Load disconnect because of battery overvoltage"
              : valueName == "Load off PreP"
              ? "Load disconnected because lack of credit (PAYG only)"
              : ""}
          </Text>
          <Pressable style={{ alignSelf: "flex-start" }} onPress={onClose}>
            <Ionicons name={"close-circle-outline"} size={24} color="black" />
          </Pressable>
        </View>
      </View>
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
  infoText: {
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 10,
    width: 300,
    padding: 30,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default ExplanationPopUp;
