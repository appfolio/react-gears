import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import styles from './Steps.style';

interface StepProps {
  collapse?: boolean;
  complete?: boolean;
  step?: number;
  steps?: string[];
  vertical?: boolean;
}

const Steps = ({ collapse, complete = false, step = 0, steps = [], vertical = false }: StepProps) => {
  const className = classNames({
    complete,
    'rg-steps': true,
    vertical,
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

          const liClasses = classNames('mb-2', {
            step: true,
            complete: stepComplete,
            active: stepActive,
            'text-success': complete,
            'text-primary': !complete && (stepComplete || stepActive),
            'text-muted': !(stepComplete || stepActive || complete)
          });

          const bubbleClasses = classNames({
            bubble: true,
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

          const textClasses = classNames('js-step-label', {
            'd-sm-inline': vertical && collapse !== false,
            'd-none d-sm-inline': !vertical && collapse !== false,
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
              {collapse !== true || vertical ? <span className={textClasses}>{name}</span> : null}
            </li>
          );
        })}
      </ol>
      {collapse !== false && !vertical ?
        <div className={activeStepClasses}>
          <span className="mb-2 js-step-label">{activeStep}</span>
        </div> : null}
      <style jsx>
        {styles}
      </style>
    </div>
  );
};

export default Steps;
