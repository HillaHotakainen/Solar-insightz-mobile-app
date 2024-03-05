import { Modal, View, Text, Button, StyleSheet } from "react-native";

const CurrentValuesDescriptions = ({ visible, onClose, selectedHeader }) => {
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
      case "V_max":
        return "Maximum Voltage duirng the actual day \n \nUnits/resolution: 100mV";
      case "V_min":
        return "Minimum Voltage during the actual day \n \nUnits/resolution: 100mV";
      case "AH-Panel to Sys":
        return "Ah delivered to System by Panel input \n \nUnits/resolution: 0,1 Ah";
      case "AH-Bat-in":
        return "Ah charged to Battery\n \nUnits/resolution: 0,1 Ah";
      case "AH-Bat-out":
        return "Ah discharged from Battery \n \nUnits/resolution: 0,1 Ah";
      case "Ah-Load out":
        return "Ah supply to load (clacluated value)\n \nUnits/resolution: 0,1 Ah";
      case "C panel max":
        return "Panel current in % of charger nominal current\n \nUnits/resolution: 10%";
      case "SOC min":
        return "Minimum State Of Charge during the actual day\n \nUnits/resolution: 6,25%";
      case "SOC_max":
        return "Maximum State Of Charge during the actual day\n \nUnits/resolution: 6,25%";
      case "Load Off":
        return "Load disconnect because of low battery State of Charge\n \n0=no / 1=Load Off\n \nUnits/resolution: yes/no";
      case "n.a.":
        return "n.a.";
      case "Charging off (not LS)":
        return "n.a.";
      case "Load off overcurrent":
        return "Load disconnect because of overload \n \n0=no / 1=overload\n \nUnits/resolution: yes/no";
      case "load off overvoltage":
        return "Load disconnect because of battery overvoltage\n \n0=no / 1=overvoltage\n \nUnits/resolution: yes/no";
      case "Load off PreP":
        return "Load disconnected because lack of credit (PAYG only)\n \nUnits/resolution: 0=no / 1=no credit\n \nUnits/resolution: yes/no";
      case "overtemp":
        return "Charger temperature\n \nLevel1: <60°C=OK\nLevel2: 60°C to 70°C\nLevel3: 70°C to 80°C\nLevel4: >80°C";
      case "C load max":
        return "Maximum Load current during the actual day\n \nin % of nominal panel current\n \nUnit/resolution: 1%";
      case "Bat temp max":
        return "Maximum Battery temperature during the actual day\n \nRange: -25...+80°C\n \nUnit/resolution: 7°C";
      case "Bat Temp min":
        return "Minimum Battery temperature during the actual day\n \nRange: -25...+80°C\n \nUnit/resolution: 7°C";
      case "System Use":
        return "Energy use per day related to battery capacity\n \nUnit/resolution: %";
      default:
        return "Current Values description...";
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

export default CurrentValuesDescriptions;
