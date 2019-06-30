export function getSearchResults(query, callback) {
  const searchUrl = `http://localhost:8080/api/items/?q=${query}`;
  return fetch(searchUrl)
    .then(res => res.json());
}

export function getProductData(productId) {
  const productDataUrl = `http://localhost:8080/api/items/${productId}`;
  return fetch(productDataUrl)
    .then(res => res.json());
}

export function getProductDescription(productId) {
  const productDescriptionUrl = `http://localhost:8080/api/items/${productId}/description`;
  return fetch(productDescriptionUrl)
    .then(res => res.json());
}
