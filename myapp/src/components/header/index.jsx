import { Link, NavLink } from "react-router";
import logo from "../../assets/react.svg";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Header = (props) => {
  const { isCartEmpty, cartSize } = useContext(CartContext); //step 3

  return (
    <header className="header">
      <div className="header_left">
        <Link to="/">
          <img src={logo} className="header_logo" />
        </Link>
        <h2>{props.title || "Hello"}</h2>
      </div>
      <nav className="navbar">
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          Cart{!isCartEmpty && <span className="badge">{cartSize}</span>}
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
