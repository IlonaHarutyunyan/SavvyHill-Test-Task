import { combineReducers } from "redux";
import { CategoriesSlice } from "./categoryDataSlice.tsx";
import { ElementsSlice } from "./elementsSlice.tsx";

export const rootReducer = combineReducers({
  categoryReducer: CategoriesSlice,
  elementsReducer: ElementsSlice,
});
