import { BASE_URL } from "./constants.js";

export async function fetchData() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  } else
  return await response.json();
 
}


console.log(BASE_URL);