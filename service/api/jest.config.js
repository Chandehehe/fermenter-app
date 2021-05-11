module.exports = {
  preset: 'ts-jest',
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.build'],
};
