import Globe from "./components/Globe";
import FeatureSection from "./sections/FeatureSection";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import ServiceSection from "./sections/ServiceSection";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import HeaderTxtPhn from "./components/HeaderTxtPhn";

const App = () => {
  return (
    <div className="font-sans antialiased">
      <NavBar />
      <Hero />
      <HeaderTxtPhn />
      <ServiceSection />
      <FeatureSection />
      <Testimonials />
      <Globe />
      <Footer />
    </div>
  );
};

export default App;
