import { BASE_URL } from "./constants";

export async function fetchData(url) {
  const response = await fetch(BASE_URL);
  const result = await response.json();
  return result;
}
