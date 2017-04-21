import React from 'react';
import { Button, Card, CardBlock } from 'reactstrap';

const BlockPanel = (props) => (
  <Card className="bg-faded">
    <CardBlock>
      {props.onEdit ? <Button color="link" className="float-right p-0" onClick={props.onEdit}>edit</Button> : null}
      {props.title ? <h3>{props.title}</h3> : null}
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
