const request = require('request');
const servicesConfig = require('../../../environment/services.json')

function search(query, quantity = 4) {
  const  { services: { apiUrl, endpoints: { search } } } = servicesConfig;
  const searchURL = `${apiUrl}${search}?q=${query}`;
  return fetchURL(searchURL).then((responseBody) => buildResponseData({responseBody, quantity}));
};

function searchById(id) {
  const  { services: { apiUrl , endpoints: { product } } } = servicesConfig;
  const productURL = `${apiUrl}${product}/${id}`;
  const singleProduct = true;
  return fetchURL(productURL).then((responseBody) => buildResponseData({responseBody, singleProduct}));
};

function getDescriptionById(id) {
  const  { services: { apiUrl , endpoints: { product, description } } } = servicesConfig;
  const productURL = `${apiUrl}${product}/${id}/${description}`;
  return fetchURL(productURL);
};

const fetchURL = (fetchURL) => {
  return new Promise((resolve, reject) => {
    return request.get(fetchURL, (error, response, body) => {
      resolve(JSON.parse(body));
    });
  });
};

function buildResponseData({responseBody, singleProduct = false, quantity}) {
    const responseData = {
        author: {
            name: 'Guilherme',
            lastname: 'Pendezza'
        }
    }

    if (singleProduct) {
        responseData.item = responseBody;
        return responseData;
    }
  
    responseData.items = responseBody.results.slice(0, quantity);
    return responseData;
};

module.exports = {
  search,
  searchById,
  getDescriptionById
};
