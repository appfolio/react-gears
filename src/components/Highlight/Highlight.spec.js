import { render, cleanup } from '@testing-library/react';
import assert from 'assert';
import React from 'react';
import Highlight from './Highlight';

describe('<Highlight />', () => {
  afterEach(cleanup);

  it('should highlight patterns in plain text', () => {
    const highlight = render(
      <Highlight pattern="The">The quick brown fox jumps over the lazy dog.</Highlight>
    );

    const highlighted = highlight.container.querySelectorAll('mark');

    assert.equal(2, highlighted.length);
    assert.equal('The', highlighted[0].innerHTML);
    assert.equal('the', highlighted[1].innerHTML);
  });

  it('should highlight raw patterns without escape', () => {
    const highlight = render(
      <Highlight pattern="(The)|(FOX)" escape={false}>
        The quick brown fox jumps over the lazy dog.
      </Highlight>
    );

    const highlighted = highlight.container.querySelectorAll('mark');

    assert.equal(3, highlighted.length);
    assert.equal('The', highlighted[0].innerHTML);
    assert.equal('fox', highlighted[1].innerHTML);
    assert.equal('the', highlighted[2].innerHTML);
  });

  it('should highlight patterns with special characters', () => {
    const highlight = render(
      <Highlight pattern="dog.">The quick brown fox jumps over the lazy dog.</Highlight>
    );

    const highlighted = highlight.container.querySelector('mark');

    assert.equal('dog.', highlighted.innerHTML);
  });

  it('should highlight patterns within dom nodes', () => {
    const highlight = render(
      <Highlight pattern="dog">
        <div>The quick brown fox jumps over the lazy dog.</div>
        <div>
          Henlo, I am doge. Gib treatos pls.
          <span>wowoweeow dogtor doglittle</span>
        </div>
      </Highlight>
    );

    const highlighted = highlight.container.querySelectorAll('mark');

    assert.equal(4, highlighted.length);
    highlighted.forEach((el) => assert.equal('dog', el.innerHTML));
  });

  it('should highlight case sensitive patterns', () => {
    let highlight = render(
      <Highlight caseSensitive pattern="the">
        The quick brown fox jumps over the lazy dog.
      </Highlight>
    );

    let highlighted = highlight.container.querySelectorAll('mark');

    assert.equal(1, highlighted.length);
    assert.equal('the', highlighted[0].innerHTML);

    cleanup();
    highlight = render(
      <Highlight caseSensitive pattern="Dog">
        The quick brown fox jumps over the lazy dog.
      </Highlight>
    );

    highlighted = highlight.container.querySelectorAll('mark');

    assert.equal(0, highlighted.length);
  });

  it('should not highlight special characters if ignoring', () => {
    const highlight = render(
      <Highlight ignoreSpecial pattern="dog's body.">
        The quick brown fox jumps over the lazy dog&apos;s body.
      </Highlight>
    );

    const highlighted = highlight.container.querySelector('mark');

    assert.equal("dog's body", highlighted.innerHTML);
  });
});
