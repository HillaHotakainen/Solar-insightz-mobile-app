import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const SysValuesDescriptions = ({ visible, onClose, selectedHeader }) => {
  const getHeaderDescription = () => {
    switch (selectedHeader) {
      case "Sys Info Bytes":
        return "Number of Bytes in SYS-Info\n \nData Structure\n \nUnits/resolution: 24 Bytes";
      case "Max N Month":
        return "Maximum number of Months in Datalogger\n \nData Structure\n \nUnits/resolution: 12 Bytes";
      case "Max N Days":
        return "Maximum number of Months in Datalogger\n \nData Structure\n \nUnits/resolution: 28 Bytes";
      case "Bytes p Day":
        return "Number of Bytes per day\n \nData Structure\n \nUnits/resolution: 11 Bytes";
      case "SOS Bytes":
        return "Number of Bytes in SoS parameters\n \nData Structure\n \nUnits/resolution: 35 Bytes";
      case "Bytes per Month":
        return "Number of Bytes per Month\n \nData Structure\n \nUnits/resolution: 20 Bytes";
      case "CC-Type":
        return "Datalogger Type (internal only)\n \nUnits/resolution: #";
      case "firmware Version":
        return "CC-Firmware version\n \nShows products firmware ID\n \nUnits/resolution: 1 Ah";
      case "CC-L-Current":
        return "CC-Nominal Load Current\n \nUnits/resolution: xx.x Ampere ";
      case "CC-P-Current":
        return "CC-Nominal Panel Current\n \nUnits/resolution: xx.x Ampere";
      case "User Registration number":
        return "User ID (PAYG only)\n \nUnits/resolution: #";
      case "menustate":
        return "n.a.";
      case "Bat-Cap":
        return "Nominal Battery capacity (LS and Li-CC only)\n \nUnits/resolution: 1 Ah";
      case "Bat-Cap-day-use":
        return "n.a.";
      case "Bat-Cap-use-extra":
        return "n.a.";
      case "System factor bye":
        return "Multiplier (only high capacity CC/Systems)\n\nData Structure\n\nxxx";
      default:
        return "Sys Values description...";
    }
  };

  const closeDescription = () => {
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeDescription}
    >
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionContent}>
          <Text style={styles.descriptionHeaderText}>{selectedHeader}</Text>
          <Text style={styles.descriptionDescriptionText}>
            {getHeaderDescription()}
          </Text>
          <Button color={"#32C762"} title="Close" onPress={closeDescription} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  descriptionContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  descriptionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default SysValuesDescriptions;
