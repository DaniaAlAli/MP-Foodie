import React from "react";

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
            to="categories/recipes"
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
