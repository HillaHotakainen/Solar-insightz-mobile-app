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

const DaySocMinMax = ({ dataSet }) => {
  const [showInfo, setShowInfo] = useState(false);
  // Take the SOC min values coordinates
  const SOCminValues = dataSet["Day Values"]
    .map((item, index) => {
      if (index >= 4) {
        return {
          x: item[3],
          y: item.__EMPTY_7 * 100,
        };
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);

  // Take the SOC max values coordinates
  const SOCmaxValues = dataSet["Day Values"]
    .map((item, index) => {
      if (index >= 4) {
        return {
          x: item[3],
          y: item.__EMPTY_8 * 100,
        };
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);

  return (
    <View>
      <View style={styles.chartHeader}>
        <Text style={styles.chartName}>SOC max/min</Text>
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
          valueName={"SOC min/max"}
        />
      </View>
      <Chart
        style={{
          height: 400,
          width: screenWidth - 10,
          backgroundColor: "#eee",
        }}
        xDomain={{ min: 0, max: 28 }}
        yDomain={{ min: 0, max: 100 }}
        padding={{ left: 30, top: 40, bottom: 20, right: 30 }}
      >
        <VerticalAxis
          tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
        />
        <HorizontalAxis tickCount={8} />
        <Line
          data={SOCmaxValues}
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
                formatter: (v) => v.y.toFixed(2) + "%",
                shape: { width: 80, height: 30, color: "darkgreen" },
              }}
            />
          }
        />
        <Line
          data={SOCminValues}
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
                formatter: (v) => v.y.toFixed(2) + "%",
                shape: { width: 80, height: 30, color: "#32C762" },
              }}
            />
          }
        />
      </Chart>
      <View style={styles.lineNamesContainer}>
        <View style={styles.darkLineName} />
        <Text>SOC max value</Text>
        <View style={styles.lightLineName} />
        <Text>SOC min value</Text>
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

export default DaySocMinMax;
