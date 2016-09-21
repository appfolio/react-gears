# Xanthous

![Dependency Tracker](https://img.shields.io/david/gthomas-appfolio/xanthous.svg "Dependency Tracker") 

#### Includes

- ES2015 using [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/) and [Babel](https://babeljs.io/)
- CSS with autoprefixing using [PostCSS](http://postcss.org/) 
- SCSS using [sass-loader](https://github.com/jtangelder/sass-loader) 
- Development server and reloading using [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- Unit tests using [Mocha](https://mochajs.org/), [enzyme](http://airbnb.io/enzyme/index.html), and [assert](https://nodejs.org/api/assert.html)
- Headless browser tests using [Mocha](https://mochajs.org/) and [Nightmare](http://www.nightmarejs.org/)
- Linting using [ESLint](http://eslint.org/)
- Code coverage using [nyc](https://github.com/istanbuljs/nyc)

----

### Setup

    npm install

### Develop

    npm run
Open [http://localhost:8080](http://localhost:8080) in browser

- Uses [hot-module-replacement](https://webpack.github.io/docs/hot-module-replacement.html) to automatically rebuild and reload modules as the files under `src` are modified.

### Test

    npm test

- Runs unit tests using [Mocha](https://mochajs.org/) and [enzyme](http://airbnb.io/enzyme/index.html),
- Runs headless browser tests using Mocha and [Nightmare](http://www.nightmarejs.org/)
- Shows code coverage using [nyc/Istanbul](https://github.com/istanbuljs/nyc).
  A coverage report will also be written in the `./coverage/` directory.

### Lint

    npm run lint

- Runs [ESLint](http://eslint.org/) using [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) as the base configuration

