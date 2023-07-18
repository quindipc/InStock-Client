import "./Header.scss";

// Dependnancies
import { NavLink } from "react-router-dom";

// Assets
import logo from "../../assets/Logo/InStock-Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <NavLink
          to="/"
          activeClassName="header__link--active"
          className="no_underline"
        >
          <img src={logo} alt="Instock Logo" />
        </NavLink>
      </div>
      <div className="header__links">
        <div className="header__link-container">
          <NavLink
            exact
            to="/warehouses"
            activeClassName="header__link--active"
            className="header__link no_underline"
          >
            Warehouses
          </NavLink>
        </div>
        <div className="header__link-container">
          <NavLink
            exact
            to="/inventory"
            activeClassName="header__link--active"
            className="header__link no_underline"
          >
            Inventory
          </NavLink>
        </div>
      </div>
    </header>
  );
}
