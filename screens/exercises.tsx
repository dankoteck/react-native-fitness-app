import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useMemo, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ExerciseModal from "@/components/shared/exercise-modal";
import data from "@/static/json/mockup-data.json";
import { ExerciseItemData, RootStackParamList } from "@/ultilities/types";

type RouteProp = NativeStackScreenProps<
  RootStackParamList,
  "Exercises"
>["route"];

type Props = {
  route: RouteProp;
};

export default function ExercisesScreen({ route }: Props) {
  const { target, spendTime, totalExercises } = route.params;
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const [exercises, setExercises] = useState<ExerciseItemData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExercise = useMemo(
    () => exercises[currentIndex],
    [exercises, currentIndex]
  );

  const toggleModalVisible = () => setModalVisible(!modalVisible);

  const onPress = (idx: number) => {
    toggleModalVisible();
    setCurrentIndex(idx);
  };

  const onNavigateTo = (newIdx: number) => {
    setCurrentIndex(currentIndex + newIdx);
  };

  useEffect(() => {
    const response = data.filter((item) => item.target.includes(target));
    setExercises(response);

    return () => {
      setExercises([]);
    };
  }, []);

  return (
    <>
      <DraggableFlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.flatListContent,
          {
            paddingBottom: insets.bottom,
          },
        ]}
        onDragEnd={({ data }) => setExercises(data)}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.listHeaderTextSymbol}>|</Text>
            <Text style={styles.listHeaderText}>
              {spendTime} mins&sdot;{totalExercises} Workouts
            </Text>
          </>
        )}
        ListHeaderComponentStyle={styles.listHeaderComponent}
        renderItem={({ item, getIndex, drag }) => (
          <ScaleDecorator>
            <View style={styles.exerciseItemContainer}>
              <Pressable onPressIn={drag}>
                <MaterialIcons
                  name="drag-indicator"
                  size={30}
                  color="#9ca3af"
                />
              </Pressable>
              <Pressable
                onPress={onPress.bind(null, getIndex() as number)}
                style={styles.exerciseItem}
              >
                <Image source={{ uri: item.gifUrl }} width={90} height={90} />
                <Text style={styles.exerciseItemText}>{item.name}</Text>
              </Pressable>
            </View>
          </ScaleDecorator>
        )}
      />

      {currentExercise && (
        <ExerciseModal
          visible={modalVisible}
          onToggle={toggleModalVisible}
          onNavigate={onNavigateTo}
          currentItem={currentExercise}
          order={currentIndex + 1}
          totalItems={exercises.length}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 8,
  },

  listHeaderTextSymbol: {
    color: "#0954a5",
    fontWeight: "900",
  },

  listHeaderText: {
    fontWeight: "700",
    fontSize: 16,
  },

  listHeaderComponent: {
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    gap: 8,
  },

  exerciseItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  exerciseItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },

  exerciseItemText: {
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 14,
    flex: 1,
  },
});
