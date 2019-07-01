function fetchUrl(url) {
  return fetch(url)
    .then(res => res.json());
}

export function getSearchResults(query) {
  const searchUrl = `http://localhost:8080/api/items/?q=${query}`;
  return fetchUrl(searchUrl);
}

export function getProductData(productId) {
  const productDataUrl = `http://localhost:8080/api/items/${productId}`;
  return fetchUrl(productDataUrl);
}

export function getProductDescription(productId) {
  const productDescriptionUrl = `http://localhost:8080/api/items/${productId}/description`;
  return fetchUrl(productDescriptionUrl);
}
