import { ScrollView, StyleSheet, View } from "react-native";
import SOCMinMax from "./charts/MonthValues/MonthSocMinMax";
import CLoadAndPanelMax from "./charts/MonthValues/MonthCLoadPanelMax";
import BatTempMinMax from "./charts/MonthValues/MonthBatTempMinMax";
import VMinMax from "./charts/MonthValues/MonthVMinMax";
import AhBatInOut from "./charts/MonthValues/MonthAhBatInOut";
import MonthLoadOffBar from "./charts/MonthValues/MonthLoadOffBar";
import MonthLoadOffOvercurrentBar from "./charts/MonthValues/MonthLoadOffOvercurrentBar";
import MonthLoadOffOvervoltageBar from "./charts/MonthValues/MonthLoadOffOvervoltageBar";
import MonthLoadOffPrePBar from "./charts/MonthValues/MonthLoadOffPrePBar";

const MonthValueCharts = ({ dataSet }) => {
  return (
    <View style={{ margin: 10 }}>
      <VMinMax dataSet={dataSet} />
      <AhBatInOut dataSet={dataSet} />
      <SOCMinMax dataSet={dataSet} />
      <MonthLoadOffPrePBar dataSet={dataSet} />
      <MonthLoadOffBar dataSet={dataSet} />
      <MonthLoadOffOvercurrentBar dataSet={dataSet} />
      <MonthLoadOffOvervoltageBar dataSet={dataSet} />
      <CLoadAndPanelMax dataSet={dataSet} />
      <BatTempMinMax dataSet={dataSet} />
    </View>
  );
};

export default MonthValueCharts;
