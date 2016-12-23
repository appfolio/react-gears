import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Paginator } from '../src';

// TODO this wrapper hides the usage example in react-storybook:
class Wrapper extends Component {
  displayName = 'Paginator';

  constructor() {
    super();
    this.state = { currentPage: 1 };
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  onClick = currentPage => {
    action('clicked', currentPage);
    this.setState({ currentPage });
  }

  render() {
    const currentPage = this.state.currentPage;
    return <Paginator currentPage={currentPage} totalItems={256} onClick={this.onClick} />;
  }
}

storiesOf('Paginator', module)
  .addWithInfo('Default', () => (
    <Wrapper currentPage={1} />
  ));
