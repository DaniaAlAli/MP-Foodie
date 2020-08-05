import React, { useState } from "react";

//Components
import CategoryModal from "../modals/CategoryModal";

//Style
import { FcPlus } from "react-icons/fc";
import { AddButtonStyle } from "../../styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <AddButtonStyle>
      <p>New Category</p>
      <FcPlus
        className="float-center"
        size="2em"
        color="red"
        onClick={openModal}
      >
        {" "}
      </FcPlus>

      <CategoryModal isOpen={isOpen} closeModal={closeModal} />
    </AddButtonStyle>
  );
};

export default AddButton;
