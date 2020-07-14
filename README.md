# react-gears

[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)
A refresh of [Gears](https://qa.qa.appfolio.com/gears/) & [Saffron](https://qa.qa.appfolio.com/saffron/) components using 
[React](https://reactstrap.github.io),
[Bootstrap 4](http://v4-alpha.getbootstrap.com), 
and [reactstrap](https://reactstrap.github.io).

https://appfolio.github.io/react-gears

----

### Setup

    npm install

### Develop

    npm start
Open [http://localhost:6006](http://localhost:6006) in browser

### Test

    npm test

- Runs unit tests using [Mocha](https://mochajs.org/) and [enzyme](http://airbnb.io/enzyme/index.html)

If using [Cypress](https://www.cypress.io) for integration testing, you can use [react-gears-cypress](https://github.com/appfolio/react-gears-cypress) for testing react-gears components.

### Lint

    npm run lint

- Runs [ESLint](http://eslint.org/) using [appfolio-react](https://github.com/appfolio/eslint-config-appfolio-react) as the base configuration

### Publishing

    npm version (major|minor|patch)
    npm publish

- Release notes are generated in the postpublish script using [Github Release Notes](https://github-tools.github.io/github-release-notes/). Instructions for installation and setup [here](https://github.com/github-tools/github-release-notes#setup). (Latest version has a breaking bug, so we should use the latest working version `0.17.1 `)

    npm install -g github-release-notes@0.17.1 

----

