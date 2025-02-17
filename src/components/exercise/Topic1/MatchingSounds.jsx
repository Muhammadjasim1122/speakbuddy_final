import ExerciseList from "../ExerciseList";
import defaultExercises from "../../data/dataExercises";

const MatchingSounds = () => {
  const matchingExercises = defaultExercises?.filter(
    (ex) => ex?.type?.toLowerCase().trim() === "matching"
  ) || [];

  return (
    <div className="container mt-4">
      <h2>🖼️ Matching Sounds with Pictures</h2>
      <ExerciseList exercise={matchingExercises} />
    </div>
  );
};

export default MatchingSounds;
