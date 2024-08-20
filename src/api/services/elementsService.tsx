import { ElementsParamsProps } from "../../interface/elementsInterface";
import { customFetch } from "../axios";

export const getElements = async ({
  limit,
  page,
  category_ids,
}: ElementsParamsProps) => {
  try {
    let url = `/v1/images/search?limit=${limit}`;

    if (page !== undefined) {
      url += `&page=${page}`;
    }

    if (category_ids !== undefined) {
      url += `&category_ids=${category_ids}`;
    }
    const response = await customFetch.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching elements:", error);
    throw error;
  }
};
