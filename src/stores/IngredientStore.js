import { decorate, observable } from "mobx";
import axios from "axios";

//Store
import categoryStore from "../stores/CategoryStore";

class IngredientStore {
  ingredients = [];
  // filterI = 1;
  loading = true;
  addIngredient = [];
  fetchIngredient = async () => {
    try {
      const response = await axios.get("http://localhost:8000/ingredients");
      this.ingredients = response.data;

      this.loading = false;
    } catch (error) {
      console.error("IngredientStore -> fetchIngredient -> error", error);
    }
    console.log("fist", this.ingredients);
  };

  getItemById = (ingredientId) =>
    this.ingredients.find((ingredient) => ingredient.id === ingredientId);

  createIngredient = async (newIngredient) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const res = await axios.post(
        `http://localhost:8000/ingredients`,
        formData
      );
      this.ingredients.push(res.data);
    } catch (error) {
      console.error("IngredientStore -> createIngredient -> error", error);
    }
  };
  updateIngredient = async (updatedIngredient) => {
    try {
      const formData = new FormData();
      for (const key in updatedIngredient)
        formData.append(key, updatedIngredient[key]);
      await axios.put(
        `http://localhost:8000/ingredients/${updatedIngredient.id}`,
        formData
      );
      const ingredient = this.ingredients.find(
        (ingredient) => ingredient.id === updatedIngredient.id
      );
      for (const key in updatedIngredient)
        ingredient[key] = updatedIngredient[key];
      ingredient.image = URL.createObjectURL(updatedIngredient.image);
    } catch (error) {
      console.error("IngredientStore -> updatedIngredient -> error", error);
    }
  };
  deleteIngredient = async (ingredientId) => {
    try {
      await axios.delete(`http://localhost:8000/ingredients/${ingredientId}`);
      this.ingredients = this.ingredients.filter(
        (ingredient) => ingredient.id !== +ingredientId
      );
    } catch (error) {
      console.error("IngredientStore -> deleteIngredient -> error", error);
    }
  };

  FilteredIngredients = (categoryId) => {
    this.filterI = categoryId;
  };

  updateIngredient = (ingredientID) => {
    const ingredient = this.ingredients.find(
      (ingredient) => ingredient.id === +ingredientID
    );
    // ingredient.click = !ingredient.click;
    // console.log("STORE", ingredient);
  };

  AddIngredient = (ingredient) => {
    const check = this.addIngredient.find(
      (_ingredient) => _ingredient === ingredient
    );
    if (!check) {
      this.addIngredient.push(ingredient);
    }
    // else {
    //   const remove = this.addIngredient.filter(
    //     (_ingredient) => !(_ingredient === ingredient)
    //   );
    //   this.addIngredient = remove;
    // }

    console.log("kk", this.addIngredient);
  };

  RemoveIngredient = (ingredient) => {
    this.addIngredient = this.addIngredient.filter(
      (_ingredient) => !(_ingredient === ingredient)
    );
  };
}
decorate(IngredientStore, {
  ingredients: observable,
  filterI: observable,
  loading: observable,
  addIngredient: observable,
});

const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredient();

export default ingredientStore;
