import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Title, TitleWrap, LinkI } from "../styles";

const Home = () => {
  return (
    <>
      <TitleWrap>
        {/* <LinkI to={`/categories`}> */}
        <Title>Explore and Create</Title>
        <Title>Your Recipe</Title> {/* </LinkI> */}
        <Link to={`/categories`}>
          <img alt="logo" src="cooking.png"></img>
        </Link>
      </TitleWrap>
    </>
  );
};

export default Home;
