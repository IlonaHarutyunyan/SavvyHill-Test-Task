import { useSelector } from "react-redux";
import "./styles.scss";
import React from "react";
import { StateProps } from "../../interface/reduxStateIntrface";
import { CategoriesDataProps } from "../../interface/categoriesInterface";

export const Sidebar = () => {
  const state = useSelector((state: StateProps) => state);
  const categories = state.categoryReducer.categories;
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_content">
        <ul>
        {categories.map((category: CategoriesDataProps) => {
          return <li key={category.id}>{category.name}</li>;
        })}
        </ul>
      </div>
    </div>
  );
};
