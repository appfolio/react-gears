import React, { Component } from 'react';
import classnames from 'classnames';
import { Icon } from '../';
import styles from './CardContainer.scss';

class CardContainer extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    open: React.PropTypes.bool,
    icon: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { className, title, id, children, icon } = this.props;
    const iconName = this.state.open ? 'caret-down' : 'caret-right';
    const cursorStyle = icon ? 'pointer' : 'default';

    return (
      <section className={classnames(className, styles.cardContainer)} id={id}>
        <header className={styles.cardContainerTitle} onClick={this.toggle} style={{ cursor: cursorStyle }}>
          {icon ? <Icon name={iconName} className={styles.iconCaretRight}/> : null} {title}
        </header>
        {this.state.open ? <div className={styles.cardContainerBody}>{children}</div> : null}
      </section>
    );
  }
}

export default CardContainer;
