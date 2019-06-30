const { search, searchById, getDescriptionById } = require('../products-service');
const { productId, productTitle, descriptionFields } = require('../mocks/product');

function assertAuthor(response) {
  expect(response.author.name).toBe('Guilherme');
  expect(response.author.lastname).toBe('Pendezza');
}

describe('Products Service', () => {
  describe('search', () => {
    it('should search products by a given query', async () => {
      const response = await search('geladeira');
      assertAuthor(response);
      expect(response.items.length).toBe(4);
    });
  });

  describe('searchById', () => {
    it('should retrieve a product by id', async () => {
      const response = await searchById(productId);

      assertAuthor(response);
      expect(response.item.title).toEqual(productTitle);
    });
  });

  describe('getDescriptionById', () => {
    it('should return product description by id', async () => {
      const response = await getDescriptionById(productId);

      expect(response).toHaveProperty(...descriptionFields);
    });
  });
});
