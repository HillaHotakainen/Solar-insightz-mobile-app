import { PieChart } from "react-native-gifted-charts";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SosValuesPieChart = ({ dataSet }) => {
  const PieChartKeys = [
    "SYS use > 100%",
    "SYS use > 75%",
    "SYS use > 50%",
    "SYS use > 25%",
    "SYS use < 25%",
  ];
  const pieData = [
    {
      value: dataSet["SoS Values"][1]["SYS use > 100%"],
      color: "#4EB3D3",
      text: dataSet["SoS Values"][1]["SYS use > 100%"],
    },
    {
      value: dataSet["SoS Values"][1]["SYS use > 75%"],
      color: "#FFB74D",
      text: dataSet["SoS Values"][1]["SYS use > 75%"],
    },
    {
      value: dataSet["SoS Values"][1]["SYS use > 50%"],
      color: "#81C784",
      text: dataSet["SoS Values"][1]["SYS use > 50%"],
    },
    {
      value: dataSet["SoS Values"][1]["SYS use > 25%"],
      color: "#9575CD",
      text: dataSet["SoS Values"][1]["SYS use > 25%"],
    },
    {
      value: dataSet["SoS Values"][1]["SYS use < 25%"],
      color: "#FFF176",
      text: dataSet["SoS Values"][1]["SYS use < 25%"],
    },
  ];

  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const PieChartInfo = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 80,
              marginRight: 20,
            }}
          >
            {renderDot("#4EB3D3")}
            <Text style={{ color: "black" }}>SYS use {">"} 100%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 80 }}
          >
            {renderDot("#FFB74D")}
            <Text style={{ color: "black" }}>SYS use {">"} 75%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 80,
              marginRight: 20,
            }}
          >
            {renderDot("#81C784")}
            <Text style={{ color: "black" }}>SYS use {">"} 50%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 90 }}
          >
            {renderDot("#9575CD")}
            <Text style={{ color: "black" }}>SYS use {">"} 25%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 90 }}
          >
            {renderDot("#FFF176")}
            <Text style={{ color: "black" }}>SYS use {"<"} 25%</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
          width: 500,
        }}
      >
        System energy usage values
      </Text>
      <PieChart
        showText
        textColor="black"
        radius={100}
        textSize={15}
        data={pieData}
      />
      {PieChartInfo()}
    </View>
  );
};

export default SosValuesPieChart;
