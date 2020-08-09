import React, { useState } from "react";

//Components
import CategoryModal from "../modals/CategoryModal";
import RecipeModal from "../modals/RecipeModal";
//Style
import { FcPlus } from "react-icons/fc";
import { AddButtonStyle } from "../../styles";

const AddButton = ({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <AddButtonStyle>
      {ingredient ? <p>New Recipe</p> : <p>New Category</p>}

      <FcPlus
        className="float-center"
        size="2em"
        color="red"
        onClick={openModal}
      >
        {" "}
      </FcPlus>
      {ingredient ? (
        <RecipeModal isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <CategoryModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </AddButtonStyle>
  );
};

export default AddButton;
