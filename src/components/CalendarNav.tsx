import React, { MouseEvent, ReactNode } from 'react';
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import PaginationLink from './PaginationLink';

interface CalendarNavProps {
  children: ReactNode;
  onFirst: ((event: MouseEvent) => void) | undefined;
  onLast: ((event: MouseEvent) => void) | undefined;
  onNext: ((event: MouseEvent) => void) | undefined;
  onPrevious: ((event: MouseEvent) => void) | undefined;
}

const CalendarNav = ({ children, onFirst, onLast, onNext, onPrevious, ...props }: CalendarNavProps) => (
  <Pagination
    listClassName="m-0 px-1 py-2"
    listTag="div"
    tag="header"
    {...props}
  >
    <PaginationItem tag="span">
      <PaginationLink first onClick={onFirst} className="js-prev-year" />
    </PaginationItem>
    <PaginationItem tag="span">
      <PaginationLink previous onClick={onPrevious} className="js-prev-month" />
    </PaginationItem>

    {children && (
      <PaginationItem tag="span" className="m-auto">
        {children}
      </PaginationItem>
    )}

    <PaginationItem tag="span">
      <PaginationLink next onClick={onNext} className="js-next-month" />
    </PaginationItem>
    <PaginationItem tag="span">
      <PaginationLink last onClick={onLast} className="js-next-year" />
    </PaginationItem>
  </Pagination>
);

CalendarNav.displayName = 'CalendarNav';

export default CalendarNav;