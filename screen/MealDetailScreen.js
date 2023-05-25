import { View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selecentedItem = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.scrollContainer}>
      <View>
        <Image source={{ uri: selecentedItem.imageUrl }} style={styles.image} />
        <MealsDetails
          duration={selecentedItem.duration}
          complexity={selecentedItem.complexity}
          affordability={selecentedItem.affordability}
          textStyle={styles.detailText}
        />
        <View>
          <List data={selecentedItem.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selecentedItem.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  scrollContainer: {
    marginTop: 34,
  },
  title: {
    fontSize: 14,
    margin: 8,
    fontWeight: "bold",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
