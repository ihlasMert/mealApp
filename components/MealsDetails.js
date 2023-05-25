import { View, StyleSheet, Text } from "react-native";

function MealsDetails({ duration, affordability, complexity }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{"affordability".toUpperCase()}</Text>
      <Text style={styles.detailItem}>{"complexity".toUpperCase()}</Text>
    </View>
  );
}

export default MealsDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 6,
    fontSize: 12,
  },
});
