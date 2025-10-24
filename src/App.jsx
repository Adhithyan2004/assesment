import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import ServiceSection from "./sections/ServiceSection";

const App = () => {
  return (
    <div className="font-sans antialiased">
      <NavBar />
      <Hero />
      <ServiceSection />
    </div>
  );
};

export default App;
