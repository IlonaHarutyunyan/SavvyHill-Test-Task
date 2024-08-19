import { CategoriesDataProps } from "../interface/categoriesInterface";

const initialState = {
  categories: [],
  selectedCategory: {},
};
interface ActionProps {
  type: string;
  categoriesData: CategoriesDataProps[];
  category: CategoriesDataProps;
}

export const CategoriesSlice = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.categoriesData,
      };
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.category,
      };

    default:
      return state;
  }
};
export const setCategories = (categoriesData: CategoriesDataProps[]) => {
  return {
    type: "GET_CATEGORIES",
    categoriesData,
  };
};
export const setSelectedCategory = (category: CategoriesDataProps) => {
  return {
    type: "SET_SELECTED_CATEGORY",
    category,
  };
};
