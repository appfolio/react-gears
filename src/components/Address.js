import React, { PropTypes } from 'react';
import { FormGroup, Input, Row, Col } from 'reactstrap';

const US_STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID',
                'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
                'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA',
                'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
const COUNTRIES = ['United States', 'Canada', 'Aaland Islands', 'Afghanistan', 'Albania',
                   'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua & Barbuda',
                   'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan',
                   'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
                   'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana',
                   'Bouvet Island', 'Brazil', 'Britain (UK)', 'British Indian Ocean Territory',
                   'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
                   'Cape Verde', 'Caribbean Netherlands', 'Cayman Islands', 'Central African Rep.',
                   'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands',
                   'Colombia', 'Comoros', 'Congo (Dem. Rep.)', 'Congo (Rep.)', 'Cook Islands',
                   'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus',
                   'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
                   'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
                   'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland',
                   'France', 'French Guiana', 'French Polynesia',
                   'French Southern & Antarctic Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany',
                   'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam',
                   'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
                   'Heard Island & McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary',
                   'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man',
                   'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan',
                   'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)', 'Kuwait', 'Kyrgyzstan',
                   'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
                   'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi',
                   'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique',
                   'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova',
                   'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique',
                   'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia',
                   'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island',
                   'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine',
                   'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn',
                   'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia',
                   'Rwanda', 'Samoa (American)', 'Samoa (western)', 'San Marino',
                   'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
                   'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
                   'Somalia', 'South Africa', 'South Georgia & the South Sandwich Islands',
                   'South Sudan', 'Spain', 'Sri Lanka', 'St Barthelemy', 'St Helena',
                   'St Kitts & Nevis', 'St Lucia', 'St Maarten (Dutch part)',
                   'St Martin (French part)', 'St Pierre & Miquelon', 'St Vincent', 'Sudan',
                   'Suriname', 'Svalbard & Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland',
                   'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau',
                   'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
                   'Turks & Caicos Is', 'Tuvalu', 'US Minor Outlying Islands', 'Uganda', 'Ukraine',
                   'United Arab Emirates', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
                   'Venezuela', 'Vietnam', 'Virgin Islands (UK)', 'Virgin Islands (US)',
                   'Wallis & Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

// TODO use Select2, etc for States and Countries
// TODO prop binding and validation

const Address = (props) => (
  <div>
    <FormGroup>
      <Input type="text" placeholder="Address 1" />
    </FormGroup>
    <FormGroup>
      <Input type="text" placeholder="Address 2" />
    </FormGroup>
    <FormGroup>
      <Row>
        <Col sm={6} xs={5} className="pr-0">
          <Input type="text" placeholder="City" />
        </Col>
        <Col sm={2} xs={3}>
          <Input type="select" className="custom-select w-100">
            {US_STATES.map(state => <option value={state}>{state}</option>)}
          </Input>
        </Col>
        <Col sm={4} xs={4} className="pl-0">
          <Input type="text" placeholder="Zip" />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup>
      <Input type="select" className="custom-select w-100">
        {COUNTRIES.map(country => <option value={country}>{country}</option>)}
      </Input>
    </FormGroup>
  </div>
);

const propTypes = {};

Address.propTypes = propTypes;

export default Address;
