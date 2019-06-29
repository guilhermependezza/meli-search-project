export function queryStringToObject(search) {
  return search
    .replace('?', '')
    .split('&')
    .reduce((acc, next) => {
      const [key, value] = next.split('=');
      return {
        ...acc,
        [key]: value
      };
    }, {});
}

export function getSearchTermFromQueryString({ search }) {
  if (!search) return false;

  const parsedQuery = queryStringToObject(search);
  const searchValue = parsedQuery.search;

  if (!searchValue) return false;

  return searchValue;
}
