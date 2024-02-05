export const host = "https://cabincrafts.glennkristiansen.no";
export const endpoint = "/wp-json/wp/v2/posts?_embed";
export const BASE_URL = host + endpoint;
export const specificEndpoint = "/wp-json/wp/v2/posts/";
export const SPECIFIC_URL = host + specificEndpoint;

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");
