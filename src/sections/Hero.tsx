// src/sections/Hero.tsx
const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          ¡Hi, I'm <br></br>Juan Camilo Albaran!
        </h1>
        <p className="hero-subtitle">
          Systems and computer engineer in training
        </p>
        <p className="hero-description">
          Passionate about computing. Learning React, Typescript, and responsive
          design.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-primary">
            My projects
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">Scroll down</div>
    </section>
  );
};

export default Hero;
