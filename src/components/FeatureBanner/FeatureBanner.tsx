import React, { FC, ReactNode, useState } from 'react';
import { Alert } from 'reactstrap';

interface FeatureBannerProps {
  alertText?: string;
  children?: ReactNode;
  color?: string;
  dismissable?: boolean;
  subtitle: ReactNode;
  title: string;
}

const defaultProps = {
  alertText: 'new',
  color: 'info',
  dismissable: false,
};

const FeatureBanner: FC<FeatureBannerProps> = ({
  alertText = defaultProps.alertText,
  color = defaultProps.color,
  dismissable = defaultProps.dismissable,
  title,
  subtitle,
  children,
}) => {
  const alertStyle = 'fw-bold text-uppercase';
  const [visible, setVisible] = useState(true);
  const toggle = dismissable ? () => setVisible(!visible) : undefined;
  return (
    <Alert
      color={color}
      className="align-items-center d-flex p-0"
      fade={false}
      toggle={toggle}
      isOpen={visible}
    >
      <h2 className={`${alertStyle} text-center m-0 px-3 d-none d-sm-block`}>{alertText}</h2>
      <div className={`d-flex flex-row flex-wrap p-3 w-100 ${dismissable ? 'pe-5' : ''}`}>
        <div className="flex-fill me-auto">
          <div className="d-inline-block m-0">
            <h2 className={`${alertStyle} d-inline d-sm-none me-2`}>{alertText}</h2>
            <h3 className="d-inline">{title}</h3>
          </div>
          <p className="m-0">{subtitle}</p>
        </div>
        <div className="d-inline-block my-auto">{children}</div>
      </div>
    </Alert>
  );
};

export default FeatureBanner;
