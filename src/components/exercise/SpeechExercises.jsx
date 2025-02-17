import LevelCard from "./LevelCard";
import "./SpeechExercises.css"; // Ensure correct path

const SpeechExercises = () => {
  return (
    <div className="container-SpeechExe">
      <h1 className="text-center">Welcome to Speech Exercises</h1>
      <p className="text-center">Enhance your speaking skills with our levels.</p>

      <div className="row level-container">
        <div className="col-12 col-md-6 col-lg-7 mb-4">
          <LevelCard
            title="Level 1: Introduction to Speech Sounds"
            isLocked={false}
            topics={[
              { name: "Learning Vowel Sounds", icon: "📢", link: "/VowelSounds" },
              { name: "Simple Consonant Sounds", icon: "🔤", link: "/ConsonantSounds" },
              { name: "Basic Mouth & Tongue Movements", icon: "👅", link: "/MouthMovements" },
              { name: "Matching Sounds with Pictures", icon: "🖼️", link: "/MatchingSounds" },
              { name: "Repeating Simple Words", icon: "🎙️", link: "/RepeatingWords" },
            ]}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-7 mb-4">
          <LevelCard
            title="Level 2: Building Words and Pronunciation"
            link="/level2Exercise"
            isLocked={true}
            topics={[
              { name: "Syllables and Word Formation", icon: "🔤" },
              { name: "Identifying Beginning and Ending Sounds", icon: "👅" },
              { name: "Correcting Common Mistakes in Pronunciation", icon: "🎙️" },
              { name: "Interactive Word Recognition Games", icon: "🖼️" },
            ]}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-7 mb-4">
          <LevelCard
            title="Level 3: Speaking Practice and Fluency"
            link="/level3Exercise"
            isLocked={true}
            topics={[
              { name: "Speaking Short Sentences", icon: "📢" },
              { name: "Listening and Repeating Sentences", icon: "🔤" },
              { name: "Conversation Basics", icon: "👅" },
              { name: "Storytelling (Short & Simple)", icon: "🖼️" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SpeechExercises;
