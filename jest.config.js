const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './src',
});

const customJestConfig = {
  /* setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], */
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
