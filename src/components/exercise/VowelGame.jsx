import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import "./VowelGame.css"; // Import custom CSS
import { Link } from "react-router-dom";

const defaultExercises = [
  {
    id: "1",
    title: "Short 'A' Sound Game 🍎",
    wordsWithEmojis: [
      { word: "cat", emoji: "🐱" },
      { word: "hat", emoji: "🎩" },
      { word: "map", emoji: "🗺️" },
    ],
  },
  {
    id: "2",
    title: "Short 'E' Sound Game 🥚",
    wordsWithEmojis: [
      { word: "pen", emoji: "🖊️" },
      { word: "bed", emoji: "🛏️" },
      { word: "net", emoji: "🎣" },
    ],
  },
  {
    id: "3",
    title: "Short 'I' Sound Game 🍦",
    wordsWithEmojis: [
      { word: "pig", emoji: "🐷" },
      { word: "fig", emoji: "🍈" },
      { word: "lip", emoji: "👄" },
    ],
  },
  {
    id: "4",
    title: "Round 'O' Sound! 🍊",
    wordsWithEmojis: [
      { word: "dog", emoji: "🐶" },
      { word: "fox", emoji: "🦊" },
      { word: "log", emoji: "🌳" },
    ],
  },
  {
    id: "5",
    title: "Upward 'U' Sound! ☂️",
    wordsWithEmojis: [
      { word: "sun", emoji: "🌞" },
      { word: "cup", emoji: "🍵" },
      { word: "bug", emoji: "🐞" },
    ],
  },
  {
    id: "6",
    title: "Consonant 'B' Sound Game 🐝",
    wordsWithEmojis: [
      { word: "bat", emoji: "🦇" },
      { word: "bag", emoji: "👜" },
      { word: "box", emoji: "📦" },
    ],
  },
  {
    id: "7",
    title: "Consonant 'C' Sound Game 🦋",
    wordsWithEmojis: [
      { word: "cat", emoji: "🐱" },
      { word: "cup", emoji: "🍵" },
      { word: "cake", emoji: "🍰" },
    ],
  },
  {
    id: "8",
    title: "Consonant 'D' Sound Game 🦒",
    wordsWithEmojis: [
      { word: "dog", emoji: "🐶" },
      { word: "door", emoji: "🚪" },
      { word: "doll", emoji: "🪆" },
    ],
  },
  {
    id: "9",
    title: "Consonant 'F' Sound Game 🐸",
    wordsWithEmojis: [
      { word: "fan", emoji: "🪴" },
      { word: "fish", emoji: "🐟" },
      { word: "foot", emoji: "🦶" },
    ],
  },
  {
    id: "10",
    title: "Consonant 'G' Sound Game 🍇",
    wordsWithEmojis: [
      { word: "goat", emoji: "🐐" },
      { word: "gum", emoji: "🍬" },
      { word: "girl", emoji: "👧" },
    ],
  },
  {
    id: "11",
    title: "Consonant 'H' Sound Game 🦜",
    wordsWithEmojis: [
      { word: "hat", emoji: "🎩" },
      { word: "hot", emoji: "🌶️" },
      { word: "house", emoji: "🏠" },
    ],
  },
];


const playSound = (word) => {
  const msg = new SpeechSynthesisUtterance(word);
  window.speechSynthesis.speak(msg);
};

const VowelGame = () => {
  const { id } = useParams();
  const exercise = defaultExercises.find((ex) => ex.id === id);
  const [words, setWords] = useState(exercise?.wordsWithEmojis || []);
  const [basket, setBasket] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleClick = (wordObj) => {
    playSound(wordObj.word);
    setBasket([...basket, wordObj]);
    setWords(words.filter((w) => w.word !== wordObj.word));
    setProgress(((basket.length + 1) / exercise.wordsWithEmojis.length) * 100);
  };

  if (!exercise) return <h2 style={{ textAlign: "center", color: "red" }}>Exercise not found!</h2>;

  return (
    <div className="game-container">
      <h2 className="title">{exercise.title}</h2>
      <p className="subtitle">Drag the apples with words to the matching picture basket!</p>

    

      <LinearProgress variant="determinate" value={progress} className="progress-bar" />

      <div className="game-area">
        {/* Left Side: Word List */}
        <div className="word-list">
          {words.map((wordObj) => (
            <motion.div
              key={wordObj.word}
              className="word-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(wordObj)}
            >
              <span className="emoji">{wordObj.emoji}</span>
              <span className="word-text">{wordObj.word}</span>
              <button className="play-button" onClick={(e) => { e.stopPropagation(); playSound(wordObj.word); }}>
                🔊
              </button>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Basket */}
        <div className="basket">
          {basket.length > 0 && <span className="emoji-display">{basket[basket.length - 1].emoji}</span>}
        </div>

        <div className="button-group">
        <Link to={`/exercise/${exercise.id}`} className="custom-button">
  <Button variant="contained">
    QUIZ TIME
  </Button>
</Link>
      </div>
      </div>
    </div>
  );
};

export default VowelGame;
