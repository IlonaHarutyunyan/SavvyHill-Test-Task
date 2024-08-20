export interface CategoriesDataProps {
  id: number;
  name: string;
}
export interface CategorySliceEmptyProps {
  type: string;
  categoriesData: CategoriesDataProps[];
  category: CategoriesDataProps;
}