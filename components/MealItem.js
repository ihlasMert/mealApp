import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({ title, imageUrl, affordability, complexity, duration }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "grey" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{"affordability".toUpperCase()}</Text>
          <Text style={styles.detailItem}>{"complexity".toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 18,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "red",
    shadowOpacity: 0.13,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 19,
    margin: 19,
  },
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
  buttonPressed: {
    opacity: 0.9,
  },
});
