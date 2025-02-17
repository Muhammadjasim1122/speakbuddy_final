import ExerciseList from "../ExerciseList";
import defaultExercises from "../../data/dataExercises";

const RepeatingWords = () => {
  const repeatingExercises = defaultExercises?.filter(
    (ex) => ex?.type?.toLowerCase().trim() === "repeating"
  ) || [];

  return (
    <div className="container mt-4">
      <h2>🎙️ Repeating Simple Words</h2>
      <ExerciseList exercise={repeatingExercises} />
    </div>
  );
};

export default RepeatingWords;
