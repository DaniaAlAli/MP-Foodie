import React, { useState } from "react";
import Modal from "react-modal";

//Style
import { CreateButtonStyled } from "../../styles";

//Store
import categoryStore from "../../stores/CategoryStore";

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

const CategoryModal = ({ isOpen, closeModal }) => {
  const [category, setCategory] = useState({
    name: "",
    ingredients: "",
    click: false,
  });

  const handleChange = (event) => {
    const newCategory = {
      ...category,
      [event.target.name]: event.target.value,
    };
    setCategory(newCategory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    categoryStore.createCategory(category);
    closeModal();
    setCategory({
      name: "",
      ingredients: "",
      click: false,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="New Category"
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
        Add a New Category{" "}
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
            Category
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={category.name}
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
            ingredients
          </label>
          <input
            name="ingredients"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={category.ingredients}
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
            Photo
          </label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={category.image}
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
          Add Category
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CategoryModal;
