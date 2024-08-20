import { CategoriesDataProps } from "./categoriesInterface";
import { ElementsDataProps } from "./elementsInterface";

export interface StateProps {
  categoryReducer: {
    categories: CategoriesDataProps[];
    selectedCategory: CategoriesDataProps;
  };
  elementsReducer: {
    elements: ElementsDataProps[];
  };
}
