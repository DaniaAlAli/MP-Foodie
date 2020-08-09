import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

//Components

import RecipeList from "./RecipeList";
import RecipeItem from "./RecipeList/RecipeItem";

//Store
import recipeStore from "../stores/RecipeStore";

import { ListGroupItemStyled } from "../styles";
const RecipeDetail = () => {
  if (!recipeStore.filterI.name) return null;

  return (
    <ListGroupItemStyled>
      <h2>{recipeStore.filterI.name}</h2>
      <img src={recipeStore.filterI.image} />
      <h3>Instruction</h3>
      <p>{recipeStore.filterI.instruction}</p>
    </ListGroupItemStyled>
  );
};

export default observer(RecipeDetail);
