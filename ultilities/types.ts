import bodyParts from "@/static/json/body-parts.json";
import equipments from "@/static/json/equipments.json";
import exerciseTarget from "@/static/json/exercise-target.json";

export type ExerciseItem = {
  bodyPart: (typeof bodyParts)[number];
  equipment: (typeof equipments)[number];
  gifUrl: string;
  id: string;
  name: string;
  target: (typeof exerciseTarget)[number];
  secondaryMuscles: string[];
  instructions: string[];
};
