import React from "react";
import { observer } from "mobx-react";

//Components

import IngredientsItem from "./IngredientsItem";

//Store
import categoryStore from "../stores/CategoryStore";

const IngredientList = () => {
  const Ingredients = categoryStore.filterI.map((ingredient) => (
    <IngredientsItem ingredient={ingredient} key={ingredient.id} />
  ));

  return <div>{Ingredients}</div>;
};

export default observer(IngredientList);
