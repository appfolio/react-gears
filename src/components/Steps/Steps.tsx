import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

interface StepProps {
  collapse?: boolean;
  complete?: boolean;
  onStepClick?: (stepIndex: number) => void;
  step?: number;
  steps?: string[];
  vertical?: boolean;
  granular?: boolean;
  stepProgress?: number;
}

const Steps = ({
  collapse,
  complete = false,
  onStepClick,
  step = 0,
  steps = [],
  vertical = false,
  granular = false,
  stepProgress = 0,
}: StepProps) => {
  const className = classNames({
    complete,
    'rg-steps': true,
    vertical,
    'm-0': true,
  });
  const activeStep = steps[step];
  const activeStepClasses = classNames({
    'text-body': !complete,
    'text-success': complete,
    'd-sm-none': collapse !== true,
    'text-center': true,
  });
  const barColor = granular ? '#cdd5db' : '#818a91';
  return (
    <div className="mb-3">
      <ol className={className}>
        {steps.map((name, index) => {
          const stepComplete = !complete && index < step;
          const stepActive = !complete && index === step;
          const stepAfterActive = !complete && index === step + 1;
          const progressPercent = 50;
          const progressColor = '#016eb7';
          const renderActiveProgress =
            granular && !vertical && stepActive && index < steps.length - 1;
          const renderPrevStepProgress =
            granular && !vertical && stepAfterActive && index < steps.length && stepProgress > 50;

          const progressStyle: { backgroundImage?: string } = {};
          if (renderActiveProgress) {
            progressStyle.backgroundImage = `
              linear-gradient(
                to right,
                ${step === 0 ? 'transparent' : progressColor} 50%,
                ${progressColor} 50%,
                ${progressColor} ${progressPercent + stepProgress}%,
                ${barColor} ${progressPercent + stepProgress}%
              )
            `;
          } else if (renderPrevStepProgress) {
            progressStyle.backgroundImage = `
              linear-gradient(
                to right,
                ${progressColor} ${stepProgress - progressPercent}%,
                ${barColor} ${stepProgress - progressPercent}%,
                ${barColor} 50%, ${index === steps.length - 1 ? 'transparent' : barColor} 50%
              )
            `;
          }

          const liClasses = classNames('mb-2', {
            step: true,
            complete: stepComplete,
            active: stepActive,
            'text-success': complete,
            'text-primary': !complete && (stepComplete || stepActive),
            'text-muted': !(stepComplete || stepActive || complete),
            'render-step-progress': renderActiveProgress,
            'render-prev-step-progress': renderPrevStepProgress,
          });

          const bubbleClasses = classNames({
            bubble: true,
            'text-success': complete,
            'bg-white': !stepActive,
            'bg-primary': stepActive,
            'text-primary': stepActive || stepComplete,
            'text-muted': !stepComplete && !stepActive,
          });

          const iconClasses = classNames({
            'text-primary': stepComplete,
            'text-white': stepActive,
            'text-body': !(complete || stepComplete || stepActive),
            'text-success': complete,
          });

          const textClasses = classNames('js-step-label', {
            'd-sm-inline': vertical && collapse !== false,
            'd-none d-sm-inline': !vertical && collapse !== false,
            'text-primary': stepComplete,
            'text-muted': !complete && index > step,
            'text-success': complete,
            'text-body': stepActive,
          });

          const buttonClasses = classNames(
            'bg-transparent',
            'border-0',
            'd-flex',
            'align-items-center',
            'p-0',
            {
              'flex-column': !vertical,
            }
          );

          const stepContent = (
            <>
              <div className={bubbleClasses}>
                <span className={iconClasses}>
                  {complete || stepComplete ? <Icon name="check" /> : index + 1}
                </span>
              </div>
              {collapse !== true || vertical ? <span className={textClasses}>{name}</span> : null}
            </>
          );

          const wrappedStepContent = onStepClick ? (
            <Button onClick={() => onStepClick(index)} className={buttonClasses}>
              {stepContent}
            </Button>
          ) : (
            stepContent
          );
          return (
            /* eslint-disable-next-line react/no-array-index-key -- iterating over a string[]. no way to guarantee uniqueness other than index */
            <li key={index} className={liClasses} style={progressStyle}>
              {wrappedStepContent}
            </li>
          );
        })}
      </ol>
      {collapse !== false && !vertical ? (
        <div className={activeStepClasses}>
          <span className="mb-2 js-step-label">{activeStep}</span>
        </div>
      ) : null}
      <style jsx>
        {`
          .rg-steps:not(.vertical) {
            align-items: flex-start;
            counter-reset: step;
            display: flex;
            justify-content: space-around;
            padding: 0;
          }
          .rg-steps:not(.vertical) .step {
            background-image: linear-gradient(to right, ${barColor}, ${barColor});
            background-size: 100% ${granular ? '6px' : '1px'};
            background-position: center ${granular ? '1.15rem' : '1.26rem'};
            background-repeat: repeat-x;
            align-items: center;
            display: inline-flex;
            flex-direction: column;
            flex: 1 1 0;
            list-style: square;
            padding: 0.1rem;
            text-align: center;
          }
          .rg-steps:not(.vertical) .step:first-child {
            background-image: linear-gradient(
              to right,
              transparent 50%,
              ${barColor} 50%,
              ${barColor} 100%
            );
          }
          .rg-steps:not(.vertical) .step:first-child.active {
            background-image: linear-gradient(
              to right,
              transparent 50%,
              ${barColor} 50%,
              ${barColor} 100%
            );
          }
          .rg-steps:not(.vertical) .step:first-child.complete {
            background-image: linear-gradient(
              to right,
              transparent 50%,
              currentColor 50%,
              currentColor 100%
            );
          }
          .rg-steps:not(.vertical) .step:last-child {
            background-image: linear-gradient(
              to right,
              ${barColor} 50%,
              transparent 50%,
              transparent 100%
            );
          }
          .rg-steps:not(.vertical) .step:last-child.active {
            background-image: linear-gradient(
              to right,
              currentColor 50%,
              transparent 50%,
              transparent 100%
            );
          }
          .rg-steps:not(.vertical) .step:last-child.complete {
            background-image: linear-gradient(
              to right,
              currentColor 50%,
              transparent 50%,
              transparent 100%
            );
          }
          .rg-steps:not(.vertical) .step .bubble {
            align-items: center;
            border: 1px solid #818a91;
            border-radius: 100%;
            display: flex;
            font-size: 1.25rem;
            font-weight: bold;
            height: 2.5rem;
            justify-content: center;
            margin-bottom: 0.5rem;
            width: 2.5rem;
          }
          .rg-steps:not(.vertical) .step.active {
            background-image: linear-gradient(
              to right,
              currentColor 50%,
              ${barColor} 50%,
              ${barColor} 100%
            );
          }
          .rg-steps:not(.vertical) .step.active .bubble {
            border: 1px solid currentColor;
          }
          .rg-steps:not(.vertical) .step.complete {
            background-image: linear-gradient(to right, currentColor, currentColor);
          }
          .rg-steps:not(.vertical) .step.complete .bubble {
            border: 1px solid currentColor;
          }
          .rg-steps:not(.vertical).complete .step {
            background-image: linear-gradient(to right, currentColor, currentColor);
          }
          .rg-steps:not(.vertical).complete .step .bubble {
            border: 1px solid currentColor;
          }
          .rg-steps:not(.vertical).complete .step:first-child {
            background-image: linear-gradient(
              to right,
              transparent 50%,
              currentColor 50%,
              currentColor 100%
            );
          }
          .rg-steps:not(.vertical).complete .step:last-child {
            background-image: linear-gradient(
              to right,
              currentColor 50%,
              transparent 50%,
              transparent 100%
            );
          }

          .rg-steps.vertical {
            counter-reset: step;
          }
          .rg-steps.vertical .step {
            align-items: center;
            display: flex;
            margin-top: 1.5rem;
          }
          .rg-steps.vertical .step .bubble {
            align-items: center;
            border: 1px solid #818a91;
            border-radius: 100%;
            display: flex;
            font-size: 1.25rem;
            font-weight: bold;
            height: 2.5rem;
            justify-content: center;
            margin-right: 0.5rem;
            width: 2.5rem;
          }
          .rg-steps.vertical .step.active .bubble {
            border: 1px solid currentColor;
          }
          .rg-steps.vertical .step.complete .bubble {
            border: 1px solid currentColor;
          }
        `}
      </style>
    </div>
  );
};

Steps.displayName = 'Steps';

export default Steps;
