import CategoriesScreen from "./screen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import MealOverViewScreen from "./screen/MealOverViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            headerStyle: { backgroundColor: "red" },
            headerTintColor:"white",
            contentStyle:{backgroundColor:"yellow"}
          }}
        />
        <Stack.Screen name="MealOverView" component={MealOverViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
