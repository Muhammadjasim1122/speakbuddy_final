import { useState } from "react";
import PropTypes from 'prop-types';
import { ExpandMore, ExpandLess } from "@mui/icons-material"; 
import { Link } from "react-router-dom";

const LevelCard = ({ title,  topics, isLocked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    if (!isLocked) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className={`level-card ${isLocked ? "locked" : "unlocked"}`}>
      <h2>{title}  {isLocked && "🔒"}</h2>

      <button
        className={`button btn ${isLocked ? "btn-secondary disabled" : "btn-primary"}`}
        onClick={toggleDropdown}
        disabled={isLocked}
      >
        {isLocked ? "Locked" : "Start Level"}
        {isOpen ? <ExpandLess className="ms-2" /> : <ExpandMore className="ms-2" />}
      </button>

      {isOpen && (
        <ul className="submenu">
          {topics.map((topic, index) => (
            <li key={index} className="flex justify-between" >
              <Link to={topic.link} className="topic-name">
                <strong>Topic {index + 1}:</strong> {topic.name}
              </Link>
              <span className="topic-icon">{topic.icon}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

LevelCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  })).isRequired,
  isLocked: PropTypes.bool.isRequired,
};

export default LevelCard;
