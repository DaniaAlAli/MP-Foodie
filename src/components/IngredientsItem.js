import React from "react";
import { observer } from "mobx-react";

//Style
import { ListGroupItemStyled } from "../styles";

//Component

//Store
import categoryStore from "../stores/CategoryStore";

const IngredientsItem = ({ ingredient }) => {
  console.log("Hi");
  console.log(ingredient);
  return (
    <>
      <h1>{ingredient.name}</h1>
    </>
  );
};

export default observer(IngredientsItem);
