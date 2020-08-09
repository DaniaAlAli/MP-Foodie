import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
//Style
import { ListGroupItemStyled } from "../../styles";

//Store
import ingredientStore from "../../stores/IngredientStore";

//Component

const CategoryItem = ({ category }) => {
  return (
    <>
      <ListGroupItemStyled>
        {/* <img src={category.image} /> */}
        <h2 onClick={() => ingredientStore.FilteredIngredients(category.id)}>
          {category.name}
        </h2>
      </ListGroupItemStyled>
    </>
  );
};

export default observer(CategoryItem);
