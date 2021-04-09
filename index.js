module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-inner-declarations': 'warn',
        'block-scoped-var': 'error',
        'default-case': 'error',
        'no-caller': 'error',
        'no-eval': 'error',
        'array-element-newline': ['warn', { 'multiline': true, 'minItems': 10 }],
        'comma-dangle': ['error', 'never'],
        'semi': ['error', 'never'],
        'prettier/prettier': [
            'error', {
                semi: false,
                tabWidth: 2,
                singleQuote: false
            }
        ],
        'padding-line-between-statements': [
            'error',
            // 给代码加上必要的空行风格
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var', 'block', 'block-like'],
                next: '*'
            },
            {
                blankLine: 'always',
                prev: ['import'],
                next: ['const', 'let', 'var', 'block', 'block-like', 'expression']
            },
            { blankLine: 'never', prev: ['import'], next: ['import'] },
            { blankLine: 'never', prev: ['const'], next: ['const'] }
        ]
    }
}