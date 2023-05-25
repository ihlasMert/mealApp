import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtilte}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtilte: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 6,
    margin: 4,
  },
});
