import { FaJava, FaPython, FaReact, FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi! I'm Juan Albarán, a passionate junior developer interested in
          building creative and functional solutions. I love learning new
          technologies and applying them in personal and collaborative projects.
        </p>

        <div className="about-subsection">
          <h3 className="about-subtitle">Languages and Technologies</h3>
          <div className="about-icons">
            <FaJava className="about-icon java" title="Java" />
            <FaPython className="about-icon python" title="Python" />
            <FaReact className="about-icon react" title="React" />
          </div>
        </div>

        <div className="about-subsection">
          <h3 className="about-subtitle">Education</h3>
          <p className="about-education">
            <FaUniversity className="inline-icon" />
            &nbsp; Systems Engineering Student - Universidad del Quindio
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
