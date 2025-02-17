import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Login from './components/LogReg/Login.jsx';
import Reg from './components/LogReg/Reg.jsx';
import ForgetPassword from './components/LogReg/forgetPassword.jsx';
import ResetPassword from './components/LogReg/ResetPassword.jsx';
import Home from './components/homePage/Home.jsx';
import Menu from './components/MainMenu/menu.jsx';
import SpeechExercises from './components/exercise/SpeechExercises.jsx';
import Level2Exercise from './components/exercise/Level2Exercise.jsx';
import Level3Exercise from './components/exercise/Level3Exercise.jsx';
import ExerciseList from './components/exercise/ExerciseList.jsx';  
import ExercisePage from './components/exercise/ExercisePage.jsx'; 
import VowelSounds from "./components/exercise/Topic1/VowelSounds";
import ConsonantSounds from "./components/exercise/Topic1/ConsonantSounds";
import MouthMovements from "./components/exercise/Topic1/MouthMovements";
import MatchingSounds from "./components/exercise/Topic1/MatchingSounds"
import RepeatingWords from "./components/exercise/Topic1/RepeatingWords";
import VowelGame from "./components/exercise/VowelGame";
function App() {
  return (
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/speech-exercises" element={<SpeechExercises />} />
          <Route path="/level2Exercise" element={<Level2Exercise />} />
          <Route path="/level3Exercise" element={<Level3Exercise />} />
          <Route path="/ExerciseList" element={<ExerciseList />} />
          <Route path="/exercise/:id" element={<ExercisePage />} />
          <Route path="/VowelSounds" element={<VowelSounds />} />
        <Route path="/ConsonantSounds" element={<ConsonantSounds />} />
        <Route path="/MouthMovements" element={<MouthMovements />} />
        <Route path="/MatchingSounds" element={<MatchingSounds />} />
        <Route path="/RepeatingWords" element={<RepeatingWords />} />
        <Route path="/vowelgame/:id" element={<VowelGame />} />
              </Routes>
      </BrowserRouter>
  );
}

export default App;
