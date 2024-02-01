export const host = "https://cabincrafts.glennkristiansen.no";
export const endpoint = "/wp-json/wp/v2/posts?_embed";
export const BASE_URL = host + endpoint;

export const params = new URLSearchParams(document.location.search);
export const id = params.get("id");
console.log(params);
