import React from "react";
import { Link } from "react-router-dom";

//Style
import { LogoLink, NavStyled, NavItem } from "../styles";

const NavBar = () => {
  return (
    <NavStyled className="container" className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <LogoLink to="/">
          <img alt="logo" src="cooking.png" />
        </LogoLink>
        <ul className="navbar-nav mr-auto">
          <NavItem
            className="nav-item "
            to="/recipes"
            style={{
              margin: 1,
              float: "center",
              fontFamily: "Sedgwick Ave, cursive",
              fontSize: "35px",
              color: "#2a8e1a",
            }}
          >
            Recipes
          </NavItem>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
