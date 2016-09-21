/* eslint-env mocha */

import assert from 'assert';
import Nightmare from 'nightmare';
import '../dev_server.js';

/**
 * Sample headless browser test loading the index page and script.
 */
describe('Render app', () => {
  const browser = (new Nightmare()).goto('http://localhost:8080');

  it('should render the correct message', () => {
    return browser
      .evaluate(() => document.querySelector('h1').innerText)
      .then(text => assert.equal(text, 'Hello Appfolio!'));
  });
});
