import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Stats from "../Stats/Stats";
import PatientFeatures from "../PatientFeatures/PatientFeatures";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <Stats/>
      <PatientFeatures/>
    </div>  
  );
};

export default Home;
