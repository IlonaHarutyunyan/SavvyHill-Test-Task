import { CategoriesDataProps } from "../interface/categoriesInterface";

const initialState = {
  categories: [],
};
interface ActionProps {
  type: string;
  categoriesData: CategoriesDataProps[];
}

export const CategoriesSlice = (state = initialState, action: ActionProps) => {

  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.categoriesData,
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
