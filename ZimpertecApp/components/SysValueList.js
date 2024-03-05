import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import SysValuesDescriptions from "./TableDescriptions/SysValuesDescriptions";
import { SafeAreaView } from "react-native-safe-area-context";

const SysValueToList = ({ route }) => {
  const { dataSet } = route.params;
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const openDescModal = (header) => {
    setSelectedHeader(header);
    setShowDescription(true);
  };
  const closeDescModal = () => {
    setShowDescription(false);
  };

  const header = ({}) => <Text style={styles.header}>{"Sys Info"}</Text>;
  return (
    <SafeAreaView style={styles.tableContainer}>
      <SysValuesDescriptions
        visible={showDescription}
        onClose={closeDescModal}
        selectedHeader={selectedHeader}
      />
      <FlatList
        data={dataSet["SYS Values"]}
        stickyHeaderIndices={[0, 9]}
        ListHeaderComponent={header}
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
            {index === 3 && (
              <View>
                <Text>{item.__EMPTY}</Text>
                <Text>
                  {item["Sys Info Bytes"]}
                  {item["Max N Month"]}
                  {item["Max N Days"]}
                  {item["Bytes p Day"]}
                  {item["SOS Bytes"]}
                  {item["Bytes per Month"]}
                  {item["CC-Type"]}
                  {item["firmware Version"]}
                  {item["CC-L-Current"]}
                  {item["CC-P-Current"]}
                  {item["User Registration number"]}
                  {item["menustate"]}
                  {item["Bat-Cap"]}
                  {item["Bat-Cap-day-use"]}
                  {item["Bat-Cap-use-extra"]}
                  {item["System factor bye"]}
                </Text>
              </View>
            )}
            {index === 8 && (
              <View>
                <Text style={styles.header}>{item.__EMPTY}</Text>
              </View>
            )}
            {index >= 9 && (
              <View style={styles.columnContainer}>
                <Text style={styles.columnLeft}>{item.__EMPTY}</Text>
                <Text style={styles.columnRight}>{item["Sys Info Bytes"]}</Text>
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    alignSelf: "center",
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
});
export default SysValueToList;
