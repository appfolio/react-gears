# react-gears

[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)
react-gears is a React implementation of Appfolio UI components, using 
[React](https://reactstrap.github.io),
[Bootstrap 4](http://getbootstrap.com), 
and [reactstrap](https://reactstrap.github.io).

https://appfolio.github.io/react-gears

----
## Getting Started

    npm install @appfolio/react-gears
    
### Example

```
import React from 'react';
import { Button } from '@appfolio/react-gears';

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};
```

## Development

Install dependencies:

    npm install

Run storybook examples:

    npm start
Open [http://localhost:6006](http://localhost:6006) in browser

Run tests & coverage report:

    npm test

- Runs unit tests using [Mocha](https://mochajs.org/) and [enzyme](http://airbnb.io/enzyme/index.html)

If using [Cypress](https://www.cypress.io) for integration testing, you can use [react-gears-cypress](https://github.com/appfolio/react-gears-cypress) for testing react-gears components.

Run Linter

    npm run lint

- Runs [ESLint](http://eslint.org/) using [appfolio-react](https://github.com/appfolio/eslint-config-appfolio-react) as the base configuration

## Publishing

Make sure to add a github auth token with package write permissions to your `~/.npmrc` file.

    //npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
    
To publish:

    npm version (major|minor|patch)
    npm publish
    
* If you're publishing a prerelease version, we don't want it to get tagged as the latest version, so run `TAG=beta npm publish --tag beta` instead.

- Release notes are generated in the postpublish script using [Github Release Notes](https://github-tools.github.io/github-release-notes/). Instructions for installation and setup [here](https://github.com/github-tools/github-release-notes#setup). (Latest version has a breaking bug, so we should use the latest working version `0.17.1 `)

    npm install -g github-release-notes@0.17.1 

----

