import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import SosValuesDescriptions from "./TableDescriptions/SosValuesDescriptions";
import { SafeAreaView } from "react-native-safe-area-context";
import SosValuesPieChart from "./charts/SosValuesPieChart";

const SosDataToList = ({ route }) => {
  const { dataSet } = route.params;
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const header = ({}) => (
    <View style={styles.headerContainer}>
      <View style={styles.firstRow}>
        <Text style={styles.text}>{"Attribute"}</Text>
      </View>
      <View style={styles.firstRow}>
        <Text style={styles.text}>{"Value"}</Text>
      </View>
    </View>
  );
  const openDescModal = (header) => {
    setSelectedHeader(header);
    setShowDescription(true);
  };
  const closeDescModal = () => {
    setShowDescription(false);
  };

  const item = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("CC-Operation days total")}>
            <Text style={styles.text}>{"CC-Operation days total"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["CC-Operation days total"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("d-log")}>
            <Text style={styles.text}>{"d-log"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["d-log"]} </Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("cc-Power-down")}>
            <Text style={styles.text}>{"cc-Power-down"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["cc-Power-down"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("CC-Power-up")}>
            <Text style={styles.text}>{"CC-Power-up"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["CC-Power-up"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("AH-Panel")}>
            <Text style={styles.text}>{"AH-Panel"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["AH-Panel"]} Ah</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("AH-Bat-in")}>
            <Text style={styles.text}>{"AH-Bat-in"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["AH-Bat-in"]} Ah</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("AH-Bat-out")}>
            <Text style={styles.text}>{"AH-Bat-out"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["AH-Bat-out"]} Ah</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("Ah-Load out")}>
            <Text style={styles.text}>{"Ah-Load out"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["Ah-Load out"]} Ah</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("CC-Load disconnect")}>
            <Text style={styles.text}>{"CC-Load dicsonnect"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["CC-Load disconnect"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("CC-AH-Load disconnect")}>
            <Text style={styles.text}>{"CC-AH-Load disconnect"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["CC-AH-Load disconnect"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("days no full")}>
            <Text style={styles.text}>{"days no full"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["days no full"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("total-Credit-days")}>
            <Text style={styles.text}>{"total-Credit-days"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["total-Credit-days"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("OFF-no cred.")}>
            <Text style={styles.text}>{"OFF-no cred."} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["OFF-no cred."]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("extra days us")}>
            <Text style={styles.text}>{"extra days us"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["extra days us"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("Credit-Days")}>
            <Text style={styles.text}>{"Credit-Days"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["Credit-Days"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("SYS use > 100%")}>
            <Text style={styles.text}>{"SYS use > 100%"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["SYS use > 100%"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("SYS use > 75%")}>
            <Text style={styles.text}>{"SYS use > 75%"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["SYS use > 75%"]} </Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("SYS use > 50%")}>
            <Text style={styles.text}>{"SYS use > 50%"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["SYS use > 50%"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("SYS use > 25%")}>
            <Text style={styles.text}>{"SYS use > 25%"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["SYS use > 25%"]}</Text>
        )}
      </View>
      <View style={index == 0 ? styles.firstColumn : styles.valueColumn}>
        {index == 0 ? (
          <Pressable onPress={() => openDescModal("SYS use < 25%")}>
            <Text style={styles.text}>{"SYS use < 25%"} </Text>
          </Pressable>
        ) : (
          <Text style={styles.text}>{item["SYS use < 25%"]}</Text>
        )}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.tableContainer}>
      <SosValuesDescriptions
        visible={showDescription}
        onClose={closeDescModal}
        selectedHeader={selectedHeader}
      />
      <FlatList
        stickyHeaderIndices={[0]}
        data={dataSet["SoS Values"]}
        ListHeaderComponent={header}
        renderItem={item}
        numColumns={2}
        columnWrapperStyle={{ flex: 1 }}
      />
      <SosValuesPieChart dataSet={dataSet} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    alignSelf: "center",
    width: "70%",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  itemContainer: {
    flex: 1 / 2,
    marginBottom: "10%",
  },
  firstColumn: {
    backgroundColor: "#d2dfd3",
    justifyContent: "center",
    borderWidth: 1,
    height: 52,
  },
  firstRow: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#32C762",
    borderWidth: 1,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  valueColumn: {
    borderWidth: 1,
    justifyContent: "center",
    height: 52,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SosDataToList;
