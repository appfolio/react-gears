import React, { Component } from 'react';
import classnames from 'classnames';
import { Col, Icon, Row } from '../';
import styles from './CardContainer.scss';

class CardContainer extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    open: React.PropTypes.bool,
    expandable: React.PropTypes.bool,
    headerComponent: React.PropTypes.bool,
    headerComponentClassName: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { className, title, id, children, expandable, headerComponent, headerComponentClassName } = this.props;
    const iconName = this.state.open ? 'caret-down' : 'caret-right';
    const cursorStyle = expandable ? 'pointer' : 'default';
    const gridNumber = headerComponent ? 8 : 12;

    return (
      <section className={classnames(className, styles.cardContainer)} id={id}>
        <header className={styles.cardContainerTitle}>
          <Row>
            <Col
              xs={12}
              sm={gridNumber}
              className='text-sm-left text-uppercase'
              onClick={expandable ? this.toggle : null}
              style={{ cursor: cursorStyle }}
            >
              {expandable ? <Icon name={iconName} className={styles.iconCaretRight} /> : null} {title}
            </Col>
            {headerComponent ? <Col xs={12} sm={4} className={headerComponentClassName}>{headerComponent}</Col> : null}
          </Row>
        </header>
        {this.state.open || !expandable ? <div className={styles.cardContainerBody}>{children}</div> : null}
      </section>
    );
  }
}

export default CardContainer;
