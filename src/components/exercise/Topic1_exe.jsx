import { useState, useEffect } from "react";
import "./VowelAnimation.css";

const vowels = [
  { image: "/assets/img/VowelA.png", letter: "A" },
  { image: "/assets/img/VowelE.png", letter: "E" },
  { image: "/assets/img/VowelI.png", letter: "I" },
  { image: "/assets/img/VowelO.png", letter: "O" },
  { image: "/assets/img/VowelU.png", letter: "U" },
];

const VowelAnimation = () => {
  const [visibleVowels, setVisibleVowels] = useState([]); // Store vowels that should be visible

  useEffect(() => {
    if (visibleVowels.length < vowels.length) {
      const timer = setTimeout(() => {
        setVisibleVowels([...visibleVowels, vowels[visibleVowels.length]]);
      }, 2000); // Show next vowel every 2 seconds

      return () => clearTimeout(timer);
    }
  }, [visibleVowels]);

  return (
    <div className="vowel-animation-container">
      <h1 className="curved-heading">
        <span>V</span><span>O</span><span>W</span><span>E</span><span>L</span>
      </h1>

      <div className="vowel-grid">
        {visibleVowels.map((vowel, index) => (
          <img 
            key={index} 
            src={vowel.image} 
            alt={vowel.letter} 
            className="vowel-image visible"
          />
        ))}
      </div>
    </div>
  );
};

export default VowelAnimation;
