# react-gears
react-gears is a React implementation of Appfolio UI components, using
[React](https://reactstrap.github.io),
[Bootstrap 4](http://getbootstrap.com),
and [reactstrap](https://reactstrap.github.io).

https://appfolio.github.io/react-gears

----

## Getting Started
```
yarn add @appfolio/react-gears
# or for npm:
npm install @appfolio/react-gears
```

### Example

```js
import React from 'react';
import { Button } from '@appfolio/react-gears';

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};
```

### [Cypress](https://www.cypress.io) Testing

You can use [react-gears-cypress](https://github.com/appfolio/react-gears-cypress) for testing react-gears components in your project.

----

## Development

Install dependencies:

```
yarn install
```

Run storybook examples:

```
yarn start
```

Then open [http://localhost:6006](http://localhost:6006) in a browser.

Run tests:

```
yarn test
```

This runs unit tests using [Mocha](https://mochajs.org/) and [enzyme](http://airbnb.io/enzyme/index.html).

Run Linter

```
yarn lint
```

This runs [ESLint](http://eslint.org/) using [appfolio-react](https://github.com/appfolio/eslint-config-appfolio-react) as the base configuration.

----

## Contributing

### Commit messages

Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:

```
<type>(<scope>): <message>
```

Here's an example commit message:

```
feat(SomeComponent): add new thing that does something
```

- `<scope>` is optional.
- `!` indicates a breaking change. Example: `feat!: some breaking change`.

Here are a few common `<type>`s:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `refactor`: Code changes that neither fix a bug nor add a feature
- `test`: Adding missing tests or correcting existing tests
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

For more information about Conventional Commits, see the [official documentation](https://www.conventionalcommits.org/en/v1.0.0/).

### Merging changes

Open a pull request, get it approved by the relevant code owners, and merge your pull request.

**IMPORTANT**: Make sure your pull request is rebased when merged. The merge button has dropdown options. Choose "Rebase and merge".

### Creating a release

Any pull request against the default branch will cause a prerelease to be created. This prerelease can be used to test your branch.

[release-please](https://github.com/googleapis/release-please) will automatically create or update a "release pull request" with the changes you made.
Merge this "release pull request" to release an official new version.
