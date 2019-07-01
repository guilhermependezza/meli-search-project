import { getSearchTermFromQueryString } from '..';

describe('getSearchTermFromQueryString', () => {
  it('should return correct search term when available', () => {
    const search = '?search=geladeira&param=value';
    const searchTerm = getSearchTermFromQueryString({ search });
    expect(searchTerm).toEqual('geladeira');
  });

  it('should return false when there is no search term in query string', () => {
    const search = '?param=value';
    const searchTerm = getSearchTermFromQueryString({ search });
    expect(searchTerm).toEqual(false);
  });

  it('should return false when query string is empty', () => {
    const search = '';
    const searchTerm = getSearchTermFromQueryString({ search });
    expect(searchTerm).toEqual(false);
  });
});
