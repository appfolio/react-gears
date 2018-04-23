import Badge from '../src/components/Badge';
import Activity from '../src/components/Activity';
import ActivityLog from '../src/components/ActivityLog';
import AddressInput from '../src/components/AddressInput';
import Alert from '../src/components/Alert';
import BlockPanel from '../src/components/BlockPanel';
import Breadcrumb from '../src/components/Breadcrumb';
import Button from '../src/components/Button';
import Calendar from '../src/components/Calendar';
import Callout from '../src/components/Callout';
import Card from '../src/components/Card';
import CardBlock from '../src/components/CardBlock';
import Close from '../src/components/Close';
import CurrencyInput from '../src/components/CurrencyInput';
import Datapair from '../src/components/Datapair';
import CreditCardNumber from '../src/components/CreditCardNumber';
import DateInput from '../src/components/DateInput';
import ExpandableSection from '../src/components/ExpandableSection';
import FeatureBanner from '../src/components/FeatureBanner';
import FilterList from '../src/components/FilterList';
import FormRow from '../src/components/FormRow';
import HasManyFields from '../src/components/HasManyFields';
import HelpBubble from '../src/components/HelpBubble';
import Icon from '../src/components/Icon';
import InfoBox from '../src/components/InfoBox';
import LabelBadge from '../src/components/LabelBadge';
import MonthInput from '../src/components/MonthInput';
import * as React from 'react';

const ActivityExample = () => {
  <Activity date={new Date()} action="Created" by="Services" href="http://google.com">
    Hi
  </Activity>
  }

const ActivityLogExample = () => {
  <ActivityLog flush={false}>
    <Activity date={new Date()} action="Created" by="Services" />
    <Activity date={new Date()} action="Edited" />
    <Activity date={new Date()} action="Edited" by="Gary" href="http://www.google.com">
      He messed this up
    </Activity>
    <Activity date={new Date()} />
    <Activity date={new Date()}>
      Nothing to see here, move on
    </Activity>
  </ActivityLog>
}

const AddressInputExample = () => {
  (
    <AddressInput
      defaultValue={{
        address1: '123 No Way',
        address2: 'Suite 16',
        city: 'Smallsville',
        state: 'AL',
        postal: '12345-1234',
        countryCode: 'US'
      }}
      onBlur={() => { }}
      onChange={() => { }}
      disabled={false}
      error={{ address1: 'some error' }}
      showCountry={false}
      showLabels={false}
      labels={{ address1: 'some albel' }}
    />
  )
}

const AlertExample = () => {
  <div>
  <Alert icon>You can also add an icon!</Alert>
    <Alert icon color="success">
      You can specify an alert color. This one has <code>color="success"</code>
    </Alert>
    <Alert icon color="danger">
      Humblebrag prism twee, gochujang seitan whatever asymmetrical ramps enamel pin austin
      salvia swag helvetica. Chartreuse food truck tofu raclette, 3 wolf moon poke chia paleo
      skateboard. Pickled tote bag echo park raclette. Irony fashion axe sartorial, cornhole
      jean shorts vaporware flannel salvia glossier beard 3 wolf moon. Literally semiotics
      hammock irony cred, bicycle rights lomo selvage tousled vegan 8-bit. Four loko cardigan
      live-edge truffaut pour-over, helvetica chia brooklyn swag pug scenester kogi pitchfork
      leggings yuccie. Ethical put a bird on it portland vape YOLO.
      </Alert>
    <Alert icon color="info">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </Alert>
  </div>
}

const BlockPanelExample = () => {
  <BlockPanel
    title={'Hello'}
    onEdit={() => alert('Edit clicked!')}
    expandable={false}
    hideOnToggle={false}
    open={false}
  >
    Now you see me.
  </BlockPanel>
}

const ButtonExample = () => {
  <Button
    color="fds"
  >
    Click Me
  </Button>
}

const CalloutExample = () => {
  <Callout
    color={'primary'}
    background={'faded'}
    placement={'top'}
    title={'todo'}
  >
    <h3>Hello World</h3>
    Hello
  </Callout>
}

const CreditCardNumberExample = () => {
  <CreditCardNumber
    types={['visa', 'master-card']}
  />
}

const CloseExample = () => {
  <Close title={'My Close'}/>
}

const CurrencyInputExample = () => {
  <CurrencyInput allowDecimal={false}/>
}

const DatapairExample = () => {
  <Card className="mt-1">
    <CardBlock>
      <Datapair label="Label">
        Custom markup <Button color="primary">can go here</Button>
      </Datapair>
      <Datapair
        label="This is a really long label that probably shouldn't be this long"
        value="Stuff"
      />
    </CardBlock>
  </Card>
}

const DateInputExample = () => {
  <DateInput
    id="calendar"
    dateFormat="someFOrmat"
    showOnFocus={true}
    disabled={false}
    onBlur={() =>{}}
    onChange={() => { }}
  />
}

const ExpandableSectionExample = () => {
  <ExpandableSection title="Click to expand me">
    <h2>BOO!</h2>
  </ExpandableSection>
}

const FeatureBannerExample = () => {
  <FeatureBanner
    alertText={'New'}
    title={'Hi'}
    subtitle={'Some title'}
  >
    <div>
      <Button className="font-weight-bold text-uppercase bg-muted text-primary" outline>
        Test
    </Button>
    </div>
  </FeatureBanner>
}


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
const FilterListExample = () => {
  <div>
    <FilterList
      filters={filters}
      maxWidth={14}
      onRemove={(filter) => { console.log('filter'); } }
    />
  </div>
}

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
    />
  );
}

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
    onAdd={() => { }}
    onRemove={() => { }}
    onUpdate={() => { }}
    onChange={() => { }}
  />;
  
}

const HelpBubbleExample = () => {
  <p>
    I can be placed in context to provide some contextual help!
    <HelpBubble title='Test' className="ml-1">
      Some text
    </HelpBubble>
  </p>
}

const IconExample = () => {
  <Icon name="calendar" size="lg" />
}

const InfoBoxExample = () => {
  <InfoBox
    color='success'
    title='Some title'
    icon='check'
    vertical={false}
  >
   yo
  </InfoBox>
}

const LabelBadgeExample = () => {
  <LabelBadge
    label='one'
    value='two'
    removable={true}
    maxWidth={200}
    onRemove={() => {}}
  />
}

const MonthInputExample = () => {
  <MonthInput
    dateFormat='MMM YYYY'
    monthFormat='MMM'
    yearFormat='YYY'
    showOnFocus={true}
    disabled={false}
    onBlur={() => {}}
    onChange= {() => { }}
  />
}