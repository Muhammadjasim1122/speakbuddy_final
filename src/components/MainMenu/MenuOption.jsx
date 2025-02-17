import PropTypes from "prop-types";

const MenuOption = ({ image, altText, text, path, handleNavigation }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
      <button
        className="menu-option text-center"
        onClick={() => handleNavigation(path)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleNavigation(path);
          }
        }}
        role="button"
      >
        <div className="circle-container">
          <img src={image} alt={altText} className="circle-image" />
        </div>
        <p className="menu-option-text">{text}</p>
      </button>
    </div>
  );
};

MenuOption.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleNavigation: PropTypes.func.isRequired,
};

export default MenuOption;
