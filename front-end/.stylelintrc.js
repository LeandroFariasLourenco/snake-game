module.exports = {
  processors: [
    'stylelint-processor-styled-components',
  ],
  extends: [
    // The standard config based on a handful of CSS style guides
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  rules: {
    'max-nesting-depth': 10,
    'property-no-vendor-prefix': null,
    'at-rule-no-unknown': null,
    // New standard rule. Break props on styled-components
    'value-keyword-case': null,
  },
  syntax: 'scss',
};