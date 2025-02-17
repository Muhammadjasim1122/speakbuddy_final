const defaultExercises = [
    // Vowel Sounds
    {
      type: "vowels",
      name: "Fun with Short 'A' Sound! 🍎",
      description: "Let's learn the short 'A' sound like in 'apple' and 'cat'!",
      audioUrl: "/api/audio/short-a.mp3",
      order: 1,
      quiz: {
        question: "Which word has the short 'A' sound?",
        options: ["Apple", "Orange"],
        correctAnswer: "Apple",
      },
    },
    {
      type: "vowels",
      name: "The Magic 'E' Sound! 🐘",
      description: "Learn the short 'E' sound like in 'elephant' and 'egg'!",
      audioUrl: "/api/audio/short-e.mp3",
      order: 2,
      quiz: {
        question: "Which word contains the short 'E' sound?",
        options: ["Pen", "Bike"],
        correctAnswer: "Pen",
      },
    },
    {
      type: "vowels",
      name: "The Fun 'I' Sound! 🍦",
      description: "Practice the short 'I' sound like in 'igloo' and 'in'!",
      audioUrl: "/api/audio/short-i.mp3",
      order: 3,
      quiz: {
        question: "Which word has the short 'I' sound?",
        options: ["Ice", "Igloo"],
        correctAnswer: "Igloo",
      },
    },
    {
      type: "vowels",
      name: "Round 'O' Sound! 🍊",
      description: "Make the short 'O' sound like in 'orange' and 'octopus'!",
      audioUrl: "/api/audio/short-o.mp3",
      order: 4,
      quiz: {
        question: "Which word contains the short 'O' sound?",
        options: ["Octopus", "Apple"],
        correctAnswer: "Octopus",
      },
    },
    {
      type: "vowels",
      name: "Upward 'U' Sound! ☂️",
      description: "Practice the short 'U' sound like in 'umbrella' and 'up'!",
      audioUrl: "/api/audio/short-u.mp3",
      order: 5,
      quiz: {
        question: "Which word has the short 'U' sound?",
        options: ["Umbrella", "Ant"],
        correctAnswer: "Umbrella",
      },
    },
  
    // Consonant Sounds
    {
      type: "consonants",
      name: "Short 'B' Sound! 🐝",
      description: "Practice the short 'B' sound like in 'ball' and 'bat'!",
      audioUrl: "/api/audio/short-b.mp3",
      order: 6,
      quiz: {
        question: "Which word has the short 'B' sound?",
        options: ["Ball", "Cat"],
        correctAnswer: "Ball"
      }
    },
    {
      type: "consonants",
      name: "Short 'C' Sound! 🧃",
      description: "Practice the short 'C' sound like in 'cat' and 'cup'!",
      audioUrl: "/api/audio/short-c.mp3",
      order: 7,
      quiz: {
        question: "Which word has the short 'C' sound?",
        options: ["Cat", "Dog"],
        correctAnswer: "Cat"
      }
    },
    {
      type: "consonants",
      name: "Short 'D' Sound! 🦋",
      description: "Practice the short 'D' sound like in 'dog' and 'duck'!",
      audioUrl: "/api/audio/short-d.mp3",
      order: 8,
      quiz: {
        question: "Which word has the short 'D' sound?",
        options: ["Dog", "Fish"],
        correctAnswer: "Dog"
      }
    },
    {
      type: "consonants",
      name: "Short 'F' Sound! 🍟",
      description: "Practice the short 'F' sound like in 'fun' and 'fish'!",
      audioUrl: "/api/audio/short-f.mp3",
      order: 9,
      quiz: {
        question: "Which word has the short 'F' sound?",
        options: ["Fish", "Cake"],
        correctAnswer: "Fish"
      }
    },
    {
      type: "consonants",
      name: "Short 'G' Sound! 🍇",
      description: "Practice the short 'G' sound like in 'go' and 'grape'!",
      audioUrl: "/api/audio/short-g.mp3",
      order: 10,
      quiz: {
        question: "Which word has the short 'G' sound?",
        options: ["Go", "Toy"],
        correctAnswer: "Go"
      }
    },
    {
      type: "consonants",
      name: "Short 'H' Sound! 🐯",
      description: "Practice the short 'H' sound like in 'hat' and 'house'!",
      audioUrl: "/api/audio/short-h.mp3",
      order: 11,
      quiz: {
        question: "Which word has the short 'H' sound?",
        options: ["Hat", "Pen"],
        correctAnswer: "Hat"
      }
    },
  
    // Mouth & Tongue Movements
    {
      type: "mouth",
      name: "Fish Face Fun! 🐟",
      description: "Make a fish face to practice your 'O' sound!",
      audioUrl: "/api/audio/o-sound.mp3",
      order: 7,
    },
  
    // Syllable Exercises
    {
      type: "syllables",
      name: "Clap the Syllables! 👏",
      description: "Let's break words into parts by clapping!",
      audioUrl: "/api/audio/elephant-syllables.mp3",
      order: 8,
    },
    {
      type: "syllables",
      name: "Word Building Blocks 🧱",
      description: "Put syllables together to make words!",
      audioUrl: "/api/audio/butter.mp3",
      order: 9,
    },
  
    // Sound Identification
    {
      type: "sound_identification",
      name: "Beginning Sound Detective 🔍",
      description: "Can you find what sound comes first?",
      audioUrl: "/api/audio/dog-sound.mp3",
      order: 10,
    },
    {
      type: "sound_identification",
      name: "Ending Sound Explorer 🎯",
      description: "Let's discover the last sound in words!",
      audioUrl: "/api/audio/cat-end.mp3",
      order: 11,
    },
  
    // Pronunciation Correction
    {
      type: "pronunciation_correction",
      name: "Tongue Twister Time! 👅",
      description: "Practice these fun phrases carefully!",
      audioUrl: "/api/audio/tongue-twister.mp3",
      order: 12,
    },
    {
      type: "pronunciation_correction",
      name: "Sound Like a Native! 🎭",
      description: "Fix common pronunciation mistakes!",
      audioUrl: "/api/audio/th-sound.mp3",
      order: 13,
    },
  
    // Word Recognition
    {
      type: "word_recognition",
      name: "Picture Perfect Words! 🖼️",
      description: "Match the picture with the correct word!",
      audioUrl: "/api/audio/cat-meow.mp3",
      order: 14,
    },
    {
      type: "word_recognition",
      name: "Word Family Fun! 🏠",
      description: "Find words that rhyme and sound the same!",
      audioUrl: "/api/audio/cat-hat.mp3",
      order: 15,
    },
  ];
  
  export default defaultExercises;
  