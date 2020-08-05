import React from "react";
import { observer } from "mobx-react";

//Components
import CategoryItem from "./CategoryItem";
import IngredientList from "./IngredientList";
import AddButton from "./buttons/AddButton";

//Store
import categoryStore from "../stores/CategoryStore";

//Style
import { ListStyled } from "../styles";

const CategoryList = () => {
  const categories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return (
    <div>
      <div className="row">
        <AddButton style={{ marginLeft: "60px" }} />

        <ListStyled className="col-4">
          <p style={{ textAlign: "center", marginRight: "15px" }}>
            {" "}
            - Categories{" "}
          </p>
          {categories}
        </ListStyled>
        <ListStyled className="col-4">
          <p style={{ textAlign: "center", marginLeft: "15px" }}>
            {" "}
            - Ingredients
          </p>
          <IngredientList />
        </ListStyled>
      </div>
    </div>
  );
};

export default observer(CategoryList);
