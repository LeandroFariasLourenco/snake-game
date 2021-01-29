module.exports = {
  extends: [
    // The standard config based on a handful of CSS style guides
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
  ],
  rules: {
    'max-nesting-depth': 10,
    'property-no-vendor-prefix': null,
    'at-rule-no-unknown': null,
  },
  syntax: 'scss',
};