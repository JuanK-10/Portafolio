// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {" "}
        {/* Empuja el contenido debajo del navbar fijo */}
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
