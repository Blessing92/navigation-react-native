import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { MealsOverviewScreenProps } from "../types";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }: MealsOverviewScreenProps) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;
