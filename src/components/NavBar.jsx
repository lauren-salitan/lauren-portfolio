import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css'; 

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          Lauren Salitan
        </NavLink>

        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/experience" className={linkClass} onClick={() => setOpen(false)}>Experience</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
