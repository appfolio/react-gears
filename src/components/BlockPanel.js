import React from 'react';
import { Card, CardBlock } from 'reactstrap';

const BlockPanel = (props) => (
  <Card className="bg-faded">
    <CardBlock>
      {props.onEdit ? <a className="float-right" href="#" onClick={props.onEdit}>edit</a> : null}
      {props.title ? <h4>{props.title}</h4> : null}
      {props.children || props.value}
    </CardBlock>
  </Card>
);

BlockPanel.propTypes = {
  onEdit: React.PropTypes.func,
  title: React.PropTypes.string,
  value: React.PropTypes.string
};

export default BlockPanel;
