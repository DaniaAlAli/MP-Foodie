import React from "react";
import { observer } from "mobx-react";

//Components
import CategoryItem from "../CategoryList/CategoryItem";
import CategoryDetail from "../CategoryDetail";
import AddButton from "../buttons/AddButton";
import IngredientList from "../IngredientList";
import AddIngredientList from "../AddIngredientList";

//Store
import categoryStore from "../../stores/CategoryStore";

//Style
import { ListStyled, ListGroupItemStyled } from "../../styles";

const CategoryList = () => {
  const categories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return (
    <div>
      <div className="row">
        <AddButton style={{ marginLeft: "60px" }} />

        <ListStyled className="col-3">
          <p style={{ textAlign: "center", marginRight: "15px" }}>
            {" "}
            - Categories{" "}
          </p>
          {categories}
        </ListStyled>
        <ListStyled className="col-3">
          <p style={{ textAlign: "center", marginLeft: "15px" }}>
            {" "}
            - Ingredients
          </p>
          <CategoryDetail />
        </ListStyled>
        <ListStyled className="col-3">
          <p style={{ textAlign: "center", marginLeft: "15px" }}>
            {" "}
            - Add your ingredients
          </p>

          <AddIngredientList />
        </ListStyled>
      </div>
    </div>
  );
};

export default observer(CategoryList);
