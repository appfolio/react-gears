import 'regenerator-runtime';
import Adapter from 'enzyme-adapter-react-16/build/index';
import { configure } from 'enzyme';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

// Needed for React16 in tests: https://github.com/facebook/jest/issues/4545
global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

global.cancelAnimationFrame = () => {};

// Throw exceptions on unhandled promise rejections to prevent tests
// from silently failing async. In the future mocha might handle this
// automatically for us
//
let unhandledRejection = false;
process.on('unhandledRejection', (reason, promise) => {
  console.error('unhandled rejection:', reason || promise); // eslint-disable-line no-console
  unhandledRejection = true;
  throw promise;
});
process.prependListener('exit', (code) => {
  if (unhandledRejection && code === 0) {
    process.exit(1);
  }
});
