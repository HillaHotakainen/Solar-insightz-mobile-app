import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CurrentValuesDescriptions from "./TableDescriptions/CurrentValuesDescriptions";
import dataSet from "../ParsingToJSON/exel-to-JSON.json";

const CurrentValuesScreen = () => {
  const navigation = useNavigation();
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const openDescModal = (header) => {
    setSelectedHeader(header);
    setShowDescription(true);
  };
  const closeDescModal = () => {
    setShowDescription(false);
  };
  const Header = ({ headerText }) => (
    <Text style={styles.header}>{headerText}</Text>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.pageHeader}>
        <SimpleLineIcons
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.heading}>Current Data</Text>
        <View></View>
      </View>
      <CurrentValuesDescriptions
        visible={showDescription}
        onClose={closeDescModal}
        selectedHeader={selectedHeader}
      />
      <FlatList
        data={dataSet["SYS Values"]}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header headerText="Current Sys Values" />}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, maxWidth: 200 }}>
            {index === 1 && (
              <>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Sys Info Bytes")}
                  >
                    <Text style={styles.text}>Sys Info Bytes</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>
                    {item["Sys Info Bytes"]}
                  </Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Max N Month")}
                  >
                    <Text style={styles.text}>Max N Month</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["Max N Month"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Max N Days")}
                  >
                    <Text style={styles.text}>Max N Days</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["Max N Days"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Bytes p Day")}
                  >
                    <Text style={styles.text}>Bytes p day</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["Bytes p Day"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("SOS Bytes")}
                  >
                    <Text style={styles.text}>SOS Bytes</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["SOS Bytes"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Bytes per Month")}
                  >
                    <Text style={styles.text}>Bytes per Month</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>
                    {item["Bytes per Month"]}
                  </Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("CC-Type")}
                  >
                    <Text style={styles.text}>CC-Type</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["CC-Type"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("firmware Version")}
                  >
                    <Text style={styles.text}>firmware Version</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>
                    {item["firmware Version"]}
                  </Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("CC-L-Current")}
                  >
                    <Text style={styles.text}>CC-L-Current</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["CC-L-Current"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("CC-P-Current")}
                  >
                    <Text style={styles.text}>CC-P-Current</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["CC-P-Current"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("User Registration number")}
                  >
                    <Text style={styles.text}>User Registration number</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>
                    {item["User Registration number"]}
                  </Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("menustate")}
                  >
                    <Text style={styles.text}>menustate</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["menustate"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Bat-Cap")}
                  >
                    <Text style={styles.text}>Bat-Cap</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>{item["Bat-Cap"]}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Bat-Cap-day-use")}
                  >
                    <Text style={styles.text}>Bat-Cap-day-use</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>
                    {item["Bat-Cap-day-use"]}
                  </Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Bat-Cap-use-extra")}
                  >
                    <Text style={styles.text}>Bat-Cap-use-extra</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>
                    {item["Bat-Cap-use-extra"]}
                  </Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("System factor bye")}
                  >
                    <Text style={styles.text}>System factor bye</Text>
                  </Pressable>
                  <Text style={styles.columnRight}>
                    {item["System factor bye"]}
                  </Text>
                </View>
              </>
            )}
          </View>
        )}
      />
      <FlatList
        data={dataSet["Day Values"]}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header headerText="Current Day Values" />}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, maxWidth: 200 }}>
            {index === 4 && (
              <>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("V_max")}
                  >
                    <Text style={styles.text}>{"V_max"} </Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY}</Text>
                </View>
                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("V_min")}
                  >
                    <Text style={styles.text}>{"V_min"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_1} V</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("AH-Panel to Sys")}
                  >
                    <Text style={styles.text}>{"AH-Panel to Sys"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_2} Ah</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("AH-Bat-in")}
                  >
                    <Text style={styles.text}>{"AH-Bat-in"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_3} Ah</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("AH-Bat-out")}
                  >
                    <Text style={styles.text}>{"AH-Bat-out"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_4} Ah</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Ah-Load out")}
                  >
                    <Text style={styles.text}>{"Ah-Load out"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>
                    {Math.round(item.__EMPTY_5 * 10) / 10} Ah
                  </Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("C panel max")}
                  >
                    <Text style={styles.text}>{"C panel max"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>
                    {Math.round(item.__EMPTY_6 * 100)} %
                  </Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("SOC min")}
                  >
                    <Text style={styles.text}>{"SOC min"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>
                    {Math.round(item.__EMPTY_7 * 100)} %
                  </Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("SOC_max")}
                  >
                    <Text style={styles.text}>{"SOC_max"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>
                    {Math.round(item.__EMPTY_8 * 100)} %
                  </Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Load Off")}
                  >
                    <Text style={styles.text}>{"Load Off"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_9}</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("n.a.")}
                  >
                    <Text style={styles.text}>{"n.a."}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_10}</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Charging off (not LS)")}
                  >
                    <Text style={styles.text}>{"Charging off (not LS)"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_11}</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Load off overcurrent")}
                  >
                    <Text style={styles.text}>{"Load off overcurrent"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_12}</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("load off overvoltage")}
                  >
                    <Text style={styles.text}>{"load off overvoltage"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_13}</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Load off PreP")}
                  >
                    <Text style={styles.text}>{"Load off PreP"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_14}</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("overtemp")}
                  >
                    <Text style={styles.text}>{"overtemp"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_16}</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("C load max")}
                  >
                    <Text style={styles.text}>{"C load max"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>
                    {Math.round(item.__EMPTY_17 * 100)} %
                  </Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Bat temp max")}
                  >
                    <Text style={styles.text}>{"Bat temp max"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_18}°C</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("Bat Temp min")}
                  >
                    <Text style={styles.text}>{"Bat Temp min"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>{item.__EMPTY_19}°C</Text>
                </View>

                <View style={styles.columnContainer}>
                  <Pressable
                    style={styles.columnLeft}
                    onPress={() => openDescModal("System Use")}
                  >
                    <Text style={styles.text}>{"System Use"}</Text>
                  </Pressable>

                  <Text style={styles.columnRight}>
                    {Math.round(item.__EMPTY_20 * 100)} %
                  </Text>
                </View>
              </>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    rowGap: 30,
    paddingTop: 30,
  },
  tableContainer: {
    flex: 1,
    alignSelf: "center",
    marginTop: "5%",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 2,
  },
  columnContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  columnLeft: {
    borderWidth: 1,
    padding: 5,
    width: "50%",
    height: 50,
    backgroundColor: "#d2dfd3",
    fontWeight: "bold",
    textAlign: "center",
  },
  columnRight: {
    borderWidth: 1,
    padding: 5,
    width: "50%",
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#32C762",
    borderWidth: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
});

export default CurrentValuesScreen;
