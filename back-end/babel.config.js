module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@Controllers': './src/controllers',
        '@Models': './src/models',
        '@Types': './src/@types',
        '@Config': './src/config',
        '@Database': './src/database',
        '@Routes': './src/routes',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
