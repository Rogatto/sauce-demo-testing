import pluginMocha from 'eslint-plugin-mocha'
import pluginCypress from 'eslint-plugin-cypress/flat'
export default [
  pluginMocha.configs.flat.recommended,
  pluginCypress.configs.recommended,
  {
    rules: {
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-skipped-tests': 'error',
      'mocha/no-mocha-arrows': 'off',
      'cypress/no-unnecessary-waiting': 'off'
    }
  }
]