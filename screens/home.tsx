import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ExerciseCategory from "@/components/shared/exercise-category";
import {
  beginnerExercises,
  intermediateExercises,
} from "@/static/exercises-category";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.exercisesContainer}>
        <Text style={styles.sectionTitle}>Beginner</Text>
        {beginnerExercises.map((item) => (
          <ExerciseCategory key={item.id} data={item} />
        ))}
      </View>

      <View style={styles.exercisesContainer}>
        <Text style={styles.sectionTitle}>Intermediate</Text>
        {intermediateExercises.map((item) => (
          <ExerciseCategory key={item.id} data={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
    gap: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 4,
  },

  exercisesContainer: {
    gap: 6,
  },
});
