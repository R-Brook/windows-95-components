const path = require("path")
module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
    }
    return config
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
}
