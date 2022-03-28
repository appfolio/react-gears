import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>src/tooling/helpers.ts'],
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['tooling'],
};

export default config;
