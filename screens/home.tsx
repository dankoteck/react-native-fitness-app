import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import ExerciseCategory from "@/components/shared/exercise-category";
import {
  beginnerExercises,
  intermediateExercises,
} from "@/static/exercises-category";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.sectionTitle}>Beginner</Text>
          <View style={styles.exercisesContainer}>
            {beginnerExercises.map((item) => (
              <ExerciseCategory data={item} key={item.id} />
            ))}
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionTitle}>Intermediate</Text>
          <View style={styles.exercisesContainer}>
            {intermediateExercises.map((item) => (
              <ExerciseCategory data={item} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
    height: "100%",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 12,
  },

  exercisesContainer: {
    gap: 6,
  },
});
