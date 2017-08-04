import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from './Icon.js';
import styles from './Steps.scss';

const Steps = ({ complete, step, steps }) => {
  const className = `${styles.steps} ${complete ? styles.complete : ''}`;
  return (
    <ol className={className}>
      {steps.map((name, index) => {
        const stepComplete = !complete && index < step;
        const stepActive = !complete && index === step;

        const liClasses = classNames({
          [styles.step]: true,
          [styles.complete]: stepComplete,
          [styles.active]: stepActive,
        });

        const bubbleClasses = classNames({
          [styles.bubble]: true,
          'text-success': complete,
          'bg-primary': stepActive,
          'text-primary': stepComplete,
          'text-white': stepActive,
        });

        const textClasses = classNames({
          [styles.text]: true,
          'text-primary': stepComplete,
          'text-muted': !complete && index > step,
          'text-success': complete,
        });

        return (
          <li key={index} className={liClasses}>
            <div className={bubbleClasses}>
              {complete || stepComplete ? <Icon name="check" /> : index + 1}
            </div>
            <div className={textClasses}>{name}</div>
          </li>
        );
      })}
    </ol>
  );
};

Steps.propTypes = {
  step: PropTypes.number,
  steps: PropTypes.array.isRequired,
  complete: PropTypes.bool
};

export default Steps;
