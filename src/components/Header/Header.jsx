import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <span>🚗</span>       
        </Link>
      </div>
      <Nav />
    </header>
  );
};