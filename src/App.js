import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  
  const skills = [
    { name: "HTML ", progress: 90 },
    { name: "CSS ", progress: 85 },
    { name: "JavaScript ", progress: 80 },
    { name: "MongoDB ", progress: 70 },
    { name: "Node.js", progress: 90 },
    { name: "Express", progress: 90 },
  ];

  return (
    <>
      <Hero />
      <About />
      <Skills skills={skills} />
      <Portfolio/>
      <Footer />
    </>
  );
}

export default App;
