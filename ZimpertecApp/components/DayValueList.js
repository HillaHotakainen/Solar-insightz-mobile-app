import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DayValueCharts from "./DayValueCharts";
import FilterPopUp from "./FilterPopUp";
import DayValuesDescriptions from "./TableDescriptions/DayValuesDescriptions";

const DayDataToList = ({ route }) => {
  const { dataSet } = route.params;
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showChart, setShowChart] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    VMax: true,
    VMin: true,
    AHPanel: true,
    AHBatIn: true,
    AHBatOut: true,
    AhLoadOut: true,
    CPanelMax: true,
    SOCMin: true,
    SOCMax: true,
    LoadOff: true,
    na: true,
    ChargingOff: true,
    LoadOffOvercurrent: true,
    LoadOffOvervoltage: true,
    LoadOffPreP: true,
    Overtemp: true,
    CLoadMax: true,
    BatTempMax: true,
    BatTempMin: true,
    SystemUse: true,
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
      AHBatIn: true,
      AHBatOut: true,
      AhLoadOut: true,
      CPanelMax: true,
      SOCMin: true,
      SOCMax: true,
      LoadOff: true,
      na: true,
      ChargingOff: true,
      LoadOffOvercurrent: true,
      LoadOffOvervoltage: true,
      LoadOffPreP: true,
      Overtemp: true,
      CLoadMax: true,
      BatTempMax: true,
      BatTempMin: true,
      SystemUse: true,
    });
  };

  const openDescModal = (header) => {
    setSelectedHeader(header);
    setShowDescription(true);
  };
  const closeDescModal = () => {
    setShowDescription(false);
  };

  const item = ({ item, index }) =>
    (index == 2 || index >= 4) && (
      <View style={{ flexDirection: "row" }}>
        <View
          style={index == 2 ? styles.firstColumn : styles.firstColumn2ndRow}
        >
          <Text style={styles.text}>{item[3]}</Text>
        </View>
        {selectedFilters.VMax && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY)}>
                <Text style={styles.text}>{item.__EMPTY} </Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY} V</Text>
            )}
          </View>
        )}
        {selectedFilters.VMin && (
          <View
            style={{
              ...styles.firstRow, // keep the first row valueColumn styling
              backgroundColor:
                index === 2
                  ? "#32C762"
                  : item.__EMPTY_1 < 3
                  ? "#fff380"
                  : "transparent",
            }}
          >
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_1)}>
                <Text style={styles.text}>{item.__EMPTY_1}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_1} V</Text>
            )}
          </View>
        )}
        {selectedFilters.AHPanel && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_2)}>
                <Text style={styles.text}>{item.__EMPTY_2}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_2} Ah</Text>
            )}
          </View>
        )}
        {selectedFilters.AHBatIn && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_3)}>
                <Text style={styles.text}>{item.__EMPTY_3}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_3} Ah</Text>
            )}
          </View>
        )}
        {selectedFilters.AHBatOut && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_4)}>
                <Text style={styles.text}>{item.__EMPTY_4}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_4} Ah</Text>
            )}
          </View>
        )}
        {selectedFilters.AhLoadOut && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_5)}>
                <Text style={styles.text}>{item.__EMPTY_5}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                {Math.round(item.__EMPTY_5 * 10) / 10} Ah
              </Text>
            )}
          </View>
        )}
        {selectedFilters.CPanelMax && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_6)}>
                <Text style={styles.text}>{item.__EMPTY_6}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                {Math.round(item.__EMPTY_6 * 100)} %
              </Text>
            )}
          </View>
        )}
        {selectedFilters.SOCMin && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_7)}>
                <Text style={styles.text}>{item.__EMPTY_7}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                {Math.round(item.__EMPTY_7 * 100)} %
              </Text>
            )}
          </View>
        )}
        {selectedFilters.SOCMax && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_8)}>
                <Text style={styles.text}>{item.__EMPTY_8}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                {Math.round(item.__EMPTY_8 * 100)} %
              </Text>
            )}
          </View>
        )}
        {selectedFilters.LoadOff && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_9)}>
                <Text style={styles.text}>{item.__EMPTY_9}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_9}</Text>
            )}
          </View>
        )}
        {selectedFilters.na && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_10)}>
                <Text style={styles.text}>{item.__EMPTY_10}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_10}</Text>
            )}
          </View>
        )}
        {selectedFilters.ChargingOff && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_11)}>
                <Text style={styles.text}>{item.__EMPTY_11}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_11}</Text>
            )}
          </View>
        )}
        {selectedFilters.LoadOffOvercurrent && (
          <View
            style={{
              ...styles.firstRow, // keep the first row valueColumn styling
              backgroundColor:
                index === 2
                  ? "#32C762"
                  : item.__EMPTY_12 === 1
                  ? "#fff380"
                  : "transparent",
            }}
          >
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_12)}>
                <Text style={styles.text}>{item.__EMPTY_12}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_12}</Text>
            )}
          </View>
        )}
        {selectedFilters.LoadOffOvervoltage && (
          <View
            style={{
              ...styles.firstRow, // keep the first row valueColumn styling
              backgroundColor:
                index === 2
                  ? "#32C762"
                  : item.__EMPTY_13 === 1
                  ? "#fff380"
                  : "transparent",
            }}
          >
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_13)}>
                <Text style={styles.text}>{item.__EMPTY_13}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_13}</Text>
            )}
          </View>
        )}
        {selectedFilters.LoadOff && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_14)}>
                <Text style={styles.text}>{item.__EMPTY_14}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_14}</Text>
            )}
          </View>
        )}
        {selectedFilters.Overtemp && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_16)}>
                <Text style={styles.text}>{item.__EMPTY_16}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_16}</Text>
            )}
          </View>
        )}
        {selectedFilters.CLoadMax && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_17)}>
                <Text style={styles.text}>{item.__EMPTY_17}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                {Math.round(item.__EMPTY_17 * 100)} %
              </Text>
            )}
          </View>
        )}
        {selectedFilters.BatTempMax && (
          <View
            style={{
              ...styles.firstRow, // keep the first row valueColumn styling
              backgroundColor:
                index === 2
                  ? "#32C762"
                  : item.__EMPTY_18 > 60
                  ? "#fff380"
                  : "transparent",
            }}
          >
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_18)}>
                <Text style={styles.text}>{item.__EMPTY_18}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_18}°C</Text>
            )}
          </View>
        )}
        {selectedFilters.BatTempMin && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_19)}>
                <Text style={styles.text}>{item.__EMPTY_19}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>{item.__EMPTY_19}°C</Text>
            )}
          </View>
        )}
        {selectedFilters.SystemUse && (
          <View style={index == 2 ? styles.firstRow : styles.valueColumn}>
            {index == 2 ? (
              <Pressable onPress={() => openDescModal(item.__EMPTY_20)}>
                <Text style={styles.text}>{item.__EMPTY_20}</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                {Math.round(item.__EMPTY_20 * 100)} %
              </Text>
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
          <DayValueCharts dataSet={dataSet} />
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
          <DayValuesDescriptions
            visible={showDescription}
            onClose={closeDescModal}
            selectedHeader={selectedHeader}
          />
          <ScrollView horizontal contentContainerStyle={styles.tableContainer}>
            <FlatList
              data={dataSet["Day Values"]}
              renderItem={item}
              stickyHeaderIndices={[2]}
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
    width: 50,
    backgroundColor: "#32C762",
    borderWidth: 1,
  },
  firstColumn2ndRow: {
    width: 50,
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
    margin: 20,
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

export default DayDataToList;
