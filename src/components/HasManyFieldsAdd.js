import React from 'react';
import { Button } from 'reactstrap';
import Icon from './Icon';

const HasManyFieldsAdd = ({ children, outline, color, ...props }) => (
  <Button outline color="success" {...props} className="w-100">
    <Icon name="plus" className="mr-2" />
    <span children={children} />
  </Button>
);

export default HasManyFieldsAdd;
