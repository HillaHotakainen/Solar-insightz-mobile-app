import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Checkbox = ({ checked, onChange }) => (
  <TouchableOpacity onPress={onChange}>
    <Ionicons
      name={checked ? "checkbox-outline" : "square-outline"}
      size={24}
      color="black"
    />
  </TouchableOpacity>
);

const FilterPopUp = ({
  visible,
  onClose,
  onFilterChange,
  selectedFilters,
  onShowAll,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView contentContainerStyle={styles.filterContainer}>
            <Text style={styles.filterHeader}>Select Filters:</Text>
            <Pressable style={styles.filterButton} onPress={() => onShowAll()}>
              <Text style={{ fontSize: 16 }}>Select all</Text>
            </Pressable>
            {Object.entries(selectedFilters).map(([key, value]) => (
              <View key={key} style={styles.checkboxContainer}>
                <Checkbox
                  checked={value}
                  onChange={() => onFilterChange(key)}
                />
                <Text style={styles.checkboxLabel}>{key}</Text>
              </View>
            ))}
            <Pressable style={styles.filterButton} onPress={onClose}>
              <Text style={{ fontSize: 16 }}>Apply Filters</Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    alignSelf: "center",
    width: "80%",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
  filterHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  filterButton: {
    backgroundColor: "#32C762",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    margin: 10,
  },
});

export default FilterPopUp;
