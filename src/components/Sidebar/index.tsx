import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import React, { useState } from "react";
import { StateProps } from "../../interface/reduxStateIntrface";
import { CategoriesDataProps } from "../../interface/categoriesInterface";
import { setSelectedCategory } from "../../redux/categoryDataSlice.tsx";
import { getElements } from "../../api/services/elementsService.tsx";
import { setElementsData } from "../../redux/elementsSlice.tsx";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: StateProps) => state);
  const categories = state.categoryReducer.categories;
  const selectedCategory = state.categoryReducer.selectedCategory;
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchElements = async (category_id: number, append = false) => {
    try {
      const getElementsData = await getElements({
        limit: 10,
        page,
        category_ids: category_id,
      });

      const dataToSet = [
        ...(append
          ? [...state.elementsReducer.elements, ...getElementsData]
          : getElementsData),
      ];

      dispatch(setElementsData(dataToSet));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSidebarElementCLick = (category: CategoriesDataProps) => {
    dispatch(setSelectedCategory(category));
    setPage(1);
    fetchElements(category.id);
  };

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
    if (selectedCategory) {
      fetchElements(selectedCategory.id, true);
    }
  };

  return (
    <>
      <div className="sidebar_wrapper">
        <div className="sidebar_content">
          <ul>
            {categories.map((category: CategoriesDataProps) => {
              const isSelected = selectedCategory?.id === category.id;
              return (
                <li
                  key={category.id}
                  className={isSelected ? "selected-category" : ""}
                  onClick={() => {
                    handleSidebarElementCLick(category);
                  }}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
          <button className="load-more-btn" onClick={handleLoadMoreClick}>
            Load More Cat Images
          </button>
        </div>
      </div>

      <div className={`sidebar_modal ${isModalOpen ? "open" : ""}`}>
        <div className="sidebar_modal_content">
          <span className="close_modal" onClick={() => setIsModalOpen(false)}>
            ×
          </span>
          <ul>
            {categories.map((category: CategoriesDataProps) => {
              const isSelected = selectedCategory?.id === category.id;
              return (
                <li
                  key={category.id}
                  className={isSelected ? "selected-category" : ""}
                  onClick={() => {
                    handleSidebarElementCLick(category);
                    setIsModalOpen(false);
                  }}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
          <button className="load-more-btn" onClick={handleLoadMoreClick}>
            Load More Cat Images
          </button>
        </div>
      </div>

      <div className="mobile_menu_wrapper">
        <button className="menu_button" onClick={() => setIsModalOpen(true)}>
          <div className="menu_icon">
            <span className="menu_line"></span>
            <span className="menu_line"></span>
            <span className="menu_line"></span>
          </div>
        </button>
      </div>
    </>
  );
};
