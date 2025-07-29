import { NavLink } from 'react-router-dom';
import './NavBar.css'; 

export default function NavBar() {
  return (
    <header className="nav">
      <NavLink to="/" className="logo" style={{ fontWeight: 700, fontSize: '1.25rem', marginRight: '2rem' }}>
        Lauren Salitan
      </NavLink>
      <nav>
        <NavLink to="/experience" className="nav-link"> Experience </NavLink>
        <NavLink to="/projects" className="nav-link"> Projects </NavLink>
        <NavLink to="/about" className="nav-link"> About </NavLink>
        <NavLink to="/contact" className="nav-link"> Contact </NavLink>
      </nav>
    </header>
  );
}
