
# Documentation for react, md, mdx and config files

## css loader

...

1. _allows use of import Styles from './styles.css'_ or
2. _import { style1, style2 } from './styles.css'_

```html
<div className={Style.style1}> 1. Hello World</div>
```

```html
- <div className={style1}> 2. Hello World </div>
```

- _or (3) with the destructuring syntax_
  - can write css rules via: .home-button {...} ex.

```jsx
> import { homeButton } from './styles.css'
```

...

...

### config files

_Then use it w/in react files via:_

```jsx

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

```bash
**npm install** -tailwindcss@latest- -@tailwindcss/typography- -postcss@latest- -autoprefixer@latest-
**npx tailwindcss init -p**

//add this to tailwind.config.js
plugins: [
require('@tailwindcss/typography')
]
```

#### tailwind imports

> `add`

@tailwind base;
@tailwind components;
@tailwind utilities;

> in to the styles/globals.css

/********************************

#### package descriptions

| Packages Using in this Project | **Description** | _________ |

- `react` `react-dom` `prop-types` `react-router-dom`
- `semantic-ui-react` `reactstrap` `tailwindcss`
> `Babel`
- @babel/core  _main dep for Babel_ --transpiler--
- @babel/preset-env lets you code es '15-'17 & Babel  auto detect/transpile
- @babel/preset-react (ID that it's a react app)
- ~@babel/plugin-proposal-class-properties (Use class properties)~
- @babel/plugin-syntax-dynamic-import, _dynamic import/exports_
- `auto-prefixer` `post-css-preset-env` _css-modules_ _css-loaders_
- html-webpack-plugin _pre-gen html doc w  temp or make your own_
- style-loader— Adds CSS to the DOM by injecting a < style > tag
> `WebP`
- webpack _Module bundler_ 
- webpack-nano _Webpack CLI_
- webpack-plugin-serve _dev server via local_
- npm-run-all: _run several npm Rx concurrently or simul.._

*******************/

...

### **markdownlint with Prettier**

[`Prettier`](https://prettier.io) can work w/ `markdownlint`.

#### List item indentation

> `markdownlint` and `Prettier` lint well if configured properly
    - If `Prettier` is used with `--tab-width` `4`, then `markdownlint` config should be adjusted:

```json
{
  "MD007": {
    "indent": 4
  },
  "MD030": {
    "ul_single": 3,
    "ul_multi": 3
  }
}
```

...

#### Project structure for `WebP`

my-app/
  > README.md
  > node_modules/
  > package.json
  > `public/`
    - **index.html**_page template_
    - favicon.ico
  > `src/`
    - App.css
    - App.js
    - App.test.js
    - index.css
    - **index.js**_js entry point_
    - logo.svg

Put all JS and CSS files in src for WebP
only file in public dir can be used by/from index.html

...

### Format code on commit

```bash
`npm install` --save husky lint-staged prettier
```

| ------------------------------------------------------------------ |
`husky` makes it easy to use githooks as if they are npm scripts.
`lint-staged` allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it.
`prettier` is the JavaScript formatter we will run before commits.
| ------------------------------------------------------------------ |

...

1. `add` code to scripts section of package.json

    ```json
    "scripts": {
    "precommit": "lint-stage"  
    }

    ```

2. Then add this code field to package

    ```json
    + "lint-staged": {
    +   "src/**/*.{js,jsx,json,css}": [
    +     "prettier --single-quote --write",
    +     "git add"
    +   ]
    + },
    ```

...

- > run `npm install` --save package-name or `yarn add` package-name to save a lib as a dep (as opposed to a devdep)
- use default imports/exports if the module has 1 component
- use named exports wj/ utility mods exporting multiple func
  - can only have one default exp. but several named exp.
