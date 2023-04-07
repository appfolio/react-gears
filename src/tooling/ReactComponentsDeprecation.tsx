import React, { ComponentType } from 'react';
import { Alert } from 'reactstrap';
import Icon from '../components/Icon/Icon';

interface DeprecationDecoratorProps {
  additionalInfo?: string;
  name: string;
  story: ComponentType;
  storyPath: string;
}

const publishBase = 'http://af-react-libs.s3-website-us-east-1.amazonaws.com/';
const repoUrl = 'https://github.com/appfolio/react-libs/tree/main/packages/react-components';

/**
 * A Storybook decorator that displays a deprecation warning for a component story. This is to be used when
 *  a `react-gears` component is replaced by a new component in the `react-components` library.
 */
const DeprecationDecorator = ({
  additionalInfo,
  name,
  story: Story,
  storyPath,
}: DeprecationDecoratorProps) => (
  <div>
    <Alert color="danger">
      <Icon name="warning" className="me-2" />
      This component is deprecated. Use the{' '}
      <a href={`${publishBase}?path=${storyPath}`} target="_blank" rel="noreferrer">
        {name}
      </a>{' '}
      component from the{' '}
      <a href={repoUrl} target="_blank" rel="noreferrer">
        react-components
      </a>{' '}
      repository instead. {additionalInfo}
    </Alert>
    <Story />
  </div>
);

export default DeprecationDecorator;
