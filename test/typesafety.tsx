import Activity from '../src/components/Activity';
import ActivityLog from '../src/components/ActivityLog';
import AddressInput from '../src/components/AddressInput';
import Alert from '../src/components/Alert';
import Badge from '../src/components/Badge';
import BlockPanel from '../src/components/BlockPanel';
import Breadcrumb from '../src/components/Breadcrumb';
import Button from '../src/components/Button';
import Calendar from '../src/components/Calendar';
import Callout from '../src/components/Callout';
import Card from '../src/components/Card';
import CardBody from '../src/components/CardBody';
import CheckboxBooleanInput from '../src/components/CheckboxBooleanInput';
import Close from '../src/components/Close';
import CountryInput from '../src/components/CountryInput';
import CreditCardNumber from '../src/components/CreditCardNumber';
import CurrencyInput from '../src/components/CurrencyInput';
import CustomInput from '../src/components/CustomInput';
import Datapair from '../src/components/Datapair';
import DateInput from '../src/components/DateInput';
import DeletedNote from '../src/components/DeletedNote';
import DropdownItem from '../src/components/DropdownItem';
import EditableNote from '../src/components/EditableNote';
import ExpandableSection from '../src/components/ExpandableSection';
import FeatureBanner from '../src/components/FeatureBanner';
import FileInput from '../src/components/FileInput';
import FilterList from '../src/components/FilterList';
import FormChoice from '../src/components/FormChoice';
import FormRow from '../src/components/FormRow';
import HasManyFields from '../src/components/HasManyFields';
import HasManyFieldsAdd from '../src/components/HasManyFieldsAdd';
import HasManyFieldsRow from '../src/components/HasManyFieldsRow';
import HelpBubble from '../src/components/HelpBubble';
import Icon from '../src/components/Icon';
import InfoBox from '../src/components/InfoBox';
import LabelBadge from '../src/components/LabelBadge';
import MonthInput from '../src/components/MonthInput';
import MonthCalendar from '../src/components/MonthCalendar';
import SortableTable, { SortableColumn } from '../src/components/SortableTable';
import Spinner from '../src/components/Spinner';
import Steps from '../src/components/Steps';
import SummaryBox from '../src/components/SummaryBox';
import SummaryBoxItem from '../src/components/SummaryBoxItem';
import Table from '../src/components/Table';
import Waiting from '../src/components/Waiting';
import * as React from 'react';

const ActivityExample = () => {
  <Activity
    date={new Date()}
    action="Created"
    by="Services"
    href="http://google.com"
  >
    Hi
  </Activity>;
};

const ActivityLogExample = () => {
  <ActivityLog flush={false}>
    <Activity date={new Date()} action="Created" by="Services" />
    <Activity date={new Date()} action="Edited" />
    <Activity
      date={new Date()}
      action="Edited"
      by="Gary"
      href="http://www.google.com"
    >
      He messed this up
    </Activity>
    <Activity date={new Date()} />
    <Activity date={new Date()}>Nothing to see here, move on</Activity>
  </ActivityLog>;
};

const AddressInputExample = () => {
  <AddressInput
    defaultValue={{
      address1: '123 No Way',
      address2: 'Suite 16',
      city: 'Smallsville',
      state: 'AL',
      postal: '12345-1234',
      countryCode: 'US'
    }}
    onBlur={() => {}}
    onChange={() => {}}
    disabled={false}
    error={{ address1: 'some error' }}
    showCountry={false}
    showLabels={false}
    labels={{ address1: 'some albel' }}
  />;
};

const AlertExample = () => {
  <div>
    <Alert icon>You can also add an icon!</Alert>
    <Alert icon color="success">
      You can specify an alert color. This one has <code>color="success"</code>
    </Alert>
    <Alert icon color="danger">
      Humblebrag prism twee, gochujang seitan whatever asymmetrical ramps enamel
      pin austin salvia swag helvetica. Chartreuse food truck tofu raclette, 3
      wolf moon poke chia paleo skateboard. Pickled tote bag echo park raclette.
      Irony fashion axe sartorial, cornhole jean shorts vaporware flannel salvia
      glossier beard 3 wolf moon. Literally semiotics hammock irony cred,
      bicycle rights lomo selvage tousled vegan 8-bit. Four loko cardigan
      live-edge truffaut pour-over, helvetica chia brooklyn swag pug scenester
      kogi pitchfork leggings yuccie. Ethical put a bird on it portland vape
      YOLO.
    </Alert>
    <Alert icon color="info">
      <strong>Heads up!</strong> This alert needs your attention, but it's not
      super important.
    </Alert>
  </div>;
};

