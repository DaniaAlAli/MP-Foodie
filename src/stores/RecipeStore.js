import { decorate, observable } from "mobx";
import axios from "axios";

class RecipeStore {
  recipes = [];
  filterI = [];
  loading = true;

  fetchRecipe = async () => {
    try {
      const response = await axios.get("http://localhost:8000/recipes");
      this.recipes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("RecipeStore -> fetchRecipe -> error", error);
    }
  };

  createRecipe = async (newRecipe) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      const res = await axios.post(`http://localhost:8000/recipes`, formData);
      this.recipes.push(res.data);
    } catch (error) {
      console.error("RecipeStore -> createRecipe -> error", error);
    }
  };
  updateRecipe = async (updatedRecipe) => {
    try {
      const formData = new FormData();
      for (const key in updatedRecipe) formData.append(key, updatedRecipe[key]);
      await axios.put(
        `http://localhost:8000/recipes/${updatedRecipe.id}`,
        formData
      );
      const recipe = this.recipes.find(
        (recipe) => recipe.id === updatedRecipe.id
      );
      for (const key in updatedRecipe) recipe[key] = updatedRecipe[key];
      recipe.image = URL.createObjectURL(updatedRecipe.image);
    } catch (error) {
      console.error("RecipeStore -> updateRecipe -> error", error);
    }
  };
  deleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:8000/recipes/${recipeId}`);
      this.recipes = this.recipies.filter((recipe) => recipe.id !== +recipeId);
    } catch (error) {
      console.error("RecipeStore -> deleteRecipe -> error", error);
    }
  };

  FilteredRecipe = (recipeId) => {
    this.filterI = this.recipes.find((recipe) => recipe.id === +recipeId);
    console.log("re", this.filterI);
  };

  // updateIngredient = (ingredientID) => {
  //   const ingredient = this.ingredients.find(
  //     (ingredient) => ingredient.id === +ingredientID
  //   );
  //   ingredient.click = !ingredient.click;
  //   console.log("STORE", ingredient);
  // };
}

decorate(RecipeStore, {
  recipes: observable,
  filterI: observable,
  loading: observable,
});

const recipeStore = new RecipeStore();
recipeStore.fetchRecipe();

export default recipeStore;
