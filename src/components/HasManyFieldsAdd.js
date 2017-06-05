import React from 'react';
import { Button } from 'reactstrap';
import Icon from './Icon';

const HasManyFieldsAdd = ({ children, outline, color, ...props }) => (
  <Button outline color="success" {...props} className="w-100 rounded-0">
    <Icon name="plus-circle" className="mr-2" />
    <span children={children} />
  </Button>
);

export default HasManyFieldsAdd;
