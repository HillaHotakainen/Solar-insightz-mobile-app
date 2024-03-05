import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ExplanationPopUp = ({ visible, onClose, valueName }) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {valueName == "V min/max"
              ? "Maximum and minimum voltage during the actual day \n\n" +
                "Units/resolution: 100 mV"
              : valueName == "Ah bat in/out"
              ? "Out: Ah discharged from Battery \nIn: Ah charged to Battery \n\n" +
                "Units/resolution: 1 Ah"
              : valueName == "SOC min/max"
              ? "Minimum and maximum State of Charge during the actual day \n\n" +
                "Units/resolution: 6,25 %"
              : valueName == "C load/panel max"
              ? "C panel max: current in % of charger nominal current\n\nUnits/resolution: 10%\n \n" +
                "C load max: current during the actual day in % of nominal panel current\n \n" +
                "Units/resolution: 1 %"
              : valueName == "Bat temp min/max"
              ? "Maximum/Minimum Battery temperature during the actual day \n\n" +
                "Range: -25...+80 °C \n\n" +
                "Units/resolution: 7 °C"
              : valueName == "Load off"
              ? "Number of Load off because of low battery SOC during the Month"
              : valueName == "Load off overcurrent"
              ? "Number of days with load overcurrent events"
              : valueName == "Load off overvoltage"
              ? "Number of days with load overvoltage events"
              : valueName == "Load off PreP"
              ? "Days without Credit (PAYG only)"
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
    padding: 40,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default ExplanationPopUp;
