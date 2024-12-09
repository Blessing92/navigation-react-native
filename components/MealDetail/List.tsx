import { StyleSheet, Text, View } from "react-native";
import Meal from "../../models/meal";

type ListProps = {
  dataMeal?: string[];
};

function List({ dataMeal }: ListProps) {
  if (!dataMeal) return null;

  return dataMeal.map((data) => (
    <View key={data} style={styles.listItem}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#d8ada6",
  },
  itemText: {
    color: "#592323",
    textAlign: "center",
  },
});
