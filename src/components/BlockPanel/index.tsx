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
import createIsOpenHook from './createIsOpenHook';

interface BlockPanelTitleProps {
  className?: string,
  expandable?: boolean,
  onClick: () => void,
}

const BlockPanelTitle: FunctionComponent<BlockPanelTitleProps> = (
  { className, expandable, onClick, ...props }: BlockPanelTitleProps
) => expandable ?
  <ClickableContainer onClick={onClick} className={classnames('flex-grow-1', className)} {...props} /> :
  <div {...props} />;


export interface BlockPanelProps {
  children?: ReactNode,
  color?: string,
  controls?: ReactNode,
  className?: string,
  expandable?: boolean,
  headerClassName?: string,
  hideOnToggle?: boolean,
  onEdit?: (event: React.MouseEvent<any, MouseEvent>) => void,
  onToggle?: (willOpen?: boolean) => void,
  open?: boolean,
  title: ReactNode,
  stickyId?: string,
}

const defaultProps = {
  className: '',
  open: true,
  expandable: false,
  hideOnToggle: false,
  onToggle: () => { },
};
/**
 * BlockPanel is an extension to Bootstrap Card, which allows for expand/collapse and standardized header.
 */
const BlockPanel: FunctionComponent<BlockPanelProps> = ({
  children,
  className = defaultProps.className,
  color,
  controls,
  expandable = defaultProps.expandable,
  headerClassName,
  hideOnToggle = defaultProps.hideOnToggle,
  onEdit,
  onToggle = defaultProps.onToggle,
  open = defaultProps.open,
  title,
  stickyId,
  ...props
}: BlockPanelProps) => {
  const useIsOpen = createIsOpenHook(stickyId, open);
  const [isOpen, setIsOpen] = useIsOpen(open);
  const [collapsed, setCollapsed] = useState(!isOpen);

  const updateState = (willOpen?: boolean) => {
    if (willOpen !== isOpen) {
      setIsOpen(willOpen as boolean);
      if (willOpen) {
        setCollapsed(false);
      }
      onToggle(willOpen);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (!stickyId) updateState(open); }, [open]);
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
        <BlockPanelTitle
          className="d-inline-flex align-items-center"
          expandable={expandable}
          onClick={toggle}
        >
          {expandable && (
            <Icon
              className={iconClassName}
              name="chevron-up"
              rotate={!isOpen ? 180 : undefined}
              fixedWidth
              style={{ transition: 'transform 200ms ease-in-out' }}
            />
          )}
          <CardTitle tag="h2" className="h5 m-0 my-1 mr-auto">
            {title}
          </CardTitle>
        </BlockPanelTitle>
        <div className="d-inline-flex">
          {controls && controls}
          {onEdit && (
            <Button
              color="link"
              className={`${(color === 'primary' || color === 'dark') ? 'text-white' : ''} p-0 ml-2 mr-1`}
              onClick={onEdit}
            >
              Edit
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

BlockPanel.defaultProps = defaultProps;

export default BlockPanel;
