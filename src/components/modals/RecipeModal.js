import React, { useState } from "react";
import Modal from "react-modal";
import AddIngredientList from "../AddIngredientList";

//Style
import { CreateButtonStyled } from "../../styles";

//Store
import recipeStore from "../../stores/RecipeStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#50524f",
    borderRadius: "30px",
  },
};

const RecipeModal = ({ isOpen, closeModal }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    instruction: "",
    image: "",
  });

  const handleChange = (event) => {
    const newRecipe = {
      ...recipe,
      [event.target.name]: event.target.value,
    };
    console.log("modal", newRecipe);
    setRecipe(newRecipe);
  };
  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.createRecipe(recipe);
    closeModal();
    setRecipe({
      name: "",
      instruction: "",
      image: "",
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="New Recipe"
    >
      <h3
        style={{
          fontFamily: "Cabin Sketch, cursive",
          fontWeight: "bold",
          color: "#45ce00",
          fontSize: "50px",
        }}
      >
        {" "}
        Add a New Recipe{" "}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            style={{
              color: "red",
              fontFamily: "Rock Salt, cursive",
              fontSize: "20px",
            }}
          >
            Recipe
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={recipe.name}
            placeholder="write here"
          />
        </div>
        <div className="form-group">
          <AddIngredientList from="madal" />
          <br />
          <br />
        </div>
        <div className="form-group">
          <label
            style={{
              color: "red",
              fontFamily: "Rock Salt, cursive",
              fontSize: "20px",
            }}
          >
            instruction
          </label>
          <input
            name="instruction"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={recipe.instruction}
            placeholder="write here"
          />
        </div>

        <div className="form-group">
          <label
            style={{
              color: "red",
              fontFamily: "Rock Salt, cursive",
              fontSize: "20px",
            }}
          >
            photo
          </label>
          <input
            name="image"
            type="file"
            onChange={handleImage}
            className="form-control"
            placeholder="write here"
          />
        </div>
        <CreateButtonStyled
          className=" btn float-right"
          style={{
            color: "blue",
            fontFamily: "Londrina Sketch, cursive",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Add Recipe
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default RecipeModal;
