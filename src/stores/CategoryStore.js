import { decorate, observable } from "mobx";

//Data
import categories from "../categories";
import ingredients from "../ingredients";

class CategoryStore {
  categories = categories;
  ingredients = ingredients;
  filterI = this.ingredients;

  FilteredIngredients = (categoryid) => {
    this.filterI = this.ingredients.filter(
      (ingredient) => ingredient.categoryId === categoryid
    );
    console.log("Ho", this.ingredients);
  };

  createCategory = (newCategory) => {
    newCategory.id = this.categories[this.categories.length - 1].id + 1;
    this.categories.push(newCategory);
  };

  updateIngredient = (ingredientID) => {
    const ingredient = this.ingredients.find(
      (ingredient) => ingredient.id === +ingredientID
    );
    ingredient.click = !ingredient.click;
    console.log("STORE", ingredient);
  };
}

decorate(CategoryStore, { categories: observable, filterI: observable });

const categoryStore = new CategoryStore();

export default categoryStore;
