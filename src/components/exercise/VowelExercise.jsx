import VowelCard from "./VowelCard";
const VowelBoard = () => {
  const vowels = [
    { letter: "A", word: "Apple", image: "assets/img/Apple.png", sound: "/a.mp3" },
    { letter: "E", word: "Elephant", image: "assets/img/Elephant.png", sound: "/e.mp3" },
    { letter: "I", word: "Igloo", image: "assets/img/Igloo.png", sound: "/i.mp3" },
    { letter: "O", word: "Orange", image: "assets/img/Orange.png", sound: "/o.mp3" },
    { letter: "U", word: "Umbrella", image: "assets/img/Umbrella.png", sound: "/u.mp3" },
  ];

  return (
    <div className="container-v mt-4 p-4 border rounded" >
      <h3 className="text-center">Vowels</h3>
      <p className="text-center small">A vowel is a letter that you can say with your tongue in the middle of your mouth without touching your lips or teeth.</p>
      <div className="row g-3 justify-content-center d-flex flex-wrap">
        {vowels.map((vowel, index) => (
          <VowelCard key={index} {...vowel} />
        ))}
      </div>
    </div>
  );
};

export default VowelBoard;
