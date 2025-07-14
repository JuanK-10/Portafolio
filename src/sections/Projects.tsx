type Project = {
  title: string;
  image: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Gestor de Tareas",
    image: "/projects/tareas.png", // Coloca la ruta real
    github: "https://github.com/DarkIsCool10/todo-app",
  },
  {
    title: "Portafolio Web",
    image: "/projects/portafolio.png",
    github: "https://github.com/DarkIsCool10/portafolio",
  },
  {
    title: "Sistema Inventario",
    image: "/projects/inventario.png",
    github: "https://github.com/DarkIsCool10/inventario",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My projects</h2>
        <p>Work in progress...</p>
        {/* <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
