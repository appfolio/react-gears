import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import styles from './Steps.scss';

const Steps = ({ collapse, complete, step, steps }) => {
  const className = classNames({
    [styles.complete]: complete,
    [styles.steps]: true,
    'm-0': true
  });
  const activeStep = steps[step];
  const activeStepClasses = classNames({
    'text-dark': !complete,
    'text-success': complete,
    'd-sm-none': collapse !== true,
    'text-center': true
  });

  return (
    <div className="mb-3">
      <ol className={className}>
        {steps.map((name, index) => {
          const stepComplete = !complete && index < step;
          const stepActive = !complete && index === step;

          const liClasses = classNames({
            [styles.step]: true,
            [styles.complete]: stepComplete,
            [styles.active]: stepActive,
            'text-success': complete,
            'text-primary': !complete && (stepComplete || stepActive),
            'text-muted': !(stepComplete || stepActive || complete)
          });

          const bubbleClasses = classNames({
            [styles.bubble]: true,
            'text-success': complete,
            'bg-primary': stepActive,
            'text-primary': stepActive || stepComplete,
            'text-muted': !stepComplete && !stepActive
          });

          const iconClasses = classNames({
            'text-primary': stepComplete,
            'text-white': stepActive,
            'text-dark': !(complete || stepComplete || stepActive),
            'text-success': complete
          });

          const textClasses = classNames('mb-2 js-step-label', {
            'd-none d-sm-inline': collapse !== false,
            'text-primary': stepComplete,
            'text-muted': !complete && index > step,
            'text-success': complete,
            'text-dark': stepActive,
          });

          return (
            <li key={index} className={liClasses}>
              <div className={bubbleClasses}>
                <span className={iconClasses}>{complete || stepComplete ? <Icon name="check" /> : index + 1}</span>
              </div>
              {collapse !== true ? <span className={textClasses}>{name}</span> : null}
            </li>
          );
        })}
      </ol>
      {collapse !== false ?
        <div className={activeStepClasses}>
          <span className="mb-2 js-step-label">{activeStep}</span>
        </div> : null}
    </div>
  );
};

Steps.propTypes = {
  collapse: PropTypes.bool,
  complete: PropTypes.bool,
  step: PropTypes.number,
  steps: PropTypes.array
};

Steps.defaultProps = {
  complete: false,
  step: 0,
  steps: []
};

export default Steps;
