import logo from '../Assets/planet.png';

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <ul>
          <li>Rockets</li>
          <li>Missons</li>
          <li>My profile</li>
        </ul>
      </div>
    </header>
  );
}
export default Navbar;
