const jestConfig = require('./jest.config.json');

module.exports = {
  ...jestConfig,
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    'components(.*)$': '<rootDir>/client/src/components/$1',
    'services(.*)$': '<rootDir>/client/src/services/$1',
    'screens(.*)$': '<rootDir>/client/src/screens/$1',
    'mocks(.*)$': '<rootDir>/client/src/mocks/$1'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
