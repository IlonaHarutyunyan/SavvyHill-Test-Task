import { combineReducers } from "redux";
import { CategoriesSlice } from "./categoryDataSlice.tsx";

export const rootReducer = combineReducers({
 categoryReducer: CategoriesSlice,
});