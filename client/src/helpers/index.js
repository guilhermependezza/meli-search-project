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
