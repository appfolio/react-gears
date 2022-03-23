#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */
const { copy } = require('fs-extra');
const glob = require('glob');
const path = require('path');

// copies all .d.ts files to esm/ directory
// This can go away once there are no explicit
async function typescriptCopy(from, to) {
  const files = glob.sync('**/*.d.ts', { cwd: from });
  files.map(async (file) => {
    const fromFilePath = path.resolve(from, file);
    const toFilePath = path.resolve(to, file);
    await copy(fromFilePath, toFilePath);
  });
}

async function copyDtsFiles() {
  const from = path.resolve(__dirname, '../src');
  const to = path.resolve(__dirname, '../esm');
  await typescriptCopy(from, to);
}

console.log('Copying local d.ts files to esm directory');
copyDtsFiles();
