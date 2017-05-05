import React from 'react';
import { Button, Card, CardBlock, CardHeader, CardTitle } from 'reactstrap';
import styles from './BlockPanel.scss';

const BlockPanel = ({ children, className, title, value, onEdit, ...props }) => (
  <Card className={`${styles.blockpanel} rounded-0 border-0 ${className}`} {...props}>
    <CardHeader className={`${styles.header} border-0 d-flex justify-content-end`}>
      {title ? <CardTitle className="m-0 mr-auto">{title}</CardTitle> : null}
      {onEdit ? <Button color="link" className="p-0" onClick={onEdit}>edit</Button> : null}
    </CardHeader>
    <CardBlock>
      {children || value}
    </CardBlock>
  </Card>
);

BlockPanel.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  onEdit: React.PropTypes.func,
  title: React.PropTypes.string,
  value: React.PropTypes.string
};

BlockPanel.defaultProps = {
  className: ''
};

export default BlockPanel;
