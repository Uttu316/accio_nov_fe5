import logo from "../../assets/react.svg";
import "./header.css";
const Header = (props) => {
  return (
    <header className="header">
      <div className="header_left">
        <img src={logo} className="header_logo" />
        <h2>{props.title}</h2>
      </div>
      <nav className="navbar">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
