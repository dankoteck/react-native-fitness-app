import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ExerciseCategory from "@/components/shared/exercise-category";
import {
  beginnerExercises,
  intermediateExercises,
} from "@/static/exercises-category";

type Props = {
  navigation: NativeStackNavigationProp<{}>;
};

export default function Home({ navigation }: Props) {
  const onPress = () => {
    navigation.navigate("Exercises" as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.sectionTitle}>Beginner</Text>
          <Pressable onPress={onPress}>
            <View style={styles.exercisesContainer}>
              {beginnerExercises.map((item) => (
                <ExerciseCategory
                  key={item.title}
                  difficult={item.difficult}
                  title={item.title}
                  spendTime={item.spendTime}
                  totalExercises={item.totalExercises}
                  bgImage={item.bgImage}
                />
              ))}
            </View>
          </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionTitle}>Intermediate</Text>
          <Pressable onPress={onPress}>
            <View style={styles.exercisesContainer}>
              {intermediateExercises.map((item) => (
                <ExerciseCategory
                  key={item.title}
                  difficult={item.difficult}
                  title={item.title}
                  spendTime={item.spendTime}
                  totalExercises={item.totalExercises}
                  bgImage={item.bgImage}
                />
              ))}
            </View>
          </Pressable>
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
