import { useNavigate } from "react-router-dom";
import "./menu.css";
import MenuOption from "./MenuOption";
import LetterFloating from "./LetterFloating";


const Menu = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="menu-container d-flex flex-column justify-content-center align-items-center m-auto container-fluid full-screen">
      <LetterFloating/>
      {/* Logo and Heading Section */}
      
      <div className="container text-center">
  <div className="row">
    <div className="col-12">
      <h2 className="menu-subtitle">Choose Option</h2>
    </div>
  </div>
</div>

      {/* Options Section */}
      <div className="container">
        <div className="row">
          <MenuOption
            image={"assets/img/speech.png"} 
            altText="Speech Exercises"
            text="Speech Exercises"
            path="/speech-exercises"
            handleNavigation={handleNavigation}
          />
          <MenuOption
            image={"assets/img/tutorial.png"}
            altText="Speech Tutorial"
            text="Speech Tutorial"
            path="/Tutorial"
            handleNavigation={handleNavigation}
          />
          <MenuOption
            image={"assets/img/progress.png"}
            altText="Speech Progress"
            text="Speech Progress"
            path="/progress"
            handleNavigation={handleNavigation}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
