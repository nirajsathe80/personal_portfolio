import Skills from "./components/skills";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Experience from "./components/experience";

function App() {
  return (
    <div className="w-[80vw] mx-auto">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
