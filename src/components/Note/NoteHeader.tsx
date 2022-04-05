import classnames from 'classnames';
import formatDate from 'date-fns/format';
import React, { type FC } from 'react';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import CardHeader from '../Card/CardHeader';
import CardTitle from '../Card/CardTitle';
import { type Note } from './Note.types';

// TODO extract to date helper, i18n:
const format = (date: Date | number, dateFormat: string) => formatDate(date, dateFormat);

const timezone = (date: Date) =>
  date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];

type NoteHeaderProps = {
  note: Omit<Note, 'text'>;
  dateFormat?: string;
  // TODO shortDateFormat ?
  showTimezone?: boolean;
  onDelete?: (note: Omit<Note, 'text'>) => void;
  onEdit?: (note: Omit<Note, 'text'>) => void;
};

const defaultProps = {
  dateFormat: 'eee MMM d yyyy h:mm:ss',
};

const NoteHeader: FC<NoteHeaderProps> = ({ dateFormat = defaultProps.dateFormat, ...props }) => {
  const { note, onDelete, onEdit, showTimezone } = props;
  const { date, edited, from, title } = note;

  const headerClassNames = classnames(
    'd-flex',
    'flex-wrap',
    'align-items-center',
    'justify-content-between',
    'py-2',
    'pe-2',
    'bg-info'
  );

  const anyDataExisting = date || from || title;

  return anyDataExisting ? (
    <CardHeader className={headerClassNames}>
      <div className="d-inline-flex align-items-center">
        {edited && (
          <Badge color="primary" className="text-uppercase me-2 js-note-header__edited">
            Edited
          </Badge>
        )}
        <div className="d-flex flex-column">
          {title && <CardTitle>{title}</CardTitle>}
          {date && (
            <span className="m-0 my-1 me-auto">
              <span className="d-none d-sm-inline">
                {edited ? 'Last edited' : 'Posted'}
                {from ? <span className="js-note-header__from">{` by ${from}`}</span> : ' '} on{' '}
                <span className="js-note-header__date">
                  {format(date, dateFormat)}
                  {showTimezone && ` ${timezone(date)}`}
                </span>
              </span>
              <span className="d-sm-none">
                {from ? <span>{from} </span> : null}
                <span className="js-note-header__shortDate">
                  {format(date, 'M/d/yyyy h:mm a')} {timezone(date)}
                </span>
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="d-inline-flex">
        {onEdit ? (
          <Button
            color="link"
            onClick={() => onEdit(note)}
            className="js-note-header__edit me-3 p-0"
          >
            Edit
          </Button>
        ) : null}
        {onDelete ? (
          <Button
            color="link"
            onClick={() => onDelete(note)}
            className="js-note-header__delete p-0"
          >
            Delete
          </Button>
        ) : null}
      </div>
    </CardHeader>
  ) : (
    <div className="js-note-header__no_data" />
  );
};

NoteHeader.displayName = 'NoteHeader';

NoteHeader.defaultProps = defaultProps;

export default NoteHeader;
