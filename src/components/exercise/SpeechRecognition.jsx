import { useState, useEffect } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import { Mic, MicOff} from "@mui/icons-material";

function calculateMatchPercentage(correct, actual) {
  const correctWords = correct.toLowerCase().split(" ");
  const actualWords = actual.toLowerCase().split(" ");

  let matches = 0;
  actualWords.forEach((word) => {
    if (correctWords.includes(word)) matches++;
  });

  return Math.round((matches / correctWords.length) * 100);
}

function generateSuggestions(correct, actual) {
  const suggestions = [];
  const correctLower = correct.toLowerCase();
  const actualLower = actual.toLowerCase();

  if (actualLower.length < correctLower.length) {
    suggestions.push("Try to pronounce all parts of the word clearly.");
  }

  const commonSubstitutions = {
    th: ["f", "t"],
    r: ["w", "l"],
    l: ["r", "w"],
    v: ["b", "f"],
    w: ["v", "r"],
  };

  Object.entries(commonSubstitutions).forEach(([correct, alternatives]) => {
    alternatives.forEach((alt) => {
      if (actualLower.includes(alt) && correctLower.includes(correct)) {
        suggestions.push(`Focus on the '${correct}' sound - it sounds different from '${alt}'`);
      }
    });
  });

  if (suggestions.length === 0) {
    suggestions.push("Try speaking more slowly and clearly.");
    suggestions.push("Practice each syllable separately.");
  }

  return [...new Set(suggestions)].slice(0, 3);
}

export default function SpeechRecognition({ correctAnswer, onResult }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [matchPercentage, setMatchPercentage] = useState(0);
  const [toast, setToast] = useState({ open: false, message: "", severity: "info" });

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error("Speech recognition not supported");
      return;
    }

    const recognition = new (window).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const result = event.results[last][0];
      const transcript = result.transcript.trim().toLowerCase();
      const confidence = Math.round(result.confidence * 100);

      setTranscript(transcript);
      setConfidence(confidence);

      if (event.results[last].isFinal) {
        const match = calculateMatchPercentage(correctAnswer, transcript);
        setMatchPercentage(match);

        const suggestions = generateSuggestions(correctAnswer, transcript);
        const isCorrect = match >= 80;

        onResult(isCorrect, {
          transcript,
          confidence,
          matchPercentage: match,
          suggestions,
        });

        let toastMessage = "";
        let toastSeverity = "info";

        if (match >= 80) {
          toastMessage = "🎯 Excellent! Your pronunciation is spot on!";
          toastSeverity = "success";
        } else if (match > 50) {
          toastMessage = `💡 Almost there! Try again: ${suggestions[0]}`;
          toastSeverity = "warning";
        } else {
          toastMessage = `😅 Needs improvement! Try these tips: ${suggestions[0]}`;
          toastSeverity = "error";
        }

        setToast({ open: true, message: toastMessage, severity: toastSeverity });
        setIsListening(false);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setToast({
        open: true,
        message: "❌ Oops! Could not hear you. Try again!",
        severity: "error",
      });
      setIsListening(false);
    };

    if (isListening) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, correctAnswer, onResult]);

  return (
    <div className="space-y-6 text-center">
      <Button
        onClick={() => setIsListening(!isListening)}
        variant={isListening ? "contained" : "outlined"}
        color={isListening ? "error" : "primary"}
        size="large"
        startIcon={isListening ? <MicOff /> : <Mic />}
      >
        {isListening ? "Stop Recording" : "Start Recording"}
      </Button>

     

      {transcript && (
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="font-medium text-lg">Your Pronunciation:</p>
          <p className="text-primary text-xl">{transcript}</p>



          <div className="mt-4">
            <p className="text-sm">Match Percentage: {matchPercentage}%</p>
            <div
              style={{
                width: `${matchPercentage}%`,
                height: "10px",
                backgroundColor: matchPercentage > 50 ? "#4caf50" : "rgb(239 68 68 / 0.2)",
                transition: "width 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
      )}

      <Snackbar open={toast.open} autoHideDuration={3000} onClose={() => setToast({ ...toast, open: false })}>
        <Alert severity={toast.severity} sx={{ width: "100%" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
