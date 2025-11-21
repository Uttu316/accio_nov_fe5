import logo from "../../assets/react.svg";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header_logo" />
      <nav className="navbar">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
