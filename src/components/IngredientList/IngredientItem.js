import React from "react";
import { observer } from "mobx-react";

//Style
import { ListGroupItemStyled, AddIngredientWrap } from "../../styles";

//Component

//Store
import ingredientStore from "../../stores/IngredientStore";

const IngredientItem = ({ ingredient }) => {
  return (
    <AddIngredientWrap>
      <img src={ingredient.image} />
      <h2 onClick={() => ingredientStore.AddIngredient(ingredient)}>
        {ingredient.name}
      </h2>
    </AddIngredientWrap>
  );
};

export default observer(IngredientItem);
