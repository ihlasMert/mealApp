import { Text, View, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selecentedItem = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selecentedItem.imageUrl }} />
      <MealsDetails
        duration={selecentedItem.duration}
        complexity={selecentedItem.complexity}
        affordability={selecentedItem.affordability}
      />
      <Text>Ingredients</Text>
      {selecentedItem.ingredients.map((ingredient) => (
        <Text>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selecentedItem.steps.map((steps) => (
        <Text>{steps}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;
