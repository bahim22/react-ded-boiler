
# Documentation for creating Components

---
title: 'Component Information'

author: 'Hima 'Dionysus' Balde'

date: 2021/12/29

description: React App w/ custom WP configs and CSS

tag: web dev, jsx, tsx, mdx

---
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

## General React App Dir

>Directory Structure

- `**Public**`
- `index.html` _gateway_ of the react app that's being loaded via _root id_ which is where the app will run
- `**Src**`
  - `index.js` _imports, renders_ , it's the projects JS **entry-point**
  - `App.js` contains root app component, all project compo and pushed to _root div_
  - `index.css`
  - `app.css`
  - Pages Dir
  - Posts Dir
  - Styles Dir

...

### Specific Project structure for this App

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

### More info for main files

1. Put all JS and CSS files in src
2.`index.html`
**Contains**
>
- what's visibile to your users
- Only files inside the `public` folder can be referenced from the HTML.
- You can add webfonts, meta tags, or analytics to this file.
- The build step will place the bundled scripts into the `< body>` tag where react hooks into the root div
- The build script for bundler

```html
  <script src="./bundle.js "></script>
  ```

-

...

...

#### Component Structure and Mapping

| ------------------------------------------------------------------------------------------ |

1. Each File contains a 'child' component that is then exported
2. The parent component imports the 'child' functions and creates a piece of UI
3. The Layout file then combines the parent components into a meaningful design
4. The Layout can have props and children to change state depending on the app's purpose

| ----------------------------------------------------------------------------------------- |

...

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

#### MARKDOWN, MD LINTING INFO, PRETTIER INFO *

...

[`Prettier`](https://prettier.io) can work w/ `markdownlint`
**markdownlint with Prettier** List item indentation

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
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

### TAILWIND info

...

```bash
**npm install** -tailwindcss@latest- -@tailwindcss/typography- -postcss@latest- -autoprefixer@latest-
**npx tailwindcss init -p**

//add this to tailwind.config.js
plugins: [
require('@tailwindcss/typography')
]
```

> `add` in to the styles/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;

...
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

```html
<html><script type="text/javascript">window["_gaUserPrefs"]= {
        ioo: function() {
            return true;
        }
    }

    </script><head><meta name="viewport" content="width=device-width"><meta charset="utf-8"><link rel="icon" href="/favicon.ico"><meta name="description" content="Full stack website made with Next.js, React.js, JSX, Css Modules. Dionysus Era next.js website"><meta name="twitter:card" content="summary_large_image"><meta name="og:title" content="Next Dionysus Era"><link rel="preload" as="image" imagesrcset="/_next/image?url=%2Fimages%2FDedd-full.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2FDedd-full.jpg&amp;w=640&amp;q=75 2x"><meta name="next-head-count" content="7"><link rel="preload" href="/_next/static/css/ef71ac31c9b75cbf.css" as="style"><link rel="stylesheet" href="/_next/static/css/ef71ac31c9b75cbf.css" data-n-g=""><link rel="preload" href="/_next/static/css/69d054558b8423b4.css" as="style"><noscript data-n-css=""></noscript><style data-n-href="/_next/static/css/50e09c9f901ba5ee.css">
```
