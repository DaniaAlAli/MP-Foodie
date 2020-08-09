import React from "react";
import { observer } from "mobx-react";

//Components
import RecipeItem from "./RecipeItem";
import RecipeDetail from "../RecipeDetail";
import AddButton from "../buttons/AddButton";

//Store
import recipeStore from "../../stores/RecipeStore";

//Style
import { ListStyled, ListGroupRecipeStyled, LogoLink } from "../../styles";

const RecipeList = () => {
  const recipies = recipeStore.recipes.map((recipe) => (
    <RecipeItem recipe={recipe} key={recipe.id} />
  ));

  return (
    <>
      <div>
        <LogoLink to="/categories">
          <img alt="logo" src="cooking.png" />
        </LogoLink>
        <div className="row">
          {/* <AddButton style={{ marginLeft: "60px" }} /> */}

          <ListGroupRecipeStyled className="col-3">
            <h2 style={{ textAlign: "center", marginRight: "15px" }}>
              {" "}
              - Recipes{" "}
            </h2>
            {recipies}
          </ListGroupRecipeStyled>
          <ListGroupRecipeStyled className="col-3">
            <p style={{ textAlign: "center", marginLeft: "15px" }}> </p>{" "}
            <RecipeDetail />
          </ListGroupRecipeStyled>
        </div>
      </div>
    </>
  );
};

export default observer(RecipeList);
