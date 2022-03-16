import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ConfirmationButton from './ConfirmationButton';

const messages = {
  default: 'default message',
  confirmation: 'confirmation message',
};

describe('<ConfirmationButton />', () => {
  it('can render the component', () => {
    const { queryByText } = render(
      <ConfirmationButton confirmation={messages.confirmation}>
        {messages.default}
      </ConfirmationButton>
    );

    expect(queryByText(messages.default)).not.toBeNull();
  });

  it('should call onClick after two clicks', () => {
    const onClickSpy = jest.fn();
    const { queryByText } = render(
      <ConfirmationButton confirmation={messages.confirmation} onClick={onClickSpy}>
        {messages.default}
      </ConfirmationButton>
    );

    const button = queryByText(messages.default);
    expect(button).not.toBeNull();

    fireEvent.click(button);
    expect(onClickSpy).not.toHaveBeenCalled();
    expect(queryByText(messages.confirmation)).not.toBeNull();
    expect(queryByText(messages.default)).toBeNull();

    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
    expect(queryByText(messages.confirmation)).toBeNull();
    expect(queryByText(messages.default)).not.toBeNull();
  });

  it('should call cancel after click outside', () => {
    const onClickSpy = jest.fn();
    const { queryByText } = render(
      <ConfirmationButton confirmation={messages.confirmation} onClick={onClickSpy}>
        {messages.default}
      </ConfirmationButton>
    );

    const button = queryByText(messages.default);
    expect(button).not.toBeNull();

    fireEvent.click(button);
    expect(onClickSpy).not.toHaveBeenCalled();
    expect(queryByText(messages.confirmation)).not.toBeNull();
    expect(queryByText(messages.default)).toBeNull();

    fireEvent.blur(button);
    expect(onClickSpy).not.toHaveBeenCalled();
    expect(queryByText(messages.confirmation)).toBeNull();
    expect(queryByText(messages.default)).not.toBeNull();
  });
});
