// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   staticDirs: ['../public'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
//   framework: {
//     name: '@storybook/react-vite',
//     options: {},
//   },
// };
// export default config;

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  features: {
    postcss: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};
