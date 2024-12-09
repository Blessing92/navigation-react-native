import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamList } from "./types";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { FavoritesProvider } from "./store/context/FavoritesProvider";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#592323" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#8c7975" },
        drawerContentStyle: { backgroundColor: "#592323" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#592323",
        drawerActiveBackgroundColor: "#edb695",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#592323" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#8c7975" },
            }}
          >
            <Stack.Screen
              name="DrawerCategories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </>
  );
}

const styles = StyleSheet.create({});
