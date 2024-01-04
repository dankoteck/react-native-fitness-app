export function getTodayExerciseIndex() {
  // TODO: Hard code for now;
  return 0;
}

export function getDifficultString(level: number) {
  switch (level) {
    case 1:
      return "beginner";
    case 2:
      return "intermediate";
    case 3:
      return "advanced";
    default:
      return "";
  }
}
