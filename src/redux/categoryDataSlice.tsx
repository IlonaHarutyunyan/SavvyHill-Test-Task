import { CategoriesDataProps, CategorySliceEmptyProps } from "../interface/categoriesInterface";

const initialState = {
  categories: [],
  selectedCategory: {},
};

export const CategoriesSlice = (state = initialState, action: CategorySliceEmptyProps) => {
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
