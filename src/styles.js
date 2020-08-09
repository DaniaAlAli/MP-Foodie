import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const AddButtonStyle = styled.div`
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 30px;
  p {
    display: inline-flex;
    font-family: "Londrina Sketch", cursive;
    color: green;
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
  }
`;

export const CreateButtonStyled = styled.button`
  color: red;
  background-color: grey;
  font-family: "Londrina Sketch", cursive;
  &:hover {
    color: blue;
    background-color: white;
  }
`;

export const DeleteButtonStyled = styled.p`
  float: right;
  text-align: center;
  padding-right: 15px;
`;

export const GlobalStyle = createGlobalStyle`
body{
  background-image: url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80");
  opacity: .9;
  }
`;

export const ListStyled = styled.div`
  margin-top: 80px;
  color: black;
  font-family: "Cabin Sketch", cursive;
  font-size: 40px;
  font-weight: bold;
`;

export const ListGroupItemStyled = styled.div`
  font-family: "Rock Salt", cursive;
  border-bottom: 1.5px solid white;
  color: red;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  h1 {
    font-weight: bold;
    color: #01018e;
    border: 2px solid #01018e;
    background-color: #7f7fed;
    border-radius: 15px;
    width: 100px;
    text-align: center;
    font-size: 15px;
  }
  h2 {
    font-weight: bold;
    font-size: 30px;
    span {
      font-size: 25px;
      color: black;
      font-weight: bold;
    }
  }

  p {
    font-weight: bold;
    font-size: 20px;
    span {
      font-size: 15px;
      color: black;
      font-weight: bold;
    }
    &.dueDate {
      font-size: 17px;
      color: blue;
      text-align: center;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 15px;
    span {
      font-size: 25px;
      color: black;
      font-weight: bold;
    }
  }
`;

export const StatusButtonStyled = styled.p`
  float: right;
  text-align: center;
  margin-right: 10px;
`;

export const TitleWrap = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 50.5px;
  text-align: center;
  color: red;
  img {
    margin-top: 20px;
    width: 45%;
  }
`;

export const Title = styled.h1`
  font-family: "Covered By Your Grace", cursive;
  color: #1d1a1a;
  font-size: 90px;
  padding: 9px;
`;

export const LinkI = styled(Link)`
  color: red;
`;

export const LogoLink = styled(Link)`
  padding: 3em;
  img {
    width: 140px;
  }
`;
export const NavItem = styled(NavLink)`
  &.active {
    color: green;
  }
`;

export const NavStyled = styled.nav`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const AddIngredientStyle = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  color: red;
  border: solid 2px black;

  img {
    margin-top: 20px;
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  p {
    color: red;
    font-size: 20px;
    font-family: "Londrina Sketch", cursive;
    text-align: center;
    margin-bottom: 1px;
  }
  h2 {
    color: black;
    font-size: 20px;
    font-family: "Londrina Sketch", cursive;
    text-align: center;
    margin-top: 1px;
  }
`;

export const AddIngredientWrap = styled.div`
  display: grid;
  float: left;
  margin-left: 25px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  h2 {
    color: black;
    font-size: 18px;
    font-family: "Londrina Sketch", cursive;
    text-align: center;
    margin-top: 1px;
  }
  p {
    color: red;
    font-size: 20px;
    font-family: "Londrina Sketch", cursive;
    text-align: center;
    margin-bottom: 1px;
  }
`;
export const ListGroupRecipeStyled = styled.div`
  font-family: "Rock Salt", cursive;

  color: red;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 600px;

  img {
    width: 250px;
    height: 200px;
    border-radius: 8px;
    text-align: center;
  }
  h1 {
    font-weight: bold;
    color: #01018e;
    border: 2px solid #01018e;
    background-color: #7f7fed;
    border-radius: 15px;
    width: 100px;
    text-align: center;
    font-size: 15px;
  }
  h2 {
    font-weight: bold;
    font-size: 40px;
    color: green;
    font-weight: bold;
  }

  p {
    font-weight: bold;
    font-size: 30px;

    color: black;
    font-weight: bold;
  }
  &.dueDate {
    font-size: 17px;
    color: blue;
    text-align: center;
  }
`;

export const Recipesetail = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h3 {
    /* display: inline-flex; */
    font-family: "Londrina Sketch", cursive;
    color: red;
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
    text-align: center;
  }
  p {
    font-weight: bold;
    font-size: 30px;

    color: black;
    font-weight: bold;
  }
`;
