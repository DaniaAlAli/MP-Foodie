import { decorate, observable } from "mobx";
import axios from "axios";

class CategoryStore {
  categories = [];
  // ingredients = ingredients;
  // filterI = this.ingredients;
  loading = true;

  fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories");
      this.categories = response.data;
      this.loading = false;
    } catch (error) {
      console.error("CategoryStore -> fetchCategory -> error", error);
    }
  };

  createCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const res = await axios.post(
        `http://localhost:8000/categories`,
        formData
      );
      this.categories.push(res.data);
    } catch (error) {
      console.error("CategoryStore -> createCategory -> error", error);
    }
  };
  updateCategory = async (updatedCategory) => {
    try {
      const formData = new FormData();
      for (const key in updatedCategory)
        formData.append(key, updatedCategory[key]);
      await axios.put(
        `http://localhost:8000/categories/${updatedCategory.id}`,
        formData
      );
      const category = this.categories.find(
        (category) => category.id === updatedCategory.id
      );
      for (const key in updatedCategory) category[key] = updatedCategory[key];
      category.image = URL.createObjectURL(updatedCategory.image);
    } catch (error) {
      console.error("CategoryStore -> updateCategory -> error", error);
    }
  };
  deleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:8000/shops/${categoryId}`);
      this.categories = this.categories.filter(
        (category) => category.id !== +categoryId
      );
    } catch (error) {
      console.error("CategoryStore -> deleteCategory -> error", error);
    }
  };

  // FilteredIngredients = (categoryid) => {
  //   this.filterI = this.ingredients.filter(
  //     (ingredient) => ingredient.categoryId === categoryid
  //   );
  //   console.log("Ho", this.ingredients);
  // };

  // updateIngredient = (ingredientID) => {
  //   const ingredient = this.ingredients.find(
  //     (ingredient) => ingredient.id === +ingredientID
  //   );
  //   ingredient.click = !ingredient.click;
  //   console.log("STORE", ingredient);
  // };
}

decorate(CategoryStore, {
  categories: observable,
  // filterI: observable,
  loading: observable,
});

const categoryStore = new CategoryStore();
categoryStore.fetchCategory();

export default categoryStore;
