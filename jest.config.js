module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: '<rootDir>/tsconfig.spec.json',
      astTransformers: {
        before: [
          {
            path: 'jest-preset-angular/build/InlineFilesTransformer',
          },
          {
            path: 'jest-preset-angular/build/StripStylesTransformer',
          },
        ],
      },
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  moduleFileExtensions: ['json', 'js', 'ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*(*.)@(spec|test).[tj]s?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/setupJest.ts',
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '*/.{ts,tsx}',
    '!*/.dto.{ts,tsx}',
    '!*/.entity.{ts,tsx}',
    '!*/.enum.{ts,tsx}',
    '!*/node_modules/*',
    '!*/_tests_/*',
    '!*/_mocks_/*',
    '!**/index.ts',
    '!**/main.ts',
    '!*/constants/*',
    '!*/interfaces/*',
    '!**/*module.{ts,tsx}',
    '!**/public-api.{ts,tsx}',
    '!**/environment.{ts,tsx}',
    '!**/environment.prod.{ts,tsx}',
  ],
  moduleNameMapper: {
    '@prudential/policy-change':
      '<rootDir>/projects/policy-change/src/public-api.ts',
  },
  coverageDirectory: './coverage',
};
