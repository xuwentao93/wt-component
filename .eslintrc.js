module.exports = {
  "settings": {
    "import/resolver": { // 这个配置能正确引入 .ts 文件.
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", "index.js", "index.ts", "index.tsx", "index.jsx"]
      },
      "alias": {
        "map": [
          ['@', './app/'],
        ],
      },
    }
  },
  "parser": "@typescript-eslint/parser", // 这个可以解析 Ts, 当然, js 也可以.
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "linebreak-style": ["off"], // 不同操作系统换行符问题.
    "comma-dangle": ["error", "never"], // 对象最后一个不要加逗号.
    "semi": ["error", "always"], // 不要分号
    "react/jsx-filename-extension": ["off"], // js 中用 jsx 语法报错.
    "import/extensions": ["off"], // import .jsx 文件报错.
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-static-element-interactions": ["off"],
    "click-events-have-key-events": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "max-classes-per-file": ["off"],
    "lines-between-class-members": ["off"],
    "max-len": ["error", { "code": 115 }],
    "no-else-return": ["off"],
    "class-methods-use-this": ["off"],
    "no-plusplus": ["off"],
    "no-unused-vars": ["off"], // ts 出现部分问题导致使用过的值仍会出现这个提示.
    "prefer-const": ["off"],
    "arrow-parens": ["off"],
    "no-use-before-define": ["off"],
    "no-param-reassign": ["off"],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "prefer-object-spread": "off",
    "react/jsx-props-no-spreading": "off",
    "import/order": "off",
    "import/prefer-default-export": "off"
    // "prefer-const": ["off"]
  }
}
