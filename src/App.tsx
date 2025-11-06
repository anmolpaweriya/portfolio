import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Qualifications from "./components/Qualifications/Qualifications";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Qualifications />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
