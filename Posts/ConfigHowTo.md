
---
title: 'Configuration Information'

author: 'Dionysus'

date: 2021/12/29

description: React App w/ custom WP configs and CSS

tag: web dev, jsx, tsx, mdx
---

## WEBPACK config file

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install webpack webpack-cli --save-dev
```

```js
module.exports = {
    plugins: [
    new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
    })
    ],
};
"start": "webpack-dev-server"
```

> NPM

- you can use `--save-dev` to seperate dev dep from production dep
- j

### Package Descriptions

| Packages Using in this Project & **Description** |
| `react` `react-dom` `prop-types` `react-router-dom` |

> `Babel`

- @babel/core  _main dep for Babel_ --transpiler--
- @babel/preset-env lets you code es'15-'17 & Babel auto detect/transpile
- @babel/preset-react (ID that it's a react app to convert jsx to JS)
- ~@babel/plugin-proposal-class-properties (Use class properties)~
- @babel/plugin-syntax-dynamic-import, _dynamic import/exports_

> `CSS`

- auto-prefixer, post-css-preset-env _css-modules_ _css-loaders_
- semantic-ui-react, reactstrap, tailwindcss

- style-loader— Adds CSS to the DOM by injecting a < style > tag

> `WebPack`

- webpack _Module bundler_ to convert code into prod ready site
- html-webpack-plugin _pre-gen basic html doc  or make your own_
- webpack-nano _Webpack CLI_
- webpack-plugin-serve _dev server via local_
- npm-run-all: _run several npm Rx concurrently or simul.._
