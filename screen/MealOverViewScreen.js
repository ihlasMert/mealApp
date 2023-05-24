import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";

function MealOverViewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export default MealOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
