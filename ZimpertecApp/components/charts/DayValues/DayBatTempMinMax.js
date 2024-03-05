import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
import {
  Chart,
  Line,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from "react-native-responsive-linechart";
import ExplanationPopUp from "../../DayInfoPopUp";

const screenWidth = Dimensions.get("window").width;

const DayBatTempMinMax = ({ dataSet }) => {
  const [showInfo, setShowInfo] = useState(false);

  // Take the Bat temp min values coordinates
  const BatTempMinValues = dataSet["Day Values"]
    .map((item, index) => {
      if (index >= 4) {
        return {
          x: item[3],
          y: item.__EMPTY_19,
        };
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);

  // Take the Bat temp max values coordinates
  const BatTempMaxValues = dataSet["Day Values"]
    .map((item, index) => {
      if (index >= 4) {
        return {
          x: item[3],
          y: item.__EMPTY_18,
        };
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);

  return (
    <View>
      <View style={styles.chartHeader}>
        <Text style={styles.chartName}>Bat temp min/max</Text>
        <TouchableOpacity onPress={() => setShowInfo(true)}>
          <Ionicons
            name={"information-circle-outline"}
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <ExplanationPopUp
          visible={showInfo}
          onClose={() => setShowInfo(false)}
          valueName={"Bat temp min/max"}
        />
      </View>
      <Chart
        style={{
          height: 400,
          width: screenWidth - 10,
          backgroundColor: "#eee",
        }}
        xDomain={{ min: 0, max: 28 }}
        yDomain={{ min: -20, max: 80 }}
        padding={{ left: 30, top: 40, bottom: 20, right: 30 }}
      >
        <VerticalAxis
          tickValues={[-20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80]}
        />
        <HorizontalAxis tickCount={8} />
        <Line
          data={BatTempMaxValues}
          smoothing="cubic-spline"
          theme={{
            stroke: { color: "darkgreen", width: 3 },
            scatter: {
              default: { width: 10, height: 10, rx: 8, color: "darkgreen" },
              selected: { color: "black" },
            },
          }}
          // Shows y axis value when pressing the datapoint
          tooltipComponent={
            <Tooltip
              theme={{
                label: { fontSize: 20, dy: 13 },
                formatter: (v) => v.y.toString() + "°C",
                shape: { width: 80, height: 30, color: "darkgreen" },
              }}
            />
          }
        />
        <Line
          data={BatTempMinValues}
          smoothing="cubic-spline"
          theme={{
            stroke: { color: "#32C762", width: 3 },
            scatter: {
              default: { width: 10, height: 10, rx: 8, color: "#32C762" },
              selected: { color: "black" },
            },
          }}
          // Shows y axis value when pressing the datapoint
          tooltipComponent={
            <Tooltip
              theme={{
                label: { fontSize: 20, dy: 13 },
                formatter: (v) => v.y.toString() + "°C",
                shape: { width: 80, height: 30, color: "#32C762" },
              }}
            />
          }
        />
      </Chart>
      <View style={styles.lineNamesContainer}>
        <View style={styles.darkLineName} />
        <Text>Bat temp max (°C)</Text>
        <View style={styles.lightLineName} />
        <Text>Bat temp min (°C)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineNamesContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  darkLineName: {
    width: 20,
    height: 20,
    backgroundColor: "darkgreen",
    marginTop: 5,
  },
  lightLineName: {
    width: 20,
    height: 20,
    backgroundColor: "#32C762",
    marginTop: 5,
  },
  chartName: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  chartHeader: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 20,
  },
});

export default DayBatTempMinMax;
