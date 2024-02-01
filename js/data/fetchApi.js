import { BASE_URL } from "./constants.js";

export async function fetchData() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
