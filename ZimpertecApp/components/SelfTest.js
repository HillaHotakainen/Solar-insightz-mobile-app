import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import dataSet from "../ParsingToJSON/exel-to-JSON.json";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ShowAlertSelfTest = () => {
  const navigation = useNavigation();
  const alertMessagesSet = new Set();

  const checkAlerts = dataSet["Day Values"].map((item, index) => {
    if (index === 4) {
      if (item.__EMPTY_18 > 60) {
        alertMessagesSet.add("Warning! \n\nBattery temperature is over 60°C");
      }
      if (item.__EMPTY_1 < 3) {
        alertMessagesSet.add("Warning! \n\nBattery voltage is below 3V");
      }
      if (item.__EMPTY_12 === 1) {
        alertMessagesSet.add("Warning! \n\nOverload event detected");
        console.log(item.__EMPTY_12 + "overload");
      }
      if (item.__EMPTY_13 === 1) {
        alertMessagesSet.add("Warning! \n\nOvervoltage event detected");
      }
    }
  });
  // convert the Set to Array to be standardized data structure for mapping and rendering.
  const alertMessages = Array.from(alertMessagesSet);

  // if no alerts are present, show this screen
  if (alertMessages.length === 0) {
    return (
      <SafeAreaView style={styles.noAlerts}>
        <Text style={styles.heading}>There are no alerts!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SimpleLineIcons
        style={{ alignSelf: "flex-start", paddingLeft: 20 }}
        name="arrow-left"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.heading}>Alerts</Text>
        {alertMessages.map((alert, index) => (
          <View key={index} style={styles.infoContainer}>
            <Text style={styles.infoText}>{alert}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noAlerts: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  infoText: {
    fontSize: 16,
  },
  infoContainer: {
    width: 300,
    padding: 40,
    backgroundColor: "rgba(255,243,128, 0.5)", // Adjust the alpha value for transparency
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
});

export default ShowAlertSelfTest;
