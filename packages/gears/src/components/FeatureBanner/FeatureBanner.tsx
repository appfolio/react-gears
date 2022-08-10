import React, { FC, ReactNode } from 'react';
import { Alert } from 'reactstrap';

interface FeatureBannerProps {
  alertText?: string;
  children?: ReactNode;
  color?: string;
  subtitle: ReactNode;
  title: string;
}

const defaultProps = {
  alertText: 'new',
  color: 'info',
};

const FeatureBanner: FC<FeatureBannerProps> = ({
  alertText = defaultProps.alertText,
  color = defaultProps.color,
  title,
  subtitle,
  children,
}) => {
  const alertStyle = 'fw-bold text-uppercase';
  return (
    <Alert color={color} className="align-items-center d-flex p-0" fade={false}>
      <h2 className={`${alertStyle} text-center m-0 px-3 d-none d-sm-block`}>{alertText}</h2>
      <div className="d-flex flex-row flex-wrap p-3 w-100">
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
