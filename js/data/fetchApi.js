import { SPECIFIC_URL, BASE_URL } from "./constants.js";

export async function fetchData(per_page = 9, offset = 0) {
  const url = `${BASE_URL}&per_page=${per_page}&offset=${offset}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

export async function fetchSpecific(id) {
  const response = await fetch(`${SPECIFIC_URL}${id}`);
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const specificData = await response.json();
  return specificData;
}
