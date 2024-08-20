import { ElementsDataProps, ElementsSliceActionProps } from "../interface/elementsInterface";

const initialState = {
  elements: [],
};

export const ElementsSlice = (state = initialState, action: ElementsSliceActionProps) => {
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
