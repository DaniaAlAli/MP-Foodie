import React from "react";
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

//Components

import IngredientList from "./IngredientList";

//Store
import ingredientStore from "../stores/IngredientStore";
import categoryStore from "../stores/CategoryStore";

const CategoryDetail = () => {
  let ingredients;
  if (ingredientStore.filterI) {
    const category = categoryStore.categories.find(
      (category) => category.id === ingredientStore.filterI
    );

    // if (!category) return <Redirect to="/categories" />;

    ingredients = category.ingredients.map((ingredient) =>
      ingredientStore.getItemById(ingredient.id)
    );
    console.log("llll", ingredients);
  }

  return (
    <div>
      <IngredientList ingredients={ingredients} />
    </div>
  );
};

export default observer(CategoryDetail);
