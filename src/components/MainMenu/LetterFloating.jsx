import { useEffect } from "react";
const LetterFloating = () => {
  useEffect(() => {
    const englishLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const speechWords = ["who", "the", "she", "what"];

    const createFloatingLetter = (text, isWord = false) => {
      const letterDiv = document.createElement("div");
      letterDiv.className = `letter letter-en ${isWord ? "word" : ""}`;
      letterDiv.textContent = text;

      const startX = Math.random() * (window.innerWidth - 100);
      const startY = Math.random() * (window.innerHeight - 100);
      const moveX = (Math.random() - 0.5) * 400;
      const moveY = (Math.random() - 0.5) * 400;

      letterDiv.style.left = `${startX}px`;
      letterDiv.style.top = `${startY}px`;
      letterDiv.style.setProperty("--moveX", `${moveX}px`);
      letterDiv.style.setProperty("--moveY", `${moveY}px`);

      const duration = 12 + Math.random() * 15;
      const delay = Math.random() * -15;
      letterDiv.style.animationDuration = `${duration}s`;
      letterDiv.style.animationDelay = `${delay}s`;

      return letterDiv;
    };

    const floatingLettersContainer = document.createElement("div");
    floatingLettersContainer.className = "floating-letters";

    for (let i = 0; i < 10; i++) {
      const randomLetter =
        englishLetters[Math.floor(Math.random() * englishLetters.length)];
      floatingLettersContainer.appendChild(createFloatingLetter(randomLetter));
    }

    for (let i = 0; i < 5; i++) {
      const randomWord =
        speechWords[Math.floor(Math.random() * speechWords.length)];
      floatingLettersContainer.appendChild(createFloatingLetter(randomWord, true));
    }

    document.querySelector(".menu-container").appendChild(floatingLettersContainer);

    return () => {
      document.querySelector(".menu-container")?.removeChild(floatingLettersContainer);
    };
  }, []);

  return null;
};

export default LetterFloating;
