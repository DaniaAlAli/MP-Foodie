import React from "react";

//Style
import { ListGroupItemStyled } from "../styles";

//Component

const IngredientsItem = ({ category }) => {
  return (
    <>
      <ListGroupItemStyled>
        <h2>{category.ingredients}</h2>
      </ListGroupItemStyled>
    </>
  );
};

export default IngredientsItem;
