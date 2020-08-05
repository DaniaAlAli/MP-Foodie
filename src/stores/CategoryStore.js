import { decorate, observable } from "mobx";

//Data
import categories from "../categories";

class CategoryStore {
  categories = categories;

  createCategory = (newCategory) => {
    newCategory.id = this.categories[this.categories.length - 1].id + 1;
    this.categories.push(newCategory);
  };
}

decorate(CategoryStore, { categories: observable });

const categoryStore = new CategoryStore();

export default categoryStore;
