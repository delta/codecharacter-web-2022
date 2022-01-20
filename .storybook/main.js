const replace = require('@rollup/plugin-replace');

module.exports = {
  async viteFinal(config, { configType }) {
    config.base = '';
    config.plugins.push(
      replace({
        'process.platform': JSON.stringify('linux'),
        preventAssignment: true,
      }),
    );
    return config;
  },
  stories: [
    '../stories/*.stories.mdx',
    '../stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-viewport', '@storybook/addon-controls'],
  framework: '@storybook/react',
};
