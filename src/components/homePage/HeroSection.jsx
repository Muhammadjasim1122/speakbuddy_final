import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section home1" id="home">
      <div className="hero-content">
        <h1 className="main-headline animate-text">
          <span className="highlight">Speech Therapy</span>
          <br />
          <span className="fun-playful">Made Fun & Playful!</span>
        </h1>
        <p className="sub-headline animate-text-delay">
          Empowering children through interactive speech therapy exercises and engaging activities that make learning fun and effective.
        </p>
        <div className="cta-container">
          <button className="get-started-btn" onClick={() => navigate('/login')}>
            Start Your Journey <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="floating-shapes">
          {['🎈', '🌟', '✨', '🎨', '🎯', '🎪'].map((shape, index) => (
            <div key={index} className={`shape shape-${index + 1}`}>{shape}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
