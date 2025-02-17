import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SpeechExercises.css"


const ExerciseList = ({ exercise = [] }) => {  // ✅ Default empty array
  const [completedExercises, setCompletedExercises] = useState([]);

  const colors = [
    "#B0E0E6", // Powder Blue (light blue)
    "#87CEFA", // Light Sky Blue
    "#A2DFF7", // Baby Blue
    "#FFB6C1", // Light Pink
    "#FFD1DC", // Pastel Pink
    "#FAD0C9", // Blush Pink
    "#E6E6FA", // Lavender (light purple)
    "#E0B0FF", // Mauve
    "#D8B4E2", // Lilac
    "#FFF9B1", // Light Lemon (light yellow)
    "#FFFFE0", // Pale Yellow
    "#FFF3B0", // Butter Yellow
  ];

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem("progress")) || [];
    setCompletedExercises(storedProgress);
  }, []);

  return (
    <div >   
      <div className="row level-container mt-1">
        {exercise.length > 0 ? (  // ✅ Check if exercise is not empty
          exercise.map((exercise, index) => (
            <div key={index} className="col-md-4 mb-3 .level-card" >
              <div className="card shadow " style={{
              backgroundColor: colors[index % colors.length], // Assign a color
            }}>
                <div className="card-body ">
                  <h5 className="card-title exercise-title">{exercise.name}</h5>
                  <Link to={`/VowelGame/${exercise.order}`} className="btn btn-primary">
                    LET'S PLAY 
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No exercises available.</p>  // ✅ Show a message if exercise is empty
        )}
      </div>
    </div>
  );
};

export default ExerciseList;
