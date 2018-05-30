import fecha from 'fecha';
import PropTypes from 'prop-types';
import React from 'react';

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

    return (
      <CardHeader className="d-flex justify-content-start p-2 bg-info">
        {edited ? <span className="js-note-header__edited"><Badge color="primary text-uppercase mr-2">Edited</Badge></span> : null}
        <span className="text-muted">
          <span className="hidden-xs-down">
            {edited ? 'Last edited' : 'Posted'}
            {from ? <span className="js-note-header__from">{` by ${from}`}</span> : ' '} on <span className="js-note-header__date">{dateFormat(date, 'ddd, MMMM D, YYYY "at" h:mm A')}</span>
          </span>
          <span className="hidden-sm-up">
            {from ? <span>{from} </span> : null}<span className="js-note-header__shortDate">{dateFormat(date, 'M/D/YY h:mm A')}</span>
          </span>
        </span>
        <span className="ml-auto">
          {onEdit ? <Button color="link" onClick={() => onEdit(note)} className="js-note-header__edit mr-3 p-0">edit</Button> : null}
          {onDelete ? <Button color="link" onClick={() => onDelete(note)} className="js-note-header__delete p-0">delete</Button> : null}
        </span>
      </CardHeader>
    );
  }
}

export default NoteHeader;
