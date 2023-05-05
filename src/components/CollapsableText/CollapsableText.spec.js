import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CollapsableText from './CollapsableText';

const mockElement = {
  clientHeight: 1,
  scrollHeight: 2,
};

jest.mock('../../hooks/useIntervalRef', () => {
  return {
    useIntervalRef: jest.fn((cb) => () => cb(mockElement)),
  };
});

describe('<CollapsableText />', () => {
  beforeEach(() => {
    mockElement.scrollHeight = 2;
  });

  it('should show the whole string without button if line length is less than maxLines', () => {
    mockElement.scrollHeight = 1;
    render(<CollapsableText maxLines={1}>Hello World</CollapsableText>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.queryByText('Show More')).toBeNull();
  });

  it('should limit the container style.maxHeight and show a "Show More" button', () => {
    render(
      <CollapsableText maxLines={1}>
        Hello World <br /> Wow
      </CollapsableText>
    );
    expect(screen.getByText(/Hello World/).style.maxHeight).toBeTruthy();
    expect(screen.getByText('Show More')).toBeInTheDocument();
  });

  it('should remove style.maxHeight when "Show More" button is clicked', async () => {
    render(
      <CollapsableText maxLines={1}>
        Hello World <br /> Wow
      </CollapsableText>
    );
    await userEvent.click(screen.getByText('Show More'));
    expect(await screen.findByText('Show Less')).toBeInTheDocument();
    expect(screen.getByText(/Hello World/).style.maxHeight).toBe('');
  });

  it('should add style.maxHeight when "Show Less" button is clicked', async () => {
    render(
      <CollapsableText collapsed={false} maxLines={1}>
        Hello World <br /> Wow
      </CollapsableText>
    );
    await userEvent.click(screen.getByText('Show Less'));
    expect(await screen.findByText('Show More')).toBeInTheDocument();
    expect(screen.getByText(/Hello World/).style.maxHeight).toBeTruthy();
  });

  it('should allow custom button labels', async () => {
    render(
      <CollapsableText
        maxLines={1}
        moreLabel={<strong>SHOW IT</strong>}
        lessLabel={<strong>HIDE IT</strong>}
      >
        Hello World <br /> Wow
      </CollapsableText>
    );
    await userEvent.click(screen.getByText('SHOW IT'));
    expect(await screen.findByText('HIDE IT')).toBeInTheDocument();
  });
});
