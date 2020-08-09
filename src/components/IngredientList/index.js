import React from "react";
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

//Components

import IngredientItem from "./IngredientItem";

//Style
import { ListGroupItemStyled, AddIngredientWrap } from "../../styles";
//Store
import ingredientStore from "../../stores/IngredientStore";
import categoryStore from "../../stores/CategoryStore";

const IngredientList = ({ ingredients }) => {
  if (!ingredients) ingredients = ingredientStore.ingredients;

  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem ingredient={ingredient} key={ingredient.id} />
  ));
  return <ListGroupItemStyled>{ingredientList} </ListGroupItemStyled>;
};

export default observer(IngredientList);
