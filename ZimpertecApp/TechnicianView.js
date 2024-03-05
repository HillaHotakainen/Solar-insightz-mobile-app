import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

function TechnicianView() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingVertical: 20 }}></View>
      <Text style={styles.heading}>Technician view page.</Text>
      <Text>Show charts and alerts</Text>
      <Text>Share option?</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
export default TechnicianView;
