import React, { useState, useEffect } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import dataSet1 from "../ParsingToJSON/exel-to-JSON.json";
import dataSet2 from "../ParsingToJSON/exel-to-JSON1.json";
import dataSet3 from "../ParsingToJSON/exel-to-JSON2.json";

const DataSelection = ({ isVisible, onSelect, onClose }) => {
  const dataSets = [dataSet1, dataSet2, dataSet3];

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Select Data Set</Text>
          <FlatList
            data={dataSets}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => onSelect(item)}
                style={styles.modalItem}
              >
                <Text>{"DataSet" + (1 + index)}</Text>
              </Pressable>
            )}
          />

          <Pressable onPress={onClose}>
            <Text style={{ color: "#32C762" }}>Cancel</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    height: 500,
    width: "80%",
  },
  modalItem: {
    paddingVertical: 10,
    alignItems: "center", // the text is centered withing the button element
    margin: "2.7%",
    borderRadius: 7,
    elevation: 3, // gives the shadow
    backgroundColor: "#32C762",
  },
});

export default DataSelection;
