import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StateProps } from "../../interface/reduxStateIntrface";
import "./style.scss";

export const SelectedElements = () => {
  const state = useSelector((state: StateProps) => state);
  const elements = state.elementsReducer.elements;

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <div className="gallery_wrapper">
        {elements?.map((element) => {
          return (
            <div
              className="gallery_item"
              key={element.id}
              onClick={() => openModal(element.url)}
            >
              <img
                src={element.url}
                alt="element_img"
                className="gallery_img"
              />
            </div>
          );
        })}
      </div>
      {isModalOpen && selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full Size" className="modal_image" />
            <span className="close_button" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
};
