import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ReviewsSection from './ReviewsSection';
import Blog from "./Blog";
import Footer from './Footer';
import About from './About';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <About/>
      <FeaturesSection />
      <ReviewsSection />
      <Blog/>
      <Footer />
      
    </div>
  );
};

export default Home;
