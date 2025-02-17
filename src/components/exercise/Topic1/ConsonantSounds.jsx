import ExerciseList from "../ExerciseList";
import defaultExercises from "../../data/dataExercises";

const ConsonantSounds = () => {
  const consonantExercises = defaultExercises?.filter(
    (ex) => ex?.type?.toLowerCase().trim() === "consonants"
  ) || [];

  return (
    <div className="container mt-4">
      <h2>🔤 Consonant Sounds</h2>
      <ExerciseList exercise={consonantExercises} />
    </div>
  );
};

export default ConsonantSounds;
