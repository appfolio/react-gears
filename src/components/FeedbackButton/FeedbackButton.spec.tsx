import {
  act,
  cleanup,
  fireEvent,
  render,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
import React from 'react';
import FeedbackButton from './FeedbackButton';

describe('<FeedbackButton />', () => {
  afterEach(() => {
    cleanup();
  });

  it('submits feedback via doSubmit callback with all default properties', async () => {
    const doSubmit = jest.fn();
    const { getByRole, findByRole } = render(
      <FeedbackButton feature="test_feature" recipient="test_team_name" doSubmit={doSubmit} />
    );

    const feedbackButton = getByRole('button');
    expect(feedbackButton.textContent).toEqual('Feedback');
    expect(feedbackButton).toHaveClass('btn-outline-primary');

    fireEvent.click(feedbackButton);

    const feedbackModal = await findByRole('dialog');

    const heading = within(feedbackModal).getByRole('heading', { level: 5 });
    expect(heading.textContent).toEqual('Give Feedback');

    const ratingSubtitle = within(feedbackModal).getByText(
      'So far, how satisfied are you with this feature?'
    );
    const ratingAsterisk = within(ratingSubtitle).getByText('*');
    expect(ratingAsterisk).toHaveClass('text-danger');
    const feedbackModalRating = within(feedbackModal).getByTestId('feedback-modal-rating');

    expect(within(feedbackModalRating).queryAllByText('Not satisfied at all')).toHaveLength(1);

    expect(within(feedbackModalRating).queryAllByText('Very satisfied')).toHaveLength(1);

    const radioButtonContainers = within(feedbackModalRating).queryAllByTestId(/rating-[1-5]/);
    expect(radioButtonContainers).toHaveLength(5);

    let chosenRadioButton: HTMLElement | undefined;

    [1, 2, 3, 4, 5].forEach((rating: number) => {
      const radioButtonContainer = within(feedbackModalRating).getByTestId(`rating-${rating}`);
      within(radioButtonContainer).getByText(rating);
      const radioButton = within(radioButtonContainer).getByRole('radio');

      expect(radioButton).toHaveAttribute('data-value', `${rating}`);

      if (rating === 5) {
        chosenRadioButton = radioButton;
      }
    });

    fireEvent.click(chosenRadioButton!);

    const commentSubtitle = within(feedbackModal).getByText(
      'How could we improve the way this works for you?'
    );
    const commentAsterisk = within(commentSubtitle).getByText('*');
    expect(commentAsterisk).toHaveClass('text-danger');
    const commentInput = within(feedbackModal).getByPlaceholderText(
      'Please give as much detail as you can. Thanks!'
    );

    fireEvent.change(commentInput, { target: { value: 'This is a comment!' } });

    const buttonToolbar = within(feedbackModal).getByRole('toolbar');
    within(buttonToolbar).getByText('Cancel');
    const sendButton = within(buttonToolbar).getByText('Send');

    act(() => {
      fireEvent.click(sendButton);
    });
    expect(within(buttonToolbar).getAllByRole('button')[0].textContent).toEqual('Please Wait...');
    await waitForElementToBeRemoved(feedbackModal);

    expect(doSubmit.mock.calls).toEqual([
      [
        {
          feature: 'test_feature',
          recipient: 'test_team_name',
          cc: undefined,
          rating: 5,
          comment: 'This is a comment!',
        },
      ],
    ]);
  });

  it('submits feedback via doSubmit callback with overridden default properties', async () => {
    const doSubmit = jest.fn();
    const { getByRole, findByRole } = render(
      <FeedbackButton
        feature="test_feature"
        recipient="test_team_name"
        doSubmit={doSubmit}
        backdrop
        cancelButtonText="Cancel2"
        color="secondary"
        outline={false}
        commentPlaceholder="Please give as much detail as you can. Thanks!2"
        commentSubtitle="How could we improve the way this works for you?2"
        highRatingText="Very satisfied2"
        lowRatingText="Not satisfied at all2"
        modalTitle="Give Feedback2"
        pleaseWaitButtonText="Please Wait...2"
        ratingSubtitle="So far, how satisfied are you with this feature?2"
        submitButtonText="Send2"
        ratingIncluded
        ratingRequired={false}
        commentIncluded
        commentRequired={false}
      />
    );

    const feedbackButton = getByRole('button');
    expect(feedbackButton.textContent).toEqual('Feedback');
    expect(feedbackButton).toHaveClass('btn-secondary');

    fireEvent.click(feedbackButton);

    const feedbackModal = await findByRole('dialog');

    const heading = within(feedbackModal).getByRole('heading', { level: 5 });
    expect(heading.textContent).toEqual('Give Feedback2');

    const ratingSubtitle = within(feedbackModal).getByText(
      'So far, how satisfied are you with this feature?2'
    );
    expect(ratingSubtitle).not.toHaveClass('text-danger');

    const feedbackModalRating = within(feedbackModal).getByTestId('feedback-modal-rating');

    expect(within(feedbackModalRating).queryAllByText('Not satisfied at all2')).toHaveLength(1);

    expect(within(feedbackModalRating).queryAllByText('Very satisfied2')).toHaveLength(1);

    const radioButtonContainers = within(feedbackModalRating).queryAllByTestId(/rating-[1-5]/);
    expect(radioButtonContainers).toHaveLength(5);

    let chosenRadioButton: HTMLElement | undefined;

    [1, 2, 3, 4, 5].forEach((rating: number) => {
      const radioButtonContainer = within(feedbackModalRating).getByTestId(`rating-${rating}`);
      within(radioButtonContainer).getByText(rating);
      const radioButton = within(radioButtonContainer).getByRole('radio');

      expect(radioButton).toHaveAttribute('data-value', `${rating}`);

      if (rating === 5) {
        chosenRadioButton = radioButton;
      }
    });

    fireEvent.click(chosenRadioButton!);

    const commentSubtitle = within(feedbackModal).getByText(
      'How could we improve the way this works for you?2'
    );
    expect(commentSubtitle).not.toHaveClass('text-danger');
    const commentInput = within(feedbackModal).getByPlaceholderText(
      'Please give as much detail as you can. Thanks!2'
    );

    fireEvent.change(commentInput, { target: { value: 'This is a comment!' } });

    const buttonToolbar = within(feedbackModal).getByRole('toolbar');
    within(buttonToolbar).getByText('Cancel2');
    const sendButton = within(buttonToolbar).getByText('Send2');

    act(() => {
      fireEvent.click(sendButton);
    });

    expect(within(buttonToolbar).getAllByRole('button')[0].textContent).toEqual('Please Wait...2');

    await waitForElementToBeRemoved(feedbackModal);

    expect(doSubmit.mock.calls).toEqual([
      [
        {
          feature: 'test_feature',
          recipient: 'test_team_name',
          cc: undefined,
          rating: 5,
          comment: 'This is a comment!',
        },
      ],
    ]);
  });

  it('does not accept a comment when commentIncluded is false', async () => {
    const doSubmit = jest.fn();
    const { getByRole, findByRole } = render(
      <FeedbackButton
        feature="test_feature"
        recipient="test_team_name"
        doSubmit={doSubmit}
        commentIncluded={false}
        commentRequired={false}
      />
    );

    const feedbackButton = getByRole('button');
    expect(feedbackButton.textContent).toEqual('Feedback');
    expect(feedbackButton).toHaveClass('btn-outline-primary');

    fireEvent.click(feedbackButton);

    const feedbackModal = await findByRole('dialog');

    const heading = within(feedbackModal).getByRole('heading', { level: 5 });
    expect(heading.textContent).toEqual('Give Feedback');

    const feedbackModalRating = within(feedbackModal).getByTestId('feedback-modal-rating');

    expect(within(feedbackModalRating).queryAllByText('Not satisfied at all')).toHaveLength(1);
    expect(within(feedbackModalRating).queryAllByText('Very satisfied')).toHaveLength(1);

    const radioButtonContainers = within(feedbackModalRating).queryAllByTestId(/rating-[1-5]/);
    expect(radioButtonContainers).toHaveLength(5);

    let chosenRadioButton: HTMLElement | undefined;

    [1, 2, 3, 4, 5].forEach((rating: number) => {
      const radioButtonContainer = within(feedbackModalRating).getByTestId(`rating-${rating}`);
      within(radioButtonContainer).getByText(rating);
      const radioButton = within(radioButtonContainer).getByRole('radio');

      expect(radioButton).toHaveAttribute('data-value', `${rating}`);

      if (rating === 5) {
        chosenRadioButton = radioButton;
      }
    });

    fireEvent.click(chosenRadioButton!);

    const commentInputs = within(feedbackModal).queryAllByPlaceholderText(
      'Please give as much detail as you can. Thanks!'
    );

    expect(commentInputs).toHaveLength(0);

    const buttonToolbar = within(feedbackModal).getByRole('toolbar');
    within(buttonToolbar).getByText('Cancel');
    const sendButton = within(buttonToolbar).getByText('Send');

    act(() => {
      fireEvent.click(sendButton);
    });
    expect(within(buttonToolbar).getAllByRole('button')[0].textContent).toEqual('Please Wait...');
    await waitForElementToBeRemoved(feedbackModal);

    expect(doSubmit.mock.calls).toEqual([
      [
        {
          feature: 'test_feature',
          recipient: 'test_team_name',
          cc: undefined,
          rating: 5,
          comment: null,
        },
      ],
    ]);
  });

  it('does not accept a rating when ratingIncluded is false', async () => {
    const doSubmit = jest.fn();
    const { getByRole, findByRole } = render(
      <FeedbackButton
        feature="test_feature"
        recipient="test_team_name"
        doSubmit={doSubmit}
        ratingIncluded={false}
        ratingRequired={false}
      />
    );

    const feedbackButton = getByRole('button');
    expect(feedbackButton.textContent).toEqual('Feedback');
    expect(feedbackButton).toHaveClass('btn-outline-primary');

    fireEvent.click(feedbackButton);

    const feedbackModal = await findByRole('dialog');

    const heading = within(feedbackModal).getByRole('heading', { level: 5 });
    expect(heading.textContent).toEqual('Give Feedback');

    within(feedbackModal).getByText('How could we improve the way this works for you?');
    const commentInput = within(feedbackModal).getByPlaceholderText(
      'Please give as much detail as you can. Thanks!'
    );

    fireEvent.change(commentInput, { target: { value: 'This is a comment!' } });

    const buttonToolbar = within(feedbackModal).getByRole('toolbar');
    within(buttonToolbar).getByText('Cancel');
    const sendButton = within(buttonToolbar).getByText('Send');

    act(() => {
      fireEvent.click(sendButton);
    });
    expect(within(buttonToolbar).getAllByRole('button')[0].textContent).toEqual('Please Wait...');
    await waitForElementToBeRemoved(feedbackModal);

    expect(doSubmit.mock.calls).toEqual([
      [
        {
          feature: 'test_feature',
          recipient: 'test_team_name',
          cc: undefined,
          rating: null,
          comment: 'This is a comment!',
        },
      ],
    ]);
  });

  it('will not submit without comment when comment required is true', async () => {
    const doSubmit = jest.fn();
    const { getByRole, findByRole } = render(
      <FeedbackButton
        feature="test_feature"
        recipient="test_team_name"
        doSubmit={doSubmit}
        ratingIncluded={false}
        ratingRequired={false}
      />
    );

    const feedbackButton = getByRole('button');
    expect(feedbackButton.textContent).toEqual('Feedback');
    expect(feedbackButton).toHaveClass('btn-outline-primary');

    fireEvent.click(feedbackButton);

    const feedbackModal = await findByRole('dialog');

    const heading = within(feedbackModal).getByRole('heading', { level: 5 });
    expect(heading.textContent).toEqual('Give Feedback');

    within(feedbackModal).getByText('How could we improve the way this works for you?');
    const commentInput = within(feedbackModal).getByPlaceholderText(
      'Please give as much detail as you can. Thanks!'
    );

    fireEvent.change(commentInput, { target: { value: 'This is a comment!' } });

    const buttonToolbar = within(feedbackModal).getByRole('toolbar');
    within(buttonToolbar).getByText('Cancel');
    const sendButton = within(buttonToolbar).getByText('Send');

    act(() => {
      fireEvent.click(sendButton);
    });
    expect(within(buttonToolbar).getAllByRole('button')[0].textContent).toEqual('Please Wait...');
    await waitForElementToBeRemoved(feedbackModal);

    expect(doSubmit.mock.calls).toEqual([
      [
        {
          feature: 'test_feature',
          recipient: 'test_team_name',
          cc: undefined,
          rating: null,
          comment: 'This is a comment!',
        },
      ],
    ]);
  });
});
