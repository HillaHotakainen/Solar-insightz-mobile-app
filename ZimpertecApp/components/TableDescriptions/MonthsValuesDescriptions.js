import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const MonthsValuesDescriptions = ({ visible, onClose, selectedHeader }) => {
  const getHeaderDescription = () => {
    switch (selectedHeader) {
      case "V_max":
        return "Maximum Voltage during the Month\n \nUnits/resolution: 100mV";
      case "V_min":
        return "Minimum Voltage during the Month\n \nUnits/resolution: 100mV";
      case "AH-Panel to Sys":
        return "Ah delivered to System by panel input\n \nUnits/resolution: 1 Ah";
      case "AH-Bat-out":
        return "Ah discharged from Battery\n \nUnits/resolution: 1 Ah";
      case "AH-Bat-in":
        return "Ah charged to Battery\n \nUnits/resolution: 1 Ah";
      case "Ah-Load output":
        return "Ah to Load\n \nUnits/resolution: 1 Ah";
      case "SOC avg min":
        return "Average of Minimum State of Charge during all days of Month\n \nUnits/resolution: 6,25%";
      case "SOC avg max":
        return "Average of Maximum State of Charge during all days of Month\n \nUnits/resolution: 6,25%";
      case "days no credit":
        return "Days without Credit (PAYG only)\n \nUnits/resolution: 1 day";
      case "extra days":
        return "Extra days used (PAYG only)\n \nUnits/resolution: 1 day";
      case "# Load off":
        return "Number of Load off because of low battery SOC during the Month\n \nUnits/resolution: 1 day";
      case "# Battery fully charged":
        return "Number of days of fully charged battery\n \nUnits/resolution: 1 day";
      case "#charging overcurr":
        return "Number of days with charging overcurrent events\n \nUnits/resolution: 2 day";
      case "#load overcurrent":
        return "Number of days with load overcurrent events\n \nUnits/resolution: 2 day";
      case "# overvoltage":
        return "Number of days with load overvoltage events\n \nUnits/resolution: 2 day";
      case "# overtemperature":
        return "Number of days with load overtemperature events\n \nUnits/resolution: 2 day";
      case "C load max":
        return "Maximum load current during all days of month in % of nominal load current\n \nin % of nominal load current\n \nUnits/resolution: 1%";
      case "days SYS use <25%":
        return "total number of days this month with Energy use of <25% battery capacity (calculated value)\n \nUnits/resolution: 1 day";
      case "days SYS use >25%":
        return "total number of days this month with Energy use of 25 % to 50% battery capacity\n \nmax. 28 days\n \nUnits/resolution: 1 day";
      case "days SYS use >50%":
        return "total number of days this month with Energy use of 50 % to 75% battery capacity\n \nmax. 28 days\n \nUnits/resolution: 1 day";
      case "days SYS use >75%":
        return "total number of days this month with Energy use of 75 % to 100% battery capacity\n \nmax. 28 days\n \nUnits/resolution: 1 day";
      case "days SYS use >100%\r\n":
        return "total number of days this month with Energy use of >100% battery capacity\n \nmax. 28 days\n \nUnits/resolution: 1 day";
      case "C panel max":
        return "Maximum Panle current during all days of month in % of Nominal charging current\n \nin %of nominal panel current\n \nUnits/resolution: 1%";
      case "Bat temp max":
        return "Maximum Battery temperature during the month\n \nRange: -25...+80°C\n \nUnits/resolution: 7°C";
      case "Bat temp min":
        return "Minimum Battery temperature during the month\n \nRange: -25...+80°C\n \nUnits/resolution: 7°C";
      default:
        return "Months Values description...";
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

export default MonthsValuesDescriptions;
