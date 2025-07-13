// src/components/Navbar.tsx
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="navbar-link"
                activeClass="active"
                spy={true}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/DarkIsCool10"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-github"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
