module.exports = {
    root: true,
    extends: [
        "plugin:import/errors",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    plugins: ["@typescript-eslint", "prettier"],
    env: {
        "browser": true
    },
    rules: {
        'prettier/prettier': [
            'error',
            // https://prettier.io/docs/en/options.html
            {
                singleQuote: true,
                semi: true,
                useTabs: true,
                tabWidth: 4,
                trailingComma: 'all',
                printWidth: 80,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
                parser: 'typescript'
            },
        ],
        "no-prototype-builtins": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_"
            }
        ]
    },
    overrides: [
        {
            "files": ["rollup.config.js", "web-test-runner.config.js"],
            "env": {
                "node": true
            }
        },
        {
            "files": [
                "*_test.ts",
                "**/custom_typings/*.ts",
                "packages/labs/ssr/src/test/integration/tests/**",
                "packages/labs/ssr/src/lib/util/parse5-utils.ts"
            ],
            "rules": {
                "@typescript-eslint/no-explicit-any": "off"
            }
        }
    ]
}
