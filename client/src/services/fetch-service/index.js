async function getSearchResults(query, callback) {
  const searchUrl = `http://localhost:8080/api/items/?q=${query}`;
  return fetch(searchUrl)
    .then(res => res.json());
}

export default {
  getSearchResults
};
