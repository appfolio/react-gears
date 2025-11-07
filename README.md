# react-gears

> [!IMPORTANT]
> These UI components are in maintenance-mode and no longer under active development. For further details, see [_UI component libraries and templates_](https://developer.appf.io/docs/default/domain/front-end-platform/design-system/explanations/ui-component-libraries-templates/).

react-gears is a React implementation of Appfolio UI components, using

[React](https://reactstrap.github.io),
[Bootstrap 4](http://getbootstrap.com),
and [reactstrap](https://reactstrap.github.io).

<https://appfolio.github.io/react-gears>

----

## Getting Started

```sh
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
# For AppFolio members. Replace <codeartifact_registry_server> with the correct value.
CODEARTIFACT_REGISTRY_SERVER=<codeartifact_registry_server> yarn install

# For non-AppFolio members
YARN_RC_FILENAME=.yarnrc-public.yml yarn install
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

```text
<type>(<scope>): <message>
```

Here's an example commit message:

```text
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

Open a pull request, get it approved by the relevant code owners, ensure it passes workflow checks, and merge your pull request.

Only appfolio/platform-front-end members can trigger workflows.

### Creating a prerelease

- Open a pull request with your changes against the default branch.
- A few minutes after triggering the prerelease workflow, GitHub bot will leave a comment on the pull request notifying the prerelease was created.
- Use the prerelease version (example: 8.0.1-some-branch-a48dadc.0) to test your changes in apps/libraries that depend on this library.

### Creating an official release

After merging your pull request to the default branch, [triggering the release-please workflow](https://github.com/appfolio/react-gears/actions/workflows/release-please.yml) will create or update a special "release pull request".

- Find this "release pull request" under the "Pull requests" tab for this repo. The title will be something like, **chore(master): release 8.0.2**.
- Approve and merge this "release pull request" then [triggering the release-please workflow](https://github.com/appfolio/react-gears/actions/workflows/release-please.yml) will create an official release (e.g. 8.0.2).
