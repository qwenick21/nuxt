module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+.js$': 'babel-jest',
    '^.+.vue$': '@vue/vue2-jest',
  },
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
