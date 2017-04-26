import React, { Component } from 'react';
import classnames from 'classnames';
import { Col, Icon, Input, InputGroup, InputGroupAddon, Row } from '../';
import styles from './CardContainer.scss';

class CardContainer extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    open: React.PropTypes.bool,
    icon: React.PropTypes.bool,
    searchBar: React.PropTypes.bool,
    filterStr: React.PropTypes.string,
    onSearch: React.PropTypes.func,
    searchBarClassName: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { className, title, id, children, icon, searchBar, filterStr, onSearch, searchBarClassName } = this.props;
    const iconName = this.state.open ? 'caret-down' : 'caret-right';
    const cursorStyle = icon ? 'pointer' : 'default';
    const gridNumber = searchBar ? 8 : 12;

    return (
      <section className={classnames(className, styles.cardContainer)} id={id}>
        <header className={styles.cardContainerTitle}>
          <Row>
            <Col xs={12} sm={gridNumber} className='text-sm-left' onClick={this.toggle} style={{ cursor: cursorStyle }}>
              {icon ? <Icon name={iconName} className={styles.iconCaretRight}/> : null} {title}
            </Col>
            {searchBar ?
              <Col xs={12} sm={4} className={searchBarClassName}>
                <InputGroup>
                  <Input placeholder='Search' onChange={onSearch} value={filterStr} />
                  <InputGroupAddon>
                    <Icon name='search' />
                  </InputGroupAddon>
                </InputGroup>
              </Col> : null}
          </Row>
        </header>
        {this.state.open ? <div className={styles.cardContainerBody}>{children}</div> : null}
      </section>
    );
  }
}

export default CardContainer;
