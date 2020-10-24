module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            constants: "./src/constants",
            config: "./src/config",
            navigation: "./src/navigation",
            components: "./src/components",
            screens: "./src/screens",
            utils: "./src/utils",
            context: "./src/context",
            assets: "./assets",
          },
        },
      ],]
  };
};
