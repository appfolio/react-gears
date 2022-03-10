import React from 'react';
import fecha from 'fecha';
import classnames from 'classnames';
import Badge from './Badge';
import Button from './Button';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import NoteType from './TypeHelpers/NoteType';

// TODO extract to date helper, i18n:
const format = (date: Date | number, dateFormat: string) => fecha.format(date, dateFormat);

const timezone = (date: Date) => date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];

type NoteHeaderProps = {
  note: Omit<NoteType, 'text'>,
  dateFormat?: string,
  // TODO shortDateFormat ?
  showTimezone?: boolean,
  onDelete?: (note: Omit<NoteType, 'text'>) => void,
  onEdit?: (note: Omit<NoteType, 'text'>) => void,
}

const defaultProps = {
  dateFormat: 'ddd MMM DD YYYY HH:mm:ss',
};

const NoteHeader: React.FunctionComponent<NoteHeaderProps> = ({
  dateFormat = defaultProps.dateFormat,
  ...props
}) => {
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

  return (
    anyDataExisting ?
      <CardHeader className={headerClassNames}>
        <div className="d-inline-flex align-items-center">
          {edited && <Badge color="primary" className="text-uppercase me-2 js-note-header__edited">Edited</Badge>}
          <div className="d-flex flex-column">
            {title && <CardTitle>{title}</CardTitle>}
            {
              date &&
              <span className="m-0 my-1 me-auto">
                <span className="d-none d-sm-inline">
                  {edited ? 'Last edited' : 'Posted'}
                  {from ? <span className="js-note-header__from">{` by ${from}`}</span> : ' '} on <span className="js-note-header__date">{format(date, dateFormat)}{showTimezone && ` ${timezone(date)}`}</span>
                </span>
                <span className="d-sm-none">
                  {from ? <span>{from} </span> : null}<span className="js-note-header__shortDate">{format(date, 'M/D/YY h:mm A')} {timezone(date)}</span>
                </span>
              </span>
            }
          </div>
        </div>
        <div className="d-inline-flex">
          {onEdit ? <Button color="link" onClick={() => onEdit(note)} className="js-note-header__edit me-3 p-0">Edit</Button> : null}
          {onDelete ? <Button color="link" onClick={() => onDelete(note)} className="js-note-header__delete p-0">Delete</Button> : null}
        </div>
      </CardHeader>
      :
      <div className='js-note-header__no_data'/>
  );
};

NoteHeader.displayName = 'NoteHeader';

NoteHeader.defaultProps = defaultProps;

export default NoteHeader;
