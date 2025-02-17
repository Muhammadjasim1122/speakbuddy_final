import ExerciseList from "../ExerciseList";
import defaultExercises from "../../data/dataExercises";

const MouthMovements = () => {
  const mouthExercises = defaultExercises?.filter(
    (ex) => ex?.type?.toLowerCase().trim() === "mouth"
  ) || [];

  return (
    <div className="container mt-4">
      <h2>👅 Mouth & Tongue Movements</h2>
      <ExerciseList exercise={mouthExercises} />
    </div>
  );
};

export default MouthMovements;
