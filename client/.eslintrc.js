module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    globals: {},
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module",
    },
    rules: {
        indent: ["error", "tab"],
        quotes: ["error", "double"], 
        semi: ["error", "always"],
        "comma-spacing" : ["error", { "before": false, "after": true }],
        "array-bracket-spacing": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "space-in-parens": ["error", "always"],
        "no-trailing-spaces": "error",
        "no-multi-spaces": "error",
        "react/no-unused-prop-types": 0,
        "react/prop-types": [1,{ ignore:["dispatch"] }],
        "react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error",
        "react-redux/connect-prefer-named-arguments": 2,
        "react-redux/no-unused-prop-types": 1,
    },
    plugins: [
        "react",
        "react-redux",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-redux/recommended",
    ],
};
