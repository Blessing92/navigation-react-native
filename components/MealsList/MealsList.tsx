import MealItem from "./MealItem";
import { FlatList, StyleSheet, View } from "react-native";
import Meal from "../../models/meal";

type MealsListProps = {
  displayedMeals: Meal[];
};

function MealsList({ displayedMeals }: MealsListProps) {
  function renderMealItem(itemData: any) {
    return <MealItem meal={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
