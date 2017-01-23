# Contributing Guidelines

First, thanks for your interest in contributing to `react-gears`—your fellow engineers will greatly appreciate your work!  This document outlines some guidelines about how to interact with this codebase.  Changes, amendments, and clarifications to this document are always welcome (and encouraged!)  Also, these guidelines are heavily borrowed from our own APM Bundle [contribution guidelines](https://github.com/appfolio/apm_bundle/blob/master/CONTRIBUTING.md) and merely add on a workflow for releasing NPM packages.

## How to make changes

Start by re-familiarizing yourself with the [contribution guidelines](https://github.com/appfolio/apm_bundle/blob/master/CONTRIBUTING.md) in our main `apm_bundle` repository.  Aside from any Ruby/Rails specific items, the committing, testing, and reviewing process is the same here as it is there.  Specifically for style, we are using ESLint.  Lastly, since this project is small, tests can and should be run locally, but they are also run on CircleCI.

## How to publish changes

There are two steps to publish changes that are already tested, reviewed, and merged to master: 1) bumping the version, and 2) publishing.

### Bumping the Version

The `react-gears` package follows [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning).  After assessing the extent of the changes, bump the version of the package:
```
npm version [ major | minor | patch ]
```
See the [documenation](https://docs.npmjs.com/cli/version) for more details.  In a nutshell, this command updates the version in `package.json`, builds the static documentation, and bundles these changes in a commit and tag.

### Publishing

The next step is to actually publish the gem, i.e. push it to our NPM repository.  After bumping the version simply run publish:
```
npm publish
```
This command pushes the gem to our private repository and also pushes the last commits and tags.
