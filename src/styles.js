import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const AddButtonStyle = styled.div`
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
  p {
    display: inline-flex;
    font-family: "Londrina Sketch", cursive;
    color: green;
    font-size: 40px;
    font-weight: bold;
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
  margin-top: 142px;
  color: black;
  font-family: "Cabin Sketch", cursive;
  font-size: 65px;
  font-weight: bold;
`;

export const ListGroupItemStyled = styled.div`
  font-family: "Rock Salt", cursive;
  border-bottom: 1.5px solid white;
  color: red;

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
