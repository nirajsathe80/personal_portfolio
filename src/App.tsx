import Skills from "./components/skills";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-[80vw] md:w-[90vw] mx-auto">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
