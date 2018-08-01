import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  CurrencyInput,
  DateInput,
  FormChoice,
  FormRow,
  Icon,
  Paginator,
  Popover,
  PopoverBody,
  PopoverTitle,
  Row,
  Table,
  UncontrolledTooltip
} from '../src';

const Tooltip = UncontrolledTooltip;

const demoHeader = caption => <h2 className="text-muted text-uppercase mt-5 mb-4">{caption}</h2>;

storiesOf('react-gears', module)
  .add('Introduction', () => (
    <section>
      <p>
        react-gears is a JavaScript and React-friendly implementation of the
        Appfolio <a href="https://qa.qa.appfolio.com/gears" target="new">Gears</a> UI components,
        and (currently) includes some potentially generic <a href="https://qa.qa.appfolio.com/saffron">Saffron</a> UI components from APM.
      </p>

      <h3>Goals</h3>
      <ol>
        <li>
          <b>Portable</b> - Components should be self-contained and not require any server-generated
          markup, Ajax, or a running Appfolio product application in order to function.
        </li>
        <li>
          <b>Modern</b> - Components should use modern, off the shelf solutions and avoid legacy approaches such as wrapping jQuery components.
        </li>
        <li>
          <b>Mobile Friendly</b> - Components should be responsive and work on mobile and desktop computers
        </li>
        <li>
          <b>Themeable</b> - Colors, fonts, borders, sizing are separate from components so that multiple apps and products can use with their look and feel.
        </li>
        <li>
          <b>Flux-agnostic</b> - Users should be able to use with any Flux implementation they choose.
        </li>
      </ol>
    </section>
  ))
  .add('Help & Contributing', () => (
    <section>
      <p>
        For questions and getting up-to-date release notifications, please join the Appfolio <b>#gears</b> Slack Channel
      </p>
      <p>
        For bugs, please file a <a href="https://github.com/appfolio/react-gears/issues">GitHub issue</a>
      </p>
      <p>
        For the component roadmap, status, and ideas, please the <a href="https://github.com/appfolio/react-gears/projects/1">GitHub project board</a>
      </p>
    </section>
  ))
  .addWithInfo('Style overview', () => (
    <Row>
      <Col>
        {demoHeader('COLORS')}
        <div>
          {['primary', 'success', 'info', 'warning', 'danger', 'inverse', 'dark', 'light'].map(color => (
            <div key={color} style={{ width: 100 }} className="d-inline-block mb-1">
              <b>{`bg-${color}`}</b>
              <div className={`bg-${color}`} style={{ height: 100 }} />
            </div>
          ))}
        </div>

        <div>
          {['primary', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'white'].map(color => (
            <div key={color} className="mb-1">
              <h3 className={`text-${color}`}>{`text-${color}`}</h3>
            </div>
          ))}
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
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        {demoHeader('TOOLTIPS')}
        <div className="d-flex justify-content-between">
          <span id='tooltip-top'>Top</span>
          <span id='tooltip-bottom'>Bottom</span>
          <span id='tooltip-left'>Left</span>
          <span id='tooltip-right'>Right</span>
          <Tooltip placement="top" target='tooltip-top'>Tooltip on the top</Tooltip>
          <Tooltip placement="bottom" target='tooltip-bottom'>Tooltip on the Bottom</Tooltip>
          <Tooltip placement="left" target='tooltip-left'>Tooltip on the Left</Tooltip>
          <Tooltip placement="right" target='tooltip-right'>Tooltip on the side</Tooltip>
        </div>

      </Col>

      <Col>
        {demoHeader('BUTTONS')}
        <p>
          {['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'link'].map(color => (
            <Button color={color} className="mr-1 text-capitalize">{color}</Button>
          ))}
        </p>

        <p>
          {['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'link'].map(color => (
            <Button color={color} size="sm" className="mr-1 text-capitalize">{color}</Button>
          ))}
        </p>

        {demoHeader('PAGINATION')}

        <Paginator size="sm" currentPage={5} totalItems={256} onClick={() => {}} />

        {demoHeader('FORMS')}

        <form>
          <FormRow label="Label" defaultValue="Text" required />
          <FormRow label="Label" placeholder="Default" />
          <FormRow label="Disabled" disabled />
          <FormRow type={DateInput} label="Date" />
          <FormRow type="password" label="Password" />
          <FormRow
            className="custom-select"
            label="Select"
            type="select"
            hint="Example help text"
          >
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
          <FormRow stacked type={DateInput} label="Date" />
        </form>

        {demoHeader('TABLES')}

        <Table>
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
      </Col>
    </Row>
  ));

