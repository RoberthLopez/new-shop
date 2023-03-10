import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "@styles/Header.scss";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import Menu from "./Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  return (
    <nav>
      {toggleMobileMenu && <MobileMenu />}
      <img
        src={menu}
        alt="menu"
        className="nav-menu"
        onClick={handleToggleMobileMenu}
      />

      <div className="navbar-left">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder toggleOrders={handleToggleOrders} />}
    </nav>
  );
};

export default Header;
