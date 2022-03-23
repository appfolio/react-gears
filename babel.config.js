module.exports = {
  targets: { edge: 13 },
  presets: [
    ['@babel/preset-env', { modules: 'commonjs' }],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
    ['@babel/preset-react', { runtime: 'classic' }],
  ],
  plugins: ['styled-jsx/babel', 'add-react-displayname'],
};
