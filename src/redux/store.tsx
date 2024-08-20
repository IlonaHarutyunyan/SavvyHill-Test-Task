import { createStore } from "redux";
import { rootReducer } from "./rootReducer.tsx";

export const store = createStore(rootReducer)