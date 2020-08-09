import React from "react";
import { observer } from "mobx-react";

//Style
import { ListGroupItemStyled, AddIngredientWrap } from "../../styles";

//Component

//Store
import ingredientStore from "../../stores/IngredientStore";

const AddIngredientItem = ({ ingredient }) => {
  // const ingredient = ingredientStore.ingredients.map(
  //   (ingredient) => _ingredient.id === ingredient.id
  // );

  console.log("in", ingredient);
  return (
    <AddIngredientWrap>
      <img src={ingredient.image} />

      <p onClick={() => ingredientStore.RemoveIngredient(ingredient)}>remove</p>

      <h2>{ingredient.name}</h2>
    </AddIngredientWrap>
  );
};

export default observer(AddIngredientItem);
