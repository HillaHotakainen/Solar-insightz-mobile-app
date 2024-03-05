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

const DayAhBatInOut = ({ dataSet }) => {
  const [showInfo, setShowInfo] = useState(false);

  // Take the Ah bat in values coordinates
  const AhBatInValues = dataSet["Day Values"]
    .map((item, index) => {
      if (index >= 4) {
        return {
          x: item[3],
          y: item.__EMPTY_3,
        };
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);

  // Take the Ah bat out values coordinates
  const AhBatOutValues = dataSet["Day Values"]
    .map((item, index) => {
      if (index >= 4) {
        return {
          x: item[3],
          y: item.__EMPTY_4,
        };
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);

  return (
    <View>
      <View style={styles.chartHeader}>
        <Text style={styles.chartName}>Ah bat in/out</Text>
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
          valueName={"Ah bat in/out"}
        />
      </View>
      <Chart
        style={{
          height: 400,
          width: screenWidth - 10,
          backgroundColor: "#eee",
        }}
        xDomain={{ min: 0, max: 28 }}
        yDomain={{ min: 0, max: 6.0 }}
        padding={{ left: 30, top: 10, bottom: 40, right: 30 }}
      >
        <VerticalAxis
          tickValues={[
            0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0,
          ]}
        />
        <HorizontalAxis tickCount={8} />
        <Line
          data={AhBatInValues}
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
                formatter: (v) => v.y.toString() + " Ah",
                shape: { width: 80, height: 30, color: "darkgreen" },
              }}
            />
          }
        />
        <Line
          data={AhBatOutValues}
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
                label: { fontSize: 20, dy: -26 },
                formatter: (v) => v.y.toString() + " Ah",
                shape: { width: 80, height: 30, dy: -20, color: "#32C762" },
              }}
            />
          }
        />
      </Chart>
      <View style={styles.lineNamesContainer}>
        <View style={styles.darkLineName} />
        <Text>Ah bat in (Ah)</Text>
        <View style={styles.lightLineName} />
        <Text>Ah bat out (Ah)</Text>
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

export default DayAhBatInOut;
