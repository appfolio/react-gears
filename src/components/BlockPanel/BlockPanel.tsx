import React, { useEffect, useState, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import Button from '../Button';
import Card from '../Card';
import CardBody from '../CardBody';
import CardHeader from '../CardHeader';
import CardTitle from '../CardTitle';
import ClickableContainer from '../ClickableContainer';
import Collapse from '../Collapse';
import Icon from '../Icon';
import styles from './BlockPanel.scss';

interface BasicBlockPanelTitleProps {
  className?: string,
  expandable?: boolean,
  onClick: () => void,
}

const BasicBlockPanelTitle: FunctionComponent<BasicBlockPanelTitleProps> = (
  { className, expandable, onClick, ...props }: BasicBlockPanelTitleProps
) => expandable ?
  <ClickableContainer onClick={onClick} className={classnames('flex-grow-1', styles.header, className)} {...props} /> :
  <div {...props} />;


export interface BasicBlockPanelProps {
  children?: ReactNode,
  color?: string,
  controls?: ReactNode,
  className?: string,
  expandable?: boolean,
  headerClassName?: string,
  hideOnToggle?: boolean,
  onEdit?: (event: React.MouseEvent<any, MouseEvent>) => void,
  onToggle: (willOpen?: boolean) => void,
  open?: boolean,
  title: ReactNode,
}
/**
 * BasicBlockPanel is an extension to Bootstrap Card, which allows for expand/collapse and standardized header.
 */
const BasicBlockPanel: FunctionComponent<BasicBlockPanelProps> = ({
  children,
  className,
  color,
  controls,
  expandable,
  headerClassName,
  hideOnToggle,
  onEdit,
  onToggle,
  open,
  title,
  ...props
}: BasicBlockPanelProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [collapsed, setCollapsed] = useState(!open);

  const updateState = (willOpen?: boolean) => {
    if (willOpen !== isOpen) {
      setIsOpen(willOpen);
      if (willOpen) {
        setCollapsed(false);
      }
      onToggle(willOpen);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateState(open), [open]);
  const toggle = () => updateState(!isOpen);
  const onClosed = () => setCollapsed(true);

  // TODO simplify - these styles should be default Card, CardHeader styles in theme, not util classes
  const headerClassNames = classnames(
    'd-flex',
    'flex-wrap',
    'align-items-center',
    'justify-content-between',
    'py-2',
    'pr-2',
    {
      'pl-2': expandable,
      [`bg-${color}`]: color,
      'text-white': color === 'primary' || color === 'dark'
    },
    headerClassName
  );

  const iconClassName = classnames('mr-1', {
    'text-muted': color !== 'primary' && color !== 'dark'
  });

  return (
    <Card className={className} {...props}>
      <CardHeader className={headerClassNames}>
        <BasicBlockPanelTitle
          className="d-inline-flex align-items-center"
          expandable={expandable}
          onClick={toggle}
        >
          {expandable && (
            <Icon
              className={iconClassName}
              name="caret-right"
              rotate={isOpen ? 90 : undefined}
              fixedWidth
              style={{ transition: 'transform 200ms ease-in-out' }}
            />
          )}
          <CardTitle tag="h2" className="h5 m-0 my-1 mr-auto">
            {title}
          </CardTitle>
        </BasicBlockPanelTitle>
        <div className="d-inline-flex">
          {controls && controls}
          {onEdit && (
            <Button
              color="link"
              className={`${(color === 'primary' || color === 'dark') ? 'text-white' : ''} p-0 ml-2 mr-1`}
              onClick={onEdit}
            >
              edit
            </Button>
          )}
        </div>
      </CardHeader>
      {children && (
        <Collapse
          isOpen={children ? (!expandable || isOpen) : false}
          onExited={() => onClosed()}
        >
          {(!expandable || hideOnToggle || !collapsed) && (
            <CardBody>{children}</CardBody>
          )}
        </Collapse>
      )}
    </Card>
  );
};

BasicBlockPanel.defaultProps = {
  className: '',
  open: true,
  expandable: false,
  hideOnToggle: false,
  onToggle: () => {},
};

export default BasicBlockPanel;
