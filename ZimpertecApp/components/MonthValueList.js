import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import jsonData from "../ParsingToJSON/exel-to-JSON.json";
import FilterPopUp from "./FilterPopUp";
import MonthValueCharts from "./MonthValueCharts";
import MonthsValuesDescriptions from "./TableDescriptions/MonthsValuesDescriptions";

const MonthDataToList = ({ route }) => {
  const { dataSet } = route.params;
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showChart, setShowChart] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    VMax: true,
    VMin: true,
    AHPanel: true,
    AHBatOut: true,
    AHBatIn: true,
    AhLoadOutput: true,
    SOCMin: true,
    SOCMax: true,
    DaysNoCredit: true,
    ExtraDays: true,
    LoadOff: true,
    BatteryFull: true,
    ChargingOvercurr: true,
    LoadOvercurrent: true,
    Overvoltage: true,
    Overtemp: true,
    CLoadMax: true,
    SysUseUnderTwentyFive: true,
    SysUseOverTwentyFive: true,
    SysUseOverFifty: true,
    SysUseOverSeventyFive: true,
    SysUseOverHundred: true,
    CPanelMax: true,
    BatTempMax: true,
    BatTempMin: true,
  });

  const onFilterChange = (filter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const onShowAll = () => {
    setSelectedFilters({
      VMax: true,
      VMin: true,
      AHPanel: true,
      AHBatOut: true,
      AHBatIn: true,
      AhLoadOutput: true,
      SOCMin: true,
      SOCMax: true,
      DaysNoCredit: true,
      ExtraDays: true,
      LoadOff: true,
      BatteryFull: true,
      ChargingOvercurr: true,
      LoadOvercurrent: true,
      Overvoltage: true,
      Overtemp: true,
      CLoadMax: true,
      SysUseUnderTwentyFive: true,
      SysUseOverTwentyFive: true,
      SysUseOverFifty: true,
      SysUseOverSeventyFive: true,
      SysUseOverHundred: true,
      CPanelMax: true,
      BatTempMax: true,
      BatTempMin: true,
    });
  };
  const openDescModal = (header) => {
    setSelectedHeader(header);
    setShowDescription(true);
  };
  const closeDescModal = () => {
    setShowDescription(false);
  };
  const item = ({ item, index }) => (
    <View style={{ flexDirection: "row" }}>
      <View style={index == 0 ? styles.firstColumn : styles.firstColumn2ndRow}>
        <Text style={styles.text}>{index == 0 ? "Month" : index}</Text>
      </View>
      {selectedFilters.VMax && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("V_max")}>
              <Text style={styles.text}>{"V_max"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item.V_max} V</Text>
          )}
        </View>
      )}
      {selectedFilters.VMin && (
        <View
          style={{
            ...styles.firstRow,
            backgroundColor:
              index === 0
                ? "#32C762"
                : item["V_min"] < 3
                ? "#fff380"
                : "transparent",
          }}
        >
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("V_min")}>
              <Text style={styles.text}>{"V_min"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item.V_min} V</Text>
          )}
        </View>
      )}
      {selectedFilters.AHPanel && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("AH-Panel to Sys")}>
              <Text style={styles.text}>{"Ah-Panel to Sys"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["AH-Panel to Sys"]} Ah</Text>
          )}
        </View>
      )}
      {selectedFilters.AHBatOut && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("AH-Bat-out")}>
              <Text style={styles.text}>{"AH-Bat-out"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["AH-Bat-out"]} Ah</Text>
          )}
        </View>
      )}
      {selectedFilters.AHBatIn && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("AH-Bat-in")}>
              <Text style={styles.text}>{"AH-Bat-in"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["AH-Bat-in"]} Ah</Text>
          )}
        </View>
      )}
      {selectedFilters.AhLoadOutput && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("Ah-Load output")}>
              <Text style={styles.text}>{"AH-Load output"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["AH-Load output"]} Ah</Text>
          )}
        </View>
      )}
      {selectedFilters.SOCMin && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("SOC avg min")}>
              <Text style={styles.text}>{"SOC avg min"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>
              {Math.round(item["SOC avg min"] * 100)}%
            </Text>
          )}
        </View>
      )}
      {selectedFilters.SOCMax && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("SOC avg max")}>
              <Text style={styles.text}>{"SOC avg max"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>
              {Math.round(item["SOC avg max"] * 100)}%
            </Text>
          )}
        </View>
      )}
      {selectedFilters.DaysNoCredit && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("days no credit")}>
              <Text style={styles.text}>{"days no credit"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["days no credit"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.ExtraDays && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("extra days")}>
              <Text style={styles.text}>{"extra days"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["extra days"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.LoadOff && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("# Load off")}>
              <Text style={styles.text}>{"# Load off"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["# Load off"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.BatteryFull && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("# Battery fully charged")}>
              <Text style={styles.text}>{"# Battery fully charged"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["# Battery fully charged"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.ChargingOvercurr && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("#charging overcurr")}>
              <Text style={styles.text}>{"#charging overcurr"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["#charging overcurr"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.LoadOvercurrent && (
        <View
          style={{
            ...styles.firstRow,
            backgroundColor:
              index === 0
                ? "#32C762"
                : item["#load overcurrent"] === 1
                ? "#fff380"
                : "transparent",
          }}
        >
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("#load overcurrent")}>
              <Text style={styles.text}>{"#load overcurrent"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["#load overcurrent"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.Overvoltage && (
        <View
          style={{
            ...styles.firstRow,
            backgroundColor:
              index === 0
                ? "#32C762"
                : item["# overvoltage"] === 1
                ? "#fff380"
                : "transparent",
          }}
        >
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("# overvoltage")}>
              <Text style={styles.text}>{"# overvoltage"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["# overvoltage"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.Overtemp && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("# overtemperature")}>
              <Text style={styles.text}>{"# overtemperature"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["# overtemperature"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.CLoadMax && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("C load max")}>
              <Text style={styles.text}>{"C load max"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>
              {Math.round(item["C load max"] * 100)} %
            </Text>
          )}
        </View>
      )}
      {selectedFilters.SysUseUnderTwentyFive && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("days SYS use <25%")}>
              <Text style={styles.text}>{"days SYS use <25%"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["days SYS use <25%"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.SysUseOverTwentyFive && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("days SYS use >25%")}>
              <Text style={styles.text}>{"days SYS use >25%"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["days SYS use >25%"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.SysUseOverFifty && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("days SYS use >50%")}>
              <Text style={styles.text}>{"days SYS use >50%"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["days SYS use >50%"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.SysUseOverSeventyFive && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("days SYS use >75%")}>
              <Text style={styles.text}>{"days SYS use >75%"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["days SYS use >75%"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.SysUseOverHundred && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("days SYS use >100%\r\n")}>
              <Text style={styles.text}>{"days SYS use >100%\r\n"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["days SYS use >100%\r\n"]}</Text>
          )}
        </View>
      )}
      {selectedFilters.CPanelMax && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("C panel max")}>
              <Text style={styles.text}>{"C panel max"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>
              {Math.round(item["C panel max"] * 100)} %
            </Text>
          )}
        </View>
      )}
      {selectedFilters.BatTempMax && (
        <View
          style={{
            ...styles.firstRow,
            backgroundColor:
              index === 0
                ? "#32C762"
                : item["Bat temp max"] > 60
                ? "#fff380"
                : "transparent",
          }}
        >
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("Bat temp max")}>
              <Text style={styles.text}>{"Bat temp max"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["Bat temp max"]}°C</Text>
          )}
        </View>
      )}
      {selectedFilters.BatTempMin && (
        <View style={index == 0 ? styles.firstRow : styles.valueColumn}>
          {index == 0 ? (
            <Pressable onPress={() => openDescModal("Bat temp min")}>
              <Text style={styles.text}>{"Bat temp min"} </Text>
            </Pressable>
          ) : (
            <Text style={styles.text}>{item["Bat Temp min"]}°C</Text>
          )}
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setShowChart(true)}>
          <Text style={{ fontSize: 16 }}>Chart</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setShowChart(false)}>
          <Text style={{ fontSize: 16 }}>Table</Text>
        </Pressable>
      </View>
      {showChart ? (
        <ScrollView contentContainerStyle={styles.chartContainer}>
          <MonthValueCharts dataSet={dataSet} />
        </ScrollView>
      ) : (
        <View style={{ flex: 1 }}>
          <Pressable
            style={styles.filterButton}
            onPress={() => setShowFilter(true)}
          >
            <Text style={{ fontSize: 16 }}>Filters</Text>
          </Pressable>
          <FilterPopUp
            visible={showFilter}
            onClose={() => setShowFilter(false)}
            onFilterChange={onFilterChange}
            selectedFilters={selectedFilters}
            onShowAll={onShowAll}
          />
          <MonthsValuesDescriptions
            visible={showDescription}
            onClose={closeDescModal}
            selectedHeader={selectedHeader}
          />
          <ScrollView horizontal contentContainerStyle={styles.tableContainer}>
            <FlatList
              data={dataSet["Months Values"]}
              renderItem={item}
              stickyHeaderIndices={[0]}
            />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  tableContainer: {
    // Without this it goes out of the screen and margin doesn't work for the right side
    paddingRight: 30,
    marginTop: 20,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  firstColumn: {
    width: 70,
    backgroundColor: "#32C762",
    borderWidth: 1,
    padding: 5,
  },
  firstColumn2ndRow: {
    width: 70,
    backgroundColor: "#d2dfd3",
    borderWidth: 1,
  },
  firstRow: {
    width: 100,
    backgroundColor: "#32C762",
    borderWidth: 1,
    justifyContent: "center",
  },
  valueColumn: {
    width: 100,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: 2,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 10,
    marginTop: 0,
    width: "35%",
    borderRadius: 7,
    backgroundColor: "#32C762",
  },
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    width: 100,
    borderRadius: 7,
    backgroundColor: "#32C762",
  },
});

export default MonthDataToList;
