import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import data from "@/static/json/mockup-data.json";
import { ExerciseItemData, RootStackParamList } from "@/ultilities/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RouteProp = NativeStackScreenProps<
  RootStackParamList,
  "Exercises"
>["route"];

type Props = {
  route: RouteProp;
};

export default function ExercisesScreen({ route }: Props) {
  const { target } = route.params;
  const [exercises, setExercises] = useState<ExerciseItemData[]>([]);

  useEffect(() => {
    const response = data.filter((item) => item.target === target);
    setExercises(response);

    return () => {
      setExercises([]);
    };
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
