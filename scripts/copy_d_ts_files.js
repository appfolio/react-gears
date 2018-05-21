const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');

// copies all .d.ts files to lib/ directory
// inspired by https://github.com/mui-org/material-ui/blob/v1-beta/scripts/copy-files.js
async function typescriptCopy(from, to) {
  const files = glob.sync('**/*.d.ts', { cwd: from });
  files.map(async (file) => {
    const fromFilePath = path.resolve(from, file);
    const toFilePath = path.resolve(to, file);
    await fse.copy(fromFilePath, toFilePath);
  });
}

async function copyDtsFiles() {
  const from = path.resolve(__dirname, '../src');
  const to = path.resolve(__dirname, '../lib');
  await typescriptCopy(from, to);
}

copyDtsFiles();
