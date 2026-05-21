import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo" src="../src/assets/depositphotos_243587264-stock-illustration-auto-shop-sports-car-dealership.jpg" alt="logo" />
        </Link>
      </div>
      <Nav />
    </header>
  );
};
