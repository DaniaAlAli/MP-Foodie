import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Store
import recipeStore from "../../stores/RecipeStore";

//Style
import { ListGroupItemStyled } from "../../styles";

const RecipeItem = ({ recipe }) => {
  return (
    <ListGroupItemStyled>
      <p onClick={() => recipeStore.FilteredRecipe(recipe.id)}>{recipe.name}</p>
      <h4 onClick={() => recipeStore.deleteRecipe(recipe.id)}>delete</h4>
    </ListGroupItemStyled>
  );
};

export default observer(RecipeItem);
