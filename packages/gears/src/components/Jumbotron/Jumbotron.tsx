import classNames from 'classnames';
import React from 'react';

export interface JumbotronProps {
  tag?: keyof JSX.IntrinsicElements;
  fluid?: boolean;
  className?: string;
}

const Jumbotron = ({ tag: Tag = 'div', fluid, className }: JumbotronProps) => {
  const classes = classNames(
    className,
    'py-3 py-sm-5',
    fluid ? 'bg-light mb-4' : 'rounded px-3 px-sm-4'
  );
  return <Tag className={classes} />;
};

export default Jumbotron;
