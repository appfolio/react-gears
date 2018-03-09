import Badge from '../src/components/Badge';
import Activity from '../src/components/Activity';
import ActivityLog from '../src/components/ActivityLog';
import AddressInput from '../src/components/AddressInput';
import Alert from '../src/components/Alert';
import BlockPanel from '../src/components/BlockPanel';
import Breadcrumb from '../src/components/Breadcrumb';
import Button from '../src/components/Button';
import Callout from '../src/components/Callout';
import CreditCardNumber from '../src/components/CreditCardNumber';
import * as React from 'react';

const ActivityExample = () => {
  <Activity date={new Date()} action="Created" by="Services">
    Hi
  </Activity>
  }

const ActivityLogExample = () => {
  <ActivityLog flush={false}>
    <Activity date={new Date()} action="Created" by="Services" />
    <Activity date={new Date()} action="Edited" />
    <Activity date={new Date()} action="Edited" by="Gary">
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
  <Button color="primary" disabled={false} outline={false}>
    Click Me
  </Button>
}

const CalloutExample = () => {
  <Callout
    color={'primary'}
    background={'faded'}
    placement={'top'}
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
