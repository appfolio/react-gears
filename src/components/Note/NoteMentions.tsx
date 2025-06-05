import React, { FC } from 'react';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardText from '../Card/CardText';
import DeletedNote from './DeletedNote';
import EditableNoteMentions, { EditableNoteMentionsDefaultProps } from './EditableNoteMentions';
import { Note as NoteType } from './Note.types';
import NoteHeader from './NoteHeader';

type MentionableUser = {
  key: string;
  value: string;
  email: string;
};

type NoteMentionsProps = {
  children?: React.ReactNode;
  className?: string;
  dateFormat?: string;
  showTimezone?: boolean;
  mentionableUsers: MentionableUser[] | undefined;
  note: NoteType;
  onCancel?: (note: NoteType) => void;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>, note: NoteType) => void;
  onDelete?: (note: Omit<NoteType, 'text'>) => void;
  onEdit?: (note: Omit<NoteType, 'text'>) => void;
  onSave?: (note: NoteType) => void;
  onUndelete?: (note: NoteType) => void;
  rows?: number;
  saving?: boolean;
  saveLabel?: React.ReactNode;
  savingLabel?: React.ReactNode;
  headerColor?: string;
};

const defaultProps = {
  className: 'mb-3',
  dateFormat: 'ddd, MMMM D, YYYY "at" h:mm A',
  mentionableUsers: [],
  showTimezone: true,
  rows: EditableNoteMentionsDefaultProps.rows,
  saving: EditableNoteMentionsDefaultProps.saving,
  saveLabel: EditableNoteMentionsDefaultProps.saveLabel,
  savingLabel: EditableNoteMentionsDefaultProps.savingLabel,
};

const NoteMentions: FC<NoteMentionsProps> = ({
  children,
  className = defaultProps.className,
  dateFormat = defaultProps.dateFormat,
  mentionableUsers = defaultProps.mentionableUsers,
  showTimezone = defaultProps.showTimezone,
  rows = defaultProps.rows,
  saving = defaultProps.saving,
  saveLabel = defaultProps.saveLabel,
  savingLabel = defaultProps.savingLabel,
  note,
  onCancel,
  onChange,
  onDelete,
  onEdit,
  onSave,
  onUndelete,
  headerColor = 'info',
}) => {
  const { deleted, editing, text } = note;

  const mentionStrings = new Set(mentionableUsers.map((user) => `@${user.value}`));

  const mentionStyles = () => (
    <style jsx global>
      {`
        .note__mention-info {
          color: #006eb7;
          background: #f5f6f8;
          border-radius: 4px;
        }
      `}
    </style>
  );

  if (deleted) {
    return <DeletedNote className={className} note={note} onUndelete={onUndelete} />;
  }
  if (editing && onCancel && onChange && onSave) {
    return (
      <EditableNoteMentions
        mentionableUsers={mentionableUsers}
        className={className}
        dateFormat={dateFormat}
        showTimezone={showTimezone}
        note={note}
        onCancel={onCancel}
        onChange={onChange}
        onSave={onSave}
        rows={rows}
        saving={saving}
        saveLabel={saveLabel}
        savingLabel={savingLabel}
      />
    );
  }
  return (
    <Card className={className}>
      <NoteHeader
        note={note}
        dateFormat={dateFormat}
        showTimezone={showTimezone}
        onDelete={onDelete}
        onEdit={onEdit}
        color={headerColor}
      />
      <CardBody>
        <CardText style={{ whiteSpace: 'pre-wrap' }}>
          {text?.split(/(\s+)/).map((word) =>
            mentionStrings.has(word) ? (
              <span className="note__mention-info">
                {word}
                {mentionStyles()}
              </span>
            ) : (
              word
            )
          )}
        </CardText>
        {children}
      </CardBody>
    </Card>
  );
};

NoteMentions.displayName = 'Note';

NoteMentions.defaultProps = defaultProps;

export default NoteMentions;
