import React from "react";

//Style
import { ListGroupItemStyled } from "../styles";

//Store
import categoryStore from "../stores/CategoryStore";

//Component

const CategoryItem = ({ category }) => {
  return (
    <>
      <ListGroupItemStyled>
        <img src={category.image} />
        <h2 onClick={() => categoryStore.FilteredIngredients(category.id)}>
          {category.name}
        </h2>
      </ListGroupItemStyled>
    </>
  );
};

export default CategoryItem;
