import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart } from "react-native-gifted-charts";
import ExplanationPopUp from "../../DayInfoPopUp";

const LoadOffOvervoltageBar = ({ dataSet }) => {
  const [showInfo, setShowInfo] = useState(false);
  // Extracting load off values from the JSON data
  const loadOffData = dataSet["Day Values"]
    .slice(4) // Remove header rows
    .map((item) => item["__EMPTY_13"]);

  // X-axis labels
  const xAxisLabels = dataSet["Day Values"]
    .slice(4) // Remove header rows
    .map((item) => item["3"]);

  const barData = xAxisLabels.map((label, index) => ({
    value: loadOffData[index],
    label,
    frontColor: "#32C762", // Color for the bars
    topLabelComponent: () => (
      <Text style={{ color: "black", fontSize: 18, marginBottom: 6 }}>
        {loadOffData[index]}
      </Text>
    ),
  }));

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Load off overvoltage</Text>
          <TouchableOpacity onPress={() => setShowInfo(true)}>
            <Ionicons
              name={"information-circle-outline"}
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <ExplanationPopUp
          visible={showInfo}
          onClose={() => setShowInfo(false)}
          valueName={"Load off overvoltage"}
        />
        <BarChart
          showFractionalValue
          showYAxisIndices
          noOfSections={4}
          maxValue={10}
          data={barData}
          disablePress
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default LoadOffOvervoltageBar;
