import { NavLink } from 'react-router-dom';
import logo from '../Assets/planet.png';
import '../navbar.css';

function Navbar() {
  const links = [
    { path: '/', name: 'Rockets' },
    { path: '/missions', name: 'Missions' },
    { path: '/myprofile', name: 'My Profile' },
  ];

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navigation">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Navbar;
