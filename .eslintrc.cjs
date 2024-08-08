module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": __dirname
  },
  "ignorePatterns": ["node_modules", ".eslintrc.cjs", "*.json", "build", ".svelte-kit", "src/app.d.ts"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:svelte/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-mutable-exports": "off",
    "import/extensions": "off",
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  "settings": {
    "import/extensions": [
      ".svelte",
    ]
  }
}
