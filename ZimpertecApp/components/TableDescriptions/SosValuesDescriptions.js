import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const SosValuesDescriptions = ({ visible, onClose, selectedHeader }) => {
  const getHeaderDescription = () => {
    switch (selectedHeader) {
      case "CC-Operation days total":
        return "total number of days Controller is running\n \nUnits/resolution: 1 day";
      case "d-log":
        return "total number of days Datalogger is running without reset\n \nUnits/resolution: 1 day";
      case "cc-Power-down":
        return "Number of selfshut down of controller (eg. Very low battery cell voltage, Sleep mode)\n \nUnits/resolution: #";
      case "CC-Power-up":
        return "Number of Controller power up (after restart from sleep mode, after reconnect battery, after self power down)\n \nUnits/resolution: #";
      case "AH-Panel":
        return "Total number of Ah into the system\n \nUnits/resolution: 1 Ah";
      case "AH-Bat-in":
        return "Total number of Ah into the battery\n \nUnits/resolution: 1 Ah";
      case "AH-Bat-out":
        return "Total number of Ah out of the battery\n \nUnits/resolution: 1 Ah";
      case "Ah-Load out":
        return "Total number of Ah to Load (calculated value)\n \nUnits/resolution: 1 Ah";
      case "CC-Load disconnect":
        return "total number of Load output disconnect (eg. Low battery…)\n \nUnits/resolution: #";
      case "CC-AH-Load disconnect":
        return "n.a.";
      case "days no full":
        return "total number of days battery not fully charged\n \nUnits/resolution: 1 day";
      case "total-Credit-days":
        return "total number of Credit days PAYG only\n \nUnits/resolution: 1 day";
      case "OFF-no cred.":
        return "total number of days load off because not credit left PAYG only\n \nUnits/resolution: 1 day";
      case "extra days us":
        return "total number of days used with extra credit PAYG only\n \nUnits/resolution: 1 day";
      case "Credit-Days":
        return "total number of Credit days PAYG only\n \nUnits/resolution: 1 day";
      case "SYS use > 100%":
        return "total number of days with Energy use of >100% battery capacity\n \nUnits/resolution: 1 day";
      case "SYS use > 75%":
        return "total number of days with Energy use of 75 % to 100% battery capacity\n \nUnits/resolution: 1 day";
      case "SYS use > 50%":
        return "total number of days with Energy use of 50 % to 75% battery capacity\n \nUnits/resolution: 1 day";
      case "SYS use > 25%":
        return "total number of days with Energy use of 25 % to 50% battery capacity\n \nUnits/resolution: 1 day";
      case "SYS use < 25%":
        return "total number of days with Energy use of <25% battery capacity (calculated value)\n \nUnits/resolution: 1 day";
      default:
        return "Sos Values description...";
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

export default SosValuesDescriptions;
