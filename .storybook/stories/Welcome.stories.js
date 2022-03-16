import React from 'react';
import Button from '../../src/components/Button/Button';
import ButtonToolbar from '../../src/components/Button/ButtonToolbar';
import Card from '../../src/components/Card/Card';
import CardBody from '../../src/components/Card/CardBody';
import CardHeader from '../../src/components/Card/CardHeader';
import CardText from '../../src/components/Card/CardText';
import CardTitle from '../../src/components/Card/CardTitle';
import Col from '../../src/components/Layout/Col';
import CurrencyInput from '../../src/components/Input/CurrencyInput';
import DateInput from '../../src/components/Input/DateInput';
import FormChoice from '../../src/components/Form/FormChoice';
import FormRow from '../../src/components/Form/FormRow';
import Icon from '../../src/components/Icon/Icon';
import Paginator from '../../src/components/Pagination/Paginator';
import Row from '../../src/components/Layout/Row';
import Table from '../../src/components/Table/Table';
import UncontrolledTooltip from '../../src/components/Tooltip/UncontrolledTooltip';
import { buttonColors, bgColors, textColors } from '../../src/dev_util/colors';

const Tooltip = UncontrolledTooltip;

const demoHeader = (caption) => <h2 className="text-muted text-uppercase mt-5 mb-4">{caption}</h2>;

export default {
  title: 'react-gears',
};

export const Introduction = () => (
  <section>
    <p>
      react-gears is a React implementation of Appfolio UI components, using Bootstrap for theming.
    </p>

    <h3>Goals</h3>
    <ol>
      <li>
        <b>Portable</b> - Components should be self-contained and not require any server-generated
        markup, Ajax, or a running Appfolio product application in order to function.
      </li>
      <li>
        <b>Modern</b> - Components should use modern, off the shelf solutions and avoid legacy
        approaches such as wrapping jQuery components.
      </li>
      <li>
        <b>Mobile Friendly</b> - Components should be responsive and work on mobile and desktop
        computers
      </li>
      <li>
        <b>Themeable</b> - Colors, fonts, borders, sizing are separate from components so that
        multiple apps and products can use with their look and feel.
      </li>
      <li>
        <b>Flux-agnostic</b> - Users should be able to use with any Flux implementation they choose.
      </li>
    </ol>
  </section>
);

export const HelpAndContributing = () => (
  <section>
    <p>
      For questions and getting up-to-date release notifications, please join the Appfolio{' '}
      <b>#gears</b> Slack Channel
    </p>
    <p>
      For bugs, please file a{' '}
      <a href="https://github.com/appfolio/react-gears/issues">GitHub issue</a>
    </p>
    <p>
      For the component roadmap, status, and ideas, please the{' '}
      <a href="https://github.com/appfolio/react-gears/projects/1">GitHub project board</a>
    </p>
  </section>
);

export const StyleOverview = () => (
  <div>
    <Row>
      <Col>
        {demoHeader('BUTTONS')}
        <ButtonToolbar className="mb-3">
          {buttonColors.map((color) => (
            <Button color={color} className="me-1 text-capitalize">
              {color}
            </Button>
          ))}
        </ButtonToolbar>
        <ButtonToolbar className="mb-3">
          {buttonColors.map((color) => (
            <Button color={color} outline className="me-1 text-capitalize">
              {color}
            </Button>
          ))}
        </ButtonToolbar>
      </Col>
    </Row>
    <Row>
      <Col>
        {demoHeader('COLORS')}
        <div>
          {bgColors.map((color) => (
            <div key={color} style={{ width: 100 }} className="d-inline-block mb-1">
              <b>{`bg-${color}`}</b>
              <div className={`bg-${color}`} style={{ height: 33 }} />
            </div>
          ))}
        </div>

        <div>
          {textColors.map((color) => (
            <div key={color} className={`mb-1 ${color.indexOf('white') === 0 ? 'bg-dark' : ''}`}>
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
          <CardHeader>
            <CardTitle>Card title</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>

        {demoHeader('TOOLTIPS')}
        <div className="d-flex justify-content-between">
          <span id="tooltip-top">Top</span>
          <span id="tooltip-bottom">Bottom</span>
          <span id="tooltip-left">Left</span>
          <span id="tooltip-end">Right</span>
          <Tooltip placement="top" target="tooltip-top">
            Tooltip on the top
          </Tooltip>
          <Tooltip placement="bottom" target="tooltip-bottom">
            Tooltip on the Bottom
          </Tooltip>
          <Tooltip placement="left" target="tooltip-left">
            Tooltip on the Left
          </Tooltip>
          <Tooltip placement="right" target="tooltip-end">
            Tooltip on the side
          </Tooltip>
        </div>
      </Col>

      <Col>
        {demoHeader('FORMS')}

        <form>
          <FormRow label="Label" defaultValue="Text" required />
          <FormRow label="Label" placeholder="Default" />
          <FormRow label="Disabled" disabled />
          <FormRow type={DateInput} label="Date" />
          <FormRow type="password" label="Password" />
          <FormRow className="custom-select" label="Select" type="select" hint="Example help text">
            <FormChoice>A New Hope</FormChoice>
            <FormChoice>The Empire Strikes Back</FormChoice>
            <FormChoice>The Force Awakens</FormChoice>
          </FormRow>
          <FormRow label="Label" feedback="Error message" />
          <FormRow type={CurrencyInput} label="Tip" />
          <FormRow stacked label="Stacked" defaultValue="Text" required size="12" />
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

        {demoHeader('PAGINATION')}
        <Paginator size="sm" currentPage={5} totalItems={256} onClick={() => {}} />
      </Col>
    </Row>
  </div>
);
