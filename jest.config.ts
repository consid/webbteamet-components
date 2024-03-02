import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        // Handle CSS imports (and similar) in Jest
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        // Add any other mappings here. 
    },
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/.tests/jest.setup.ts'], // This is the file that contains the custom jest matchers from jest-dom
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    // Configure Jest to find test files
    testMatch: ['<rootDir>/src/**/*.test.(ts|tsx|js|jsx)'],
};

export default config;
