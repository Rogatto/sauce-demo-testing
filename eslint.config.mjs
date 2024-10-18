import pluginMocha from 'eslint-plugin-mocha'
import pluginCypress from 'eslint-plugin-cypress/flat'
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    pluginMocha.configs.flat.recommended,
    pluginCypress.configs.recommended,
    {
        rules: {
        '@typescript-eslint/no-namespace': 'off',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-mocha-arrows': 'off',
        'cypress/no-unnecessary-waiting': 'off'
        }
    }
);