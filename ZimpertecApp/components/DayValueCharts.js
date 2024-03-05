import { View, Text, StyleSheet } from "react-native";
import DaySocMinMax from "./charts/DayValues/DaySocMinMax";
import LoadOffBar from "./charts/DayValues/LoadOffBar";
import LoadOffOvercurrentBar from "./charts/DayValues/LoadOffOvercurrentBar";
import LoadOffOvervoltageBar from "./charts/DayValues/LoadOffOvervoltageBar";
import LoadOffPrePBar from "./charts/DayValues/LoadOffPrePBar";
import DayAhBatInOut from "./charts/DayValues/DayAhBatInOut";
import DayVMinMax from "./charts/DayValues/DayVMinMax";
import DayBatTempMinMax from "./charts/DayValues/DayBatTempMinMax";
import DayCLoadPanelMax from "./charts/DayValues/DayCLoadPanelMax";

const DayValueCharts = ({ dataSet }) => {
  return (
    <View style={{ margin: 10 }}>
      <DayVMinMax dataSet={dataSet} />
      <DayAhBatInOut dataSet={dataSet} />
      <DaySocMinMax dataSet={dataSet} />
      <LoadOffBar dataSet={dataSet} />
      <LoadOffOvercurrentBar dataSet={dataSet} />
      <LoadOffOvervoltageBar dataSet={dataSet} />
      <LoadOffPrePBar dataSet={dataSet} />
      <DayCLoadPanelMax dataSet={dataSet} />
      <DayBatTempMinMax dataSet={dataSet} />
    </View>
  );
};

export default DayValueCharts;
