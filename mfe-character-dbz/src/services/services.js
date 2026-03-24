import fetchApi from "../utils/fetch";

export function getCharacter() {
  return fetchApi("characters/1");
}
