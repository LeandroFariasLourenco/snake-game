module.exports = {
  presets: [
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@App': './src/App',
        '@Routes': './src/Routes',
      },
    }],
  ],
};
