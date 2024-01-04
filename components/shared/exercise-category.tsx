import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  difficult: number;
  title: string;
  spendTime: number; // in minutes
  totalExercises: number;
  bgImage: ImageSourcePropType;
};

export default function ExerciseCategory({
  difficult,
  title,
  spendTime,
  totalExercises,
  bgImage,
}: Props) {
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.icons}>
          {[1, 2, 3].map((item) => (
            <FontAwesome5
              name="dumbbell"
              size={14}
              color={item <= difficult ? "#0954a5" : "#fff"}
              key={item}
            />
          ))}
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {spendTime} mins&sdot;{totalExercises} exercises
        </Text>
        <View style={styles.overlay} />
      </View>
    </ImageBackground>
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
