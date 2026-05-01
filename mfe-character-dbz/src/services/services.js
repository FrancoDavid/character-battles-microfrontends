import fetchApi from "../utils/fetch";

export function getProducts() {
  return fetchApi("/products");
}
