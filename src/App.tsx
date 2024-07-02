import Skills from "./components/skills";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import Projects from "./components/projects";

function App() {
  return (
    <div className="w-[80vw] mx-auto">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
