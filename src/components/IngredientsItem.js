import React from "react";
import { observer } from "mobx-react";

//Style
import { ListGroupItemStyled } from "../styles";

//Component

//Store
import categoryStore from "../stores/CategoryStore";

const IngredientsItem = ({ ingredient }) => {
  // const chosenIngredients = () => {

  //   categoryStore.ingredients.click = !categoryStore.ingredients.click;
  //   console.log("HI", categoryStore.ingredients.click);
  // };
  console.log("ITEM", ingredient);
  return (
    <>
      <input type="checkbox" onClick={console.log("HIIIIII")} />{" "}
      <h1>{ingredient.name}</h1>
    </>
  );
};

export default observer(IngredientsItem);
