import CategoriesScreen from "./screen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import MealOverViewScreen from "./screen/MealOverViewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";
import FavoriteScreen from "./screen/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#545B77" },
        }}
      />
      <Drawer.Screen
        name="Favorite Screen"
        component={FavoriteScreen}
        options={{ title: "All Categories" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#545B77" },
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            title: "All Categories",
            headerShown: false,
          }}
        />
        <Stack.Screen name="MealOverView" component={MealOverViewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{title:"About the meals"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
