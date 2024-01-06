import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ExerciseCategoryData, RootStackParamList } from "@/ultilities/types";
import { getDifficultString } from "@/ultilities/utils";

type Props = {
  data: ExerciseCategoryData;
};

type Navigation = NativeStackNavigationProp<RootStackParamList, "Exercises">;

export default function ExerciseCategory({ data }: Props) {
  const navigation = useNavigation<Navigation>();

  const title = useMemo(
    () => `${data.target.toUpperCase()} ${getDifficultString(data.difficult)}`,
    [data.target, data.difficult]
  );

  const onPress = useCallback(
    (data: ExerciseCategoryData) => {
      navigation.navigate("Exercises", data);
    },
    [data]
  );

  return (
    <Pressable onPress={onPress.bind(null, data)}>
      <ImageBackground
        source={data.bgImage}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.icons}>
            {[1, 2, 3].map((item) => (
              <FontAwesome5
                name="dumbbell"
                size={14}
                color={item <= data.difficult ? "#0954a5" : "#fff"}
                key={item}
              />
            ))}
          </View>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {data.spendTime} mins&sdot;{data.totalExercises} exercises
          </Text>
          <View style={styles.overlay} />
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    borderRadius: 16,
  },

  container: {
    width: "100%",
    padding: 16,
    minHeight: 150,
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: 16,
  },

  icons: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    textTransform: "uppercase",
    marginVertical: 4,
    color: "#fff",
  },

  description: {
    textTransform: "uppercase",
    fontWeight: "400",
    color: "#fff",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
    zIndex: -1,
    backgroundColor: "#000",
  },
});
