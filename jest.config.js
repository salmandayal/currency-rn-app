const {defaults: tsjPreset} = require('ts-jest/presets');

const config = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  cacheDirectory: '.jest/cache',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],

  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|@react-native-community|react-navigation))',
  ],
  // This is an environment variable that can be used to execute logic only in development
  collectCoverage: process.env.NODE_ENV !== 'production',
  coveragePathIgnorePatterns: ['/node_modules/', 'src'],
  coverageReporters: ['text-summary', 'lcov'],
  moduleDirectories: ['node_modules', 'src'],
};

module.exports = config;
