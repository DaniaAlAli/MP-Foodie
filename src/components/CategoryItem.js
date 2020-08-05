import React from "react";

//Style
import { ListGroupItemStyled } from "../styles";

//Component

const CategoryItem = ({ category }) => {
  return (
    <>
      <ListGroupItemStyled>
        <img src={category.image} />
        <h2>{category.name}</h2>
      </ListGroupItemStyled>
    </>
  );
};

export default CategoryItem;
