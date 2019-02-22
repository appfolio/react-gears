import fecha from 'fecha';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Badge from './Badge';
import Button from './Button';
import CardHeader from './CardHeader';

// TODO extract to date helper, i18n:
const dateFormat = (date, format) => fecha.format(date, format);

class NoteHeader extends React.Component {
  static displayName = 'NoteHeader';

  static propTypes = {
    note: PropTypes.shape({
      date: PropTypes.object.isRequired,
      edited: PropTypes.bool,
      from: PropTypes.string,
    }).isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
  };

  render() {
    const { note, onDelete, onEdit } = this.props;
    const { date, edited, from } = note;

    const headerClassNames = classnames(
      'd-flex',
      'flex-wrap',
      'align-items-center',
      'justify-content-between',
      'py-2',
      'pr-2',
      'bg-info'
    );

    return (
      <CardHeader className={headerClassNames}>
        <div className="d-inline-flex align-items-center">
          {edited && <Badge color="primary" className="text-uppercase mr-2 js-note-header__edited">Edited</Badge>}
          <span className="m-0 my-1 mr-auto">
            <span className="d-none d-sm-inline">
              {edited ? 'Last edited' : 'Posted'}
              {from ? <span className="js-note-header__from">{` by ${from}`}</span> : ' '} on <span className="js-note-header__date">{dateFormat(date, 'ddd, MMMM D, YYYY "at" h:mm A')}</span>
            </span>
            <span className="d-sm-none">
              {from ? <span>{from} </span> : null}<span className="js-note-header__shortDate">{dateFormat(date, 'M/D/YY h:mm A')}</span>
            </span>
          </span>
        </div>
        <div className="d-inline-flex">
          {onEdit ? <Button color="link" onClick={() => onEdit(note)} className="js-note-header__edit mr-3 p-0">edit</Button> : null}
          {onDelete ? <Button color="link" onClick={() => onDelete(note)} className="js-note-header__delete p-0">delete</Button> : null}
        </div>
      </CardHeader>
    );
  }
}

export default NoteHeader;
