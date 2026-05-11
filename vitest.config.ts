import type { TestUserConfig, ViteUserConfig } from 'vitest/config';

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig;
};

const config: VitestConfig = {
  test: {
    exclude: ['dist/**', 'node_modules/**'],
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'reports/vitest-junit.xml'
    }
  }
};

export default config;
