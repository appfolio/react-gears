import React from 'react';
import { Card, CardBlock } from 'reactstrap';

const BlockPanel = (props) => (
  <Card className="bg-faded">
    <CardBlock>
      {props.url ? <a href={props.url} className="pull-right">edit</a> : null}
      {props.title ? <h6><strong>{props.title}</strong></h6> : null}
      {props.children || props.value}
    </CardBlock>
  </Card>
);

BlockPanel.PropTypes = {
  title: React.PropTypes.string,
  url: React.PropTypes.string,
  value: React.PropTypes.string
};

export default BlockPanel;
