module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  env: {
    development: {
      plugins: [
        ['styled-components', {
          displayName: true,
        }],
      ],
    },
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'transform-react-remove-prop-types',
        ['styled-components', {
          displayName: false,
        }],
      ],
    },
  },
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@Components': './src/Components',
        '@Routes': './src/Routes',
        '@Pages': './src/Pages',
        '@Style': './src/Style',
        '@Redux': './src/Redux',
        '@Ducks': './src/Redux/ducks',
        '@Theme': './src/Theme',
        '@Constants': './src/Constants',
        '@Assets': './src/Assets',
        '@Hooks': './src/Hooks',
        '@Utils': './src/Utils',
        '@PropTypes': './src/PropTypes',
        '@Resources': './src/Resources',
        '@Models': './src/Models',
      },
    }],
  ],
};
