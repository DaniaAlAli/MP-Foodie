import React, { useState } from "react";
import { observer } from "mobx-react";

//Style
import { ListGroupItemStyled } from "../../styles";

//Component
import AddIngredientItem from "./AddIngredientItem";
import AddButton from "../buttons/AddButton";

//Store
import ingredientStore from "../../stores/IngredientStore";

const AddIngredientList = ({ from }) => {
  let ingredients = [];

  ingredients = ingredientStore.addIngredient.map((ingredient) => (
    <AddIngredientItem ingredient={ingredient} key={ingredient.id} />
  ));
  console.log("llll", ingredientStore.addIngredient);
  // }

  return (
    <>
      <ListGroupItemStyled>{ingredients}</ListGroupItemStyled>{" "}
      {ingredientStore.addIngredient.length !== 0 && !from ? (
        <AddButton
          style={{ marginLeft: "60px" }}
          ingredient={ingredientStore.addIngredient}
        />
      ) : null}
    </>
  );
};

export default observer(AddIngredientList);
