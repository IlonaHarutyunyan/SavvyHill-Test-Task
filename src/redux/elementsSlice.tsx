import { ElementsDataProps } from "../interface/elementsInterface";

const initialState = {
  elements: [],
};
interface ActionProps {
  type: string;
  elementsData: ElementsDataProps[];
}

export const ElementsSlice = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case "GET_ELEMENTS":
      return {
        ...state,
        elements: action.elementsData,
      };

    default:
      return state;
  }
};
export const setElementsData = (elementsData: ElementsDataProps[]) => {
  return {
    type: "GET_ELEMENTS",
    elementsData,
  };
};