const BlockPanelExample = () => {
  <BlockPanel
    title={'Hello'}
    onEdit={() => alert('Edit clicked!')}
    expandable={false}
    hideOnToggle={false}
    open={false}
  >
    Now you see me.
  </BlockPanel>;
};

const ButtonExample = () => {
  <Button color="fds">Click Me</Button>;
};

const CalendarExample = () => {
  <Calendar date={new Date(2017, 7, 14)} dateVisible={date => true} />;
};

const CalloutExample = () => {
  <Callout
    color={'primary'}
    background={'light'}
    placement={'top'}
    title={'todo'}
  >
    <h3>Hello World</h3>
    Hello
  </Callout>;
};

const CheckboxBooleanInputExample = () => {
  <CheckboxBooleanInput checkboxLabel={'Cool Label'} value={true} disabled />;
};

const CreditCardNumberExample = () => {
  <CreditCardNumber types={['visa', 'master-card']} />;
};

const CloseExample = () => {
  <Close title={'My Close'} />;
};

const CurrencyInputExample = () => {
  <CurrencyInput allowDecimal={false} />;
};

const CustomInputExample = () => {
  <CustomInput
    type="checkbox"
    id="exampleCustomCheckbox3"
    label="But not this disabled one"
    disabled
  />;
};

const CountryInputExample = () => {
  <CountryInput
    defaultValue="US"
    id="yo"
    className="boogie"
    placeholder="Pick something"
    disabled
  />;
};

const DatapairExample = () => {
  <Card className="mt-1">
    <CardBody>
      <Datapair label="Label">
        Custom markup <Button color="primary">can go here</Button>
      </Datapair>
      <Datapair
        label="This is a really long label that probably shouldn't be this long"
        value="Stuff"
      />
      <Datapair label="test" value={<div />} />
    </CardBody>
  </Card>;
};

const DateInputExample = () => {
  <DateInput
    id="calendar"
    dateFormat="someFOrmat"
    showOnFocus={true}
    disabled={false}
    onBlur={() => {}}
    onChange={() => {}}
    onClose={() => {}}
  />;
};

const DeletedNoteExample = () => {
  const note = { text: 'Hello World', date: new Date(2018, 5, 3) };
  <DeletedNote
    onUndelete={n => {
      null;
    }}
    note={note}
  />;
};

const DropdownItemExample = () => {
  <DropdownItem key={'hi'} active={true} />;
};

const EditableNoteExample = () => {
  const note = { text: 'Sup' };
  function blankFunc() {
    return undefined;
  }
  <EditableNote
    note={note}
    onCancel={blankFunc}
    onChange={blankFunc}
    onSave={blankFunc}
  />;
};

const ExpandableSectionExample = () => {
  <ExpandableSection title="Click to expand me">
    <h2>BOO!</h2>
  </ExpandableSection>;
};

const FeatureBannerExample = () => {
  <FeatureBanner alertText={'New'} title={'Hi'} subtitle={'Some title'}>
    <div>
      <Button
        className="font-weight-bold text-uppercase bg-muted text-primary"
        outline
      >
        Test
      </Button>
    </div>
  </FeatureBanner>;
};

const FileInputExample = () => {
  <FileInput
    name="aFileInput"
    onChange={() => {
      undefined;
    }}
  />;
};

const FilterListExample = () => {
  const filters = [
    {
      label: 'User',
      value: 'Hello World',
      removable: false
    },
    {
      label: 'Property',
      value: '1234 State Street'
    },
    {
      label: 'People',
      value: 'Lalalala'
    }
  ];

  <div>
    <FilterList
      filters={filters}
      maxWidth={14}
      onRemove={filter => {
        console.log('filter');
      }}
    />
  </div>;
};

const FormChoiceExample = () => {
  <FormChoice type="select" value="foobar">
    Test
  </FormChoice>;
};

