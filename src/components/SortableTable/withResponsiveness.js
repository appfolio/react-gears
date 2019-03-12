// Copied from https://github.com/appfolio/gp-frontend/blob/e7eab93e4bddd0b8b2ae8e1d0f6504176d56738d/src/components/shared/ResponsiveTable/withResponsiveness.js

import React, { Component } from 'react';
import classnames from 'classnames';

import './styles.scss';

const RG_WRAPPER_CLASS = 'table-responsive';

export default Table =>
  class ResponsiveTable extends Component {
    static propTypes = Table.propTypes;

    static defaultProps = Table.defaultProps;

    state = {
      classes: classnames()
    };

    constructor(props) {
      super(props);

      this.outerContainer = React.createRef();
    }

    get $outerContainer() {
      return this.outerContainer.current;
    }

    get tableWidth() {
      return this.$table.getBoundingClientRect().width;
    }

    get containerWidth() {
      return this.$container.getBoundingClientRect().width;
    }

    get isOverflow() {
      return this.tableWidth > this.containerWidth;
    }

    componentDidMount() {
      const { responsive } = this.props;
      if (!responsive) return;

      this.resizeEventListener = window.addEventListener(
        'resize',
        this.shadeTable
      );

      [this.$container] = this.$outerContainer.getElementsByClassName(
        RG_WRAPPER_CLASS
      );
      this.$container.addEventListener('scroll', this.shadeTable);

      [this.$table] = this.$container.getElementsByTagName('table');

      // for some reason expandable sections with tables have no width on their first render
      // delay the shading by one tick so the table width is correct
      setTimeout(() => {
        this.shadeTable();
        this.scrollToSelected();
      });
    }

    componentWillUnmount() {
      const { responsive } = this.props;
      if (!responsive) return;

      window.removeEventListener('resize', this.shadeTable);
      this.$container.removeEventListener('scroll', this.shadeTable);
    }

    shadeTable = () => {
      if (this.isOverflow) {
        const { scrollLeft } = this.$container;

        this.setState({
          classes: classnames({
            // NOTE: We need to subtract 1 here due to sub-pixel rendering issues to make sure we correctly remove the shading on the right
            'is-right-scrollable':
              scrollLeft < this.tableWidth - this.containerWidth - 1,
            'is-left-scrollable': scrollLeft > 0
          })
        });
      } else {
        this.setState({
          classes: classnames()
        });
      }
    };

    scrollToSelected = () => {
      const $selected = this.$container.getElementsByClassName('is-selected');

      if ($selected.length === 1) {
        this.$container.scrollLeft +=
          $selected[0].getBoundingClientRect().left - 50;
      }
    };

    render() {
      const { responsive } = this.props;
      const { classes } = this.state;
      const outerContainerClasses = classnames('responsive-table', classes);

      const child = <Table {...this.props} />;

      if (responsive) {
        return (
          <div ref={this.outerContainer} className={outerContainerClasses}>
            {child}
          </div>
        );
      }
      return child;
    }
  };
