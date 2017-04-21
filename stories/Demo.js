import React from 'react';
import {
  Button,
  Card,
  CardBlock,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  CurrencyInput,
  DateMonth,
  FormChoice,
  FormRow,
  Icon,
  Paginator,
  Popover,
  PopoverContent,
  PopoverTitle,
  Row,
  Table,
  Tooltip,
} from '../src';
import { storiesOf } from '@kadira/storybook';

const mainColStyle = {
  marginTop: '-2.5em',
}

const headerStyle = {
  fontSize: '1.2em',
  fontFamily: 'serif',
  marginTop: '2.5em',
  marginBottom: '1em',
};

const demoHeader = (caption) => <div style={headerStyle}>{caption}</div>;

const colorStyle = {
  height: 100,
  padding: 8,
  marginRight: 8,
  marginBottom: 8
};

const colorTextStyle = {
  fontFamily: 'serif',
  marginBottom: '1em',
  fontSize: '1em',
  textTransform: 'capitalize'
}

const colorBlock = (color) => <div style={colorStyle}>{color}</div>;

storiesOf('Style', module)
  .addWithInfo('Demo', () => (
    <Row>
      <Col style={mainColStyle}>
        {demoHeader('COLORS')}
        <div style={{marginBottom: '-1.5em'}}>
          {['primary', 'success', 'info', 'warning', 'danger', 'inverse', 'faded'].map((color) => 
              <div key={color} style={{width: 100, display: 'inline-block', marginBottom: '1.5em'}}>
                <div style={colorTextStyle}>{color}</div>
                <div className={`bg-${color}`} style={colorStyle} />
              </div>
          )}
        </div>

        {demoHeader('HEADINGS')}
        <h1>h1. Heading</h1>
        <h2>h2. Heading</h2>
        <h3>h3. Heading</h3>
        <h4>h4. Heading</h4>
        <h5>h5. Heading</h5>
        <h6>h6. Heading</h6>

        {demoHeader('PANEL / CARD')}
        <Card>
          <CardHeader className='mc-primary'>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardBlock>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBlock>
        </Card>

        {demoHeader('TOOLTIPS')}
        <div id='tooltip-right' style={{width: 1, height: 80}} />
        <Tooltip placement={'right'} isOpen target='tooltip-right'>Tooltip on the side</Tooltip>

        <div id='tooltip-top' style={{width: 160, marginTop: 30}} />
        <Tooltip placement={'top'} isOpen target='tooltip-top'>Tooltip on the top</Tooltip>

      </Col>

      <Col style={mainColStyle}>
        {demoHeader('BUTTONS')}
        <p>
          <Button color="primary">Primary</Button>
          &nbsp;
          <Button>Secondary</Button>
          &nbsp;
          <Button color="danger">Danger</Button>
        </p>

        <p>
          <Button size="sm" color="primary">Primary</Button>
          &nbsp;
          <Button size="sm">Secondary</Button>
          &nbsp;
          <Button size="sm" color="danger">Danger</Button>
        </p>

        {demoHeader('PAGINATION')}

        <Paginator size="sm" currentPage={5} totalItems={256} onClick={() => {}} />

        {demoHeader('FORMS')}

        <form>
          <FormRow label="Label" defaultValue="Text" required />
          <FormRow label="Label" placeholder="Default" />
          <FormRow label="Disabled" disabled />
          <FormRow type={DateMonth} label="Date" />
          <FormRow label="Password" />
          <FormRow label="Select" type="select" hint="Example help text">
            <FormChoice>A New Hope</FormChoice>
            <FormChoice>The Empire Strikes Back</FormChoice>
            <FormChoice>The Force Awakens</FormChoice>
          </FormRow>
          <FormRow label="Label" feedback="Error message" />
          <FormRow type={CurrencyInput} label="Tip" />
        </form>

        {demoHeader('FORMS')}
        <form>
          <FormRow stacked label="Label above" defaultValue="Text" required size="12" />
          <FormRow stacked label="Label above" placeholder="Default" />
          <FormRow stacked label="Disabled above" disabled />
          <FormRow stacked type={DateMonth} label="Date" />
        </form>

        {demoHeader('TABLES')}

        <Table >
          <thead>
            <tr>
              <th>First name</th>
              <th>
                Last name <Icon name="caret-down" />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John</td>
              <td>Wick</td>
            </tr>
            <tr>
              <td>Paulus</td>
              <td>Schoutsen</td>
            </tr>
            <tr>
              <td>Gary</td>
              <td>Thomas</td>
            </tr>
          </tbody>
        </Table>

        {demoHeader('POPOVERS')}

        <div id='popover-top' style={{marginTop: 140, height: 20}} />
        <Popover isOpen={true} target="popover-top" placement="top">
          <PopoverTitle children={'Popover top'} />
          <PopoverContent children={'Eat. Sleep. Code. Repeat. That is the theme of HackDay March 2017.'} />
        </Popover>

        <div id='popover-right' style={{width: 10, marginTop: 40, height: 20}} />
        <Popover isOpen={true} target="popover-right" placement="right">
          <PopoverTitle children={'Popover right'} />
          <PopoverContent children={'Eat. Sleep. Code. Repeat. That is the theme of HackDay March 2017.'} />
        </Popover>
      </Col>
    </Row>
  ));
