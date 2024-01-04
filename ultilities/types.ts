import bodyParts from "@/static/json/body-parts.json";
import equipments from "@/static/json/equipments.json";
import exerciseTarget from "@/static/json/exercise-target.json";
import { ImageSourcePropType } from "react-native";

export type ExerciseItemData = {
  bodyPart: (typeof bodyParts)[number];
  equipment: (typeof equipments)[number];
  gifUrl: string;
  id: string;
  name: string;
  target: (typeof exerciseTarget)[number];
  secondaryMuscles: string[];
  instructions: string[];
};

export type ExerciseCategoryData = {
  id: number;
  difficult: number;
  target: string;
  spendTime: number;
  totalExercises: number;
  bgImage: ImageSourcePropType;
};

export type ExerciseScreenParams = Pick<
  ExerciseCategoryData,
  "difficult" | "target"
>;

export type RootStackParamList = {
  Home: undefined;
  Exercises: ExerciseScreenParams;
};
