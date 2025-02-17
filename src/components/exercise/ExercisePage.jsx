import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VolumeUp } from "@mui/icons-material";
import { Button, LinearProgress, Snackbar, Alert, Box, Grid, Typography, Card, CardContent, CardActions } from "@mui/material";
import SpeechRecognition from "./SpeechRecognition";
import defaultExercises from "../data/dataExercises";
import "./ExercisePage.css";
// Default exercise data


const ExercisePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const exercise = defaultExercises.find((ex) => ex.order.toString() === id);

  const [completed, setCompleted] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [isQuizCorrect, setIsQuizCorrect] = useState(false);
  const [matchPercentage, setMatchPercentage] = useState(0);
  const [recordingDone, setRecordingDone] = useState(false); // Tracks if recording is finished

  // Toast State
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("info");

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem("progress")) || [];
    if (storedProgress.includes(id)) {
      setCompleted(true);
    }
  }, [id]);

  const markComplete = () => {
    let storedProgress = JSON.parse(localStorage.getItem("progress")) || [];
    if (!storedProgress.includes(id)) {
      storedProgress.push(id);
      localStorage.setItem("progress", JSON.stringify(storedProgress));
    }
    setCompleted(true);
    showToast("🎉 Exercise Completed!", "success");
  };

  const checkCompletion = () => {
    if (isQuizCorrect && matchPercentage >= 80) {
      markComplete();
    }
  };

  const handleQuizSubmit = () => {
    if (exercise && quizAnswer === exercise.quiz.correctAnswer) {
      setIsQuizCorrect(true);
      showToast("🎯 Correct Answer!", "success");
        
    } else {
      setIsQuizCorrect(false);
      showToast("❌ Incorrect Answer!", "error");
    }
    checkCompletion();
  };

  const showToast = (message, severity) => {
    setToastMessage(message);
    setToastSeverity(severity);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  // Pronunciation Function using SpeechSynthesis
  const playPronunciation = () => {
    const wordToPronounce = exercise.correctAnswer; // Get the correct answer from the exercise
    const msg = new SpeechSynthesisUtterance(wordToPronounce);
    msg.lang = "en-US"; // You can set language here
    msg.pitch = 1; // Adjust pitch (0.1 to 2)
    msg.rate = 1; // Adjust rate (0.1 to 10)
    window.speechSynthesis.speak(msg); // Speak the word
  };

  if (!exercise) {
    return <h2>Exercise not found!</h2>;
  }

  return (
    <Box  className="containerq" sx={{ padding: 3, maxWidth: 800, margin: "0 auto" }}>
      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {exercise.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {exercise.description}
          </Typography>

          {/* Listen Button (Pronunciation) */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<VolumeUp />}
            onClick={playPronunciation} // Use the correct answer for pronunciation
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            Listen to Pronunciation
          </Button>

          <SpeechRecognition
            correctAnswer={exercise.quiz.correctAnswer}
            onResult={(isCorrect, details) => {
              setMatchPercentage(details.matchPercentage);
              setRecordingDone(true); // Show progress bar after recording
              if (details.matchPercentage >= 80) {
                showToast("✅ Great pronunciation!", "success");
              }
              checkCompletion();
            }}
          />

          {/* Pronunciation Accuracy Progress Bar (Shown Only After Recording is Done) */}
          {recordingDone && (
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" component="div">
                Pronunciation Accuracy: {matchPercentage}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={Math.min(matchPercentage, 100)}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          )}

          {/* Quiz Section */}
          {exercise.quiz && (
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h5" gutterBottom>
                Quiz Time! 🎯
              </Typography>
              <Typography variant="body1" gutterBottom>
                {exercise.quiz.question}
              </Typography>
              {exercise.quiz.options.map((option, index) => (
                <Box key={index} sx={{ marginBottom: 1 }}>
                  <input
                    type="radio"
                    name="quiz"
                    value={option}
                    onChange={(e) => setQuizAnswer(e.target.value)}
                  />
                  <label className="ms-2">{option}</label>
                </Box>
              ))}
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: 2 }}
                onClick={handleQuizSubmit}
              >
                Submit Answer
              </Button>
            </Box>
          )}

          {/* Completion Button */}
          <Button
            variant="outlined"
            sx={{ marginTop: 3 }}
            color={completed ? "success" : "secondary"}
            disabled={completed}
          >
            {completed ? "✅ Completed" : "Not Completed Yet"}
          </Button>
        </CardContent>
      </Card>

      {/* Toast Notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleToastClose} severity={toastSeverity} sx={{ width: "100%" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ExercisePage;
