import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

export type RootStackParamList = {
  DrawerCategories: undefined;
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
  Drawer: undefined;
};

export type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;
export type CategoriesScreenProps = DrawerScreenProps<
  RootStackParamList,
  "DrawerCategories" | "Categories"
>;

export type MealDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetails"
>;