const FormRowExample = () => {
  return (
    <FormRow
      label={'First name'}
      feedback={'Feedback'}
      color={'danger'}
      hint={'some hint'}
      required={false}
      inline={false}
      stacked={false}
      validFeedback="hay"
    />
  );
};

const hasManyItems = [
  {
    address1: '50 Castilian Dr.',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US'
  }
];
const HasManyFieldsExample = () => {
  <HasManyFields
    defaultValue={hasManyItems}
    template={AddressInput}
    blank={{ countryCode: 'US' }}
    label="Add an Address"
    disabled={false}
    onAdd={() => {}}
    onRemove={() => {}}
    onUpdate={() => {}}
    onChange={() => {}}
    minimumRows={5}
    maximumRows={10}
  />;
};

const HasManyFieldsAddExample = () => {
  <HasManyFieldsAdd outline={true} className="foobar">
    Custom Label!
  </HasManyFieldsAdd>;
};

const HasManyFieldsRowExample = () => {
  <HasManyFieldsRow
    onDelete={() => {
      undefined;
    }}
    disabled
  >
    Stuff
  </HasManyFieldsRow>;
};

const HasManyFieldsRowDisabledExample = () => {
  <HasManyFieldsRow
    onDelete={() => {
      undefined;
    }}
    disabled
    disabledReason={'test'}
    disabledReasonPlacement={'top'}
  >
    Stuff
  </HasManyFieldsRow>;
};

const HelpBubbleExample = () => {
  <p>
    I can be placed in context to provide some contextual help!
    <HelpBubble title="Test" className="ml-1">
      Some text
    </HelpBubble>
  </p>;
};

const IconExample = () => {
  <Icon name="calendar" size="lg" />;
};

const InfoBoxExample = () => {
  <InfoBox color="success" title="Some title" icon="check" vertical={false}>
    yo
  </InfoBox>;
};

const LabelBadgeExample = () => {
  <LabelBadge
    label="one"
    value="two"
    removable={true}
    maxWidth={200}
    onRemove={() => {}}
  />;
};

const MonthInputExample = () => {
  <MonthInput
    dateFormat="MMM YYYY"
    monthFormat="MMM"
    yearFormat="YYY"
    showOnFocus={true}
    disabled={false}
    onBlur={() => {}}
    onChange={() => {}}
  />;
};

const MonthCalendarExample = () => {
  <MonthCalendar date={new Date(2017, 4, 20)} dateVisible={d => true} />;
};

const SortableTableExample = () => {
  type Row = { name: string };
  const columns: SortableColumn<Row>[] = [
    {
      key: 'name',
      header: 'Name',
      align: 'left',
      active: true,
      ascending: false,
      cell: (row: Row) => row.name,
      onSort: (ascending: boolean) => {},
      width: '50%'
    },
    {
      key: 'enabled',
      header: 'Enabled',
      align: 'center',
      active: false,
      cell: (row: Row) => 'Yes',
      width: '10%',
      footer: 'All systems are go',
      ascending: false
    }
  ];
  const rows: Row[] = [
    {
      name: 'Smith'
    }
  ];

  class NameTable extends SortableTable<Row> {}

  <NameTable dark bordered striped columns={columns} rows={rows} />;
};

const SpinnerExample = () => {
  <Spinner />;
};

const StepExample = () => {
  <Steps steps={['first', 'second', 'third']} step={2} collapse={false} />;
};

const SummaryBoxExample = () => {
  const items = [
    { value: 'Alpha', label: 'Team' },
    { value: 'Bravo', label: 'Johnny' },
    { value: 'Charlie', label: 'Brown' }
  ];
  <SummaryBox id="fred" items={items}>
    <span>Hi</span>
  </SummaryBox>;
};

const SummaryBoxItemExample = () => {
  <SummaryBoxItem id="mertz" />;
};

const TableExample = () => {
  <Table size="sm" borderless striped dark hover>
    <tr>
      <td>One Cell</td>
    </tr>
  </Table>;
};

const TableItem = () => {
  <Table bordered>
    <tr>
      <td>hi</td>
    </tr>
  </Table>;
};

const WaitingItem = () => {
  <Waiting isOpen backdrop className="something" />;
};
