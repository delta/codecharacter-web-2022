import { puppeteerLauncher } from '@web/test-runner-puppeteer';

const filteredLogs = ['Lit is in dev mode', 'lit-html is in dev mode'];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: 'out-tsc/test/**/*.test.js',

  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  coverageConfig: {
    include: ['out-tsc/test/**/*.js'],
  },

  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (typeof arg === 'string' && filteredLogs.some(l => arg.includes(l))) {
        return false;
      }
    }
    return true;
  },

  concurrentBrowsers: 1,

  browsers: [puppeteerLauncher()],
});
