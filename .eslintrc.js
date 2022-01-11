module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true,
        'cypress/globals': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'plugins': [
        'react', 'cypress'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': [
            'error', 'always'
        ],
        'arrow-spacing': [
            'error', { 'before': true, 'after': true }
        ],
        'no-console': 0
    }
}