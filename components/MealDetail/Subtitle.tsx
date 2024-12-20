import { StyleSheet, Text, View } from "react-native";
import { ReactNode } from "react";

type SubtitleProps = {
  children: ReactNode;
};

function Subtitle({ children }: SubtitleProps) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#d8ada6",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#d8ada6",
    borderBottomWidth: 2,
  },
});
