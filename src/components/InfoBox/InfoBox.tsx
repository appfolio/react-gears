import classnames from 'classnames';
import React, { type ReactNode } from 'react';
import Icon from '../Icon/Icon';

interface InfoBoxProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  children?: ReactNode;
  className?: string;
  color?: string;
  icon?: string;
  title?: string;
  vertical?: boolean;
}

const InfoBox = ({
  children,
  className,
  color = 'info',
  icon,
  title,
  vertical = false,
  ...props
}: InfoBoxProps) => {
  const classNames = classnames('rg-InfoBox', 'bg-white', 'shadow', 'p-3', className, {
    [`border-${color}`]: color,
    'border-top': vertical,
    'border-start': !vertical,
  });
  const headerClasses = classnames('fw-normal d-flex justify-content-between m-0', {
    [`text-${color}`]: color,
    'mb-3': !!children,
  });

  return (
    <>
      <div className={classNames} {...props}>
        {title && (
          <h1 className={headerClasses}>
            {title}
            {icon ? <Icon name={icon} /> : null}
          </h1>
        )}
        {children && <div className="infobox-body">{children}</div>}
      </div>
      <style jsx>
        {`
          .rg-InfoBox {
            border-width: 0.55rem !important;
            flex: 1 1 auto;
          }
        `}
      </style>
    </>
  );
};

InfoBox.displayName = 'InfoBox';

export default InfoBox;
