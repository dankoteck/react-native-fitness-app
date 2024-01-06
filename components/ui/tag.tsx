import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tag({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <View style={styles.indicator} />
      <Text style={styles.content}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#0954a518",
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  indicator: {
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: "#0954a5",
  },

  content: {
    fontSize: 16,
  },
});
