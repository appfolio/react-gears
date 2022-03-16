import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>src/dev_util/helpers.ts'],
  testEnvironment: 'jsdom',
};

export default config;
