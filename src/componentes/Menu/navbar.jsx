import { Link } from 'react-router-dom';
import Logo from '../Logos/logoNavbar';

const Navbar = () => {
  return (
    <div className="navbar navbar--dark">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item navbar__item--active">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about">Nosotros</Link>
        </li>
        <li className="navbar__item">
          <Link to="/reales">Reales</Link>
        </li>
        <li className="navbar__item">
          <Link to="/dolares">Dólares</Link>
        </li>
        <li className="navbar__item">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <select className="navbar__language-selector">
        <option>Español</option>
        <option>Inglés</option>
      </select>
    </div>
  );
};

export default Navbar;
