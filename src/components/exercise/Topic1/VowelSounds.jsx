import ExerciseList from "../ExerciseList";
import defaultExercises from "../../data/dataExercises";
import "../SpeechExercises.css";
const VowelSounds = () => {
  const vowelExercises = defaultExercises?.filter(
    (ex) => ex?.type?.toLowerCase().trim() === "vowels"
  ) || [];  // ✅ Ensure `vowelExercises` is never undefined

  console.log("Filtered Vowel Exercises:", vowelExercises); // Debugging

  return (
    <div className="container ExeCard-container" >
      <div className="text-center">  <span style={{fontSize:"2.4rem"}} >🌈</span>
      <h2  style={{display:"inline-block" ,  fontSize:"2.8rem"}}>
         Vowel Sounds Adventure</h2>
          <span style={{fontSize:"2.4rem"}} >🌟</span></div>
        <ExerciseList exercise={vowelExercises} />  {/* ✅ Pass filtered list */}
    </div>
  );
};

export default VowelSounds;
