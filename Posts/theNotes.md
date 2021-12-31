
# front end react steps

```bash
npm i react react-dom
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
npm -i --save-dev babel-loader css-loader webpack webpack-cli style-loader webpack-dev-server
```

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

## Method 1

```bash

npm i react react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader style-loader webpack webpack-cli html-webpack-plugin
npm install @babel/core@7.15.0 @babel/preset-env@7.15.0 @babel/preset-react@7.14.5

```

- create .babelrc file and add presets / plugins that were installed
- create webpack.config.js file

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

```bash
npm install --save-dev webpack webpack-cli @babel/preset-react babel-loader @babel/core @babel/preset-env @hot-loader/react-dom webpack-dev-server css-loader style-loader html-webpack-plugin postcss-loader autoprefixer jest babel-jest css-loader style-loader file-loader url-loader lodash-webpack-plugin prettier
npm install react react-dom react-hot-loader bootstrap jquery popper.js tailwindcss lodash
```

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

## Method 4

```bash
mkdir myapp
cd myapp
npm init -y
npm install --save-dev webpack webpack-cli @types/react @types/react-dom @babel/preset-react babel-loader @babel/core @babel/preset-env @hot-loader/react-dom css-loader style-loader css-loader style-loader html-webpack-plugin jest babel-jest lodash-webpack-plugin url-loader postcss-loader autoprefixer prettier webpack-dev-server file-loader typescript ts-loader @hot-loader/react-dom
npm install react react-dom bootstrap jquery popper.js lodash react-hot-loader
```

- Create webpack.config.js in the root and copy the contents of the generated file
- Create .babelrc in the root and copy the contents of the generated file
- Create folders src and dist and create source code files

```bash
npm install @babel/core@7.15.0 @babel/preset-env@7.15.0 @babel/preset-react@7.14.5
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};

```
