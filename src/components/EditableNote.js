import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import ButtonToolbar from './ButtonToolbar';
import Card from './Card';
import CardBlock from './CardBlock';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';
import NoteHeader from './NoteHeader';

class EditableNote extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    note: PropTypes.shape({
      date: PropTypes.object,
      errors: PropTypes.string,
      text: PropTypes.string
    }),
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    rows: PropTypes.number,
    saving: PropTypes.bool
  };

  static defaultProps = {
    className: 'bg-white mb-3',
    rows: 4,
    saving: false
  };

  render() {
    const { children, className, note, onCancel, onChange, onSave, rows, saving } = this.props;
    const { date, errors, text } = note;

    return (
      <Card className={className}>
        {date && <NoteHeader note={note} />}
        <CardBlock>
          <FormLabelGroup feedback={errors} stacked>
            <Input
              autoFocus
              disabled={saving}
              ref="text"
              rows={rows}
              state={errors && 'danger'}
              type="textarea"
              value={text}
              onChange={event => onChange(event, note)}
            />
          </FormLabelGroup>
          {children}
          <ButtonToolbar className="mt-3 mb-0">
            <Button ref="save" color="primary" disabled={saving} onClick={() => onSave(note)}>
              {saving ? 'Saving...' : 'Save'}
            </Button>
            <Button ref="cancel" disabled={saving} onClick={() => onCancel(note)}>Cancel</Button>
          </ButtonToolbar>
        </CardBlock>
      </Card>
    );
  }
}
export default EditableNote;
