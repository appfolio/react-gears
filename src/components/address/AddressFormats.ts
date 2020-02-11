const defaultFormat = {
  labels: {
    address1: 'Address',
    address2: 'Address 2',
    city: 'City',
    countryCode: 'Country',
    postal: 'Postal code',
    state: 'Region'
  },
  fields: [['address1'], ['address2'], ['city'], ['countryCode', 'postal']]
};

export const formats: { [key: string]: any } = {
  US: {
    name: 'United States',
    labels: {
      postal: 'ZIP',
      state: 'State'
    },
    states: [
      { name: 'Alaska', code: 'AK' },
      { name: 'Alabama', code: 'AL' },
      { name: 'Arizona', code: 'AZ' },
      { name: 'Arkansas', code: 'AR' },
      { name: 'California', code: 'CA' },
      { name: 'Colorado', code: 'CO' },
      { name: 'Connecticut', code: 'CT' },
      { name: 'Delaware', code: 'DE' },
      { name: 'Washington DC', code: 'DC' },
      { name: 'Florida', code: 'FL' },
      { name: 'Georgia', code: 'GA' },
      { name: 'Hawaii', code: 'HI' },
      { name: 'Idaho', code: 'ID' },
      { name: 'Illinois', code: 'IL' },
      { name: 'Indiana', code: 'IN' },
      { name: 'Iowa', code: 'IA' },
      { name: 'Kansas', code: 'KS' },
      { name: 'Kentucky', code: 'KY' },
      { name: 'Louisiana', code: 'LA' },
      { name: 'Maine', code: 'ME' },
      { name: 'Maryland', code: 'MD' },
      { name: 'Massachusetts', code: 'MA' },
      { name: 'Michigan', code: 'MI' },
      { name: 'Minnesota', code: 'MN' },
      { name: 'Mississippi', code: 'MS' },
      { name: 'Missouri', code: 'MO' },
      { name: 'Montana', code: 'MT' },
      { name: 'Nebraska', code: 'NE' },
      { name: 'Nevada', code: 'NV' },
      { name: 'New Hampshire', code: 'NH' },
      { name: 'New Jersey', code: 'NJ' },
      { name: 'New Mexico', code: 'NM' },
      { name: 'New York', code: 'NY' },
      { name: 'North Carolina', code: 'NC' },
      { name: 'North Dakota', code: 'ND' },
      { name: 'Ohio', code: 'OH' },
      { name: 'Oklahoma', code: 'OK' },
      { name: 'Oregon', code: 'OR' },
      { name: 'Pennsylvania', code: 'PA' },
      { name: 'Rhode Island', code: 'RI' },
      { name: 'South Carolina', code: 'SC' },
      { name: 'South Dakota', code: 'SD' },
      { name: 'Tennessee', code: 'TN' },
      { name: 'Texas', code: 'TX' },
      { name: 'Utah', code: 'UT' },
      { name: 'Vermont', code: 'VT' },
      { name: 'Virginia', code: 'VA' },
      { name: 'Washington', code: 'WA' },
      { name: 'West Virginia', code: 'WV' },
      { name: 'Wisconsin', code: 'WI' },
      { name: 'Wyoming', code: 'WY' },
      { name: 'Armed Forces Americas', code: 'AA' },
      { name: 'Armed Forces Europe', code: 'AE' },
      { name: 'Armed Forces Pacific', code: 'AP' },
      { name: 'American Samoa', code: 'AS' },
      { name: 'Micronesia', code: 'FM' },
      { name: 'Guam', code: 'GU' },
      { name: 'Marshall Islands', code: 'MH' },
      { name: 'Northern Mariana Islands', code: 'MP' },
      { name: 'Puerto Rico', code: 'PR' },
      { name: 'Virgin Islands', code: 'VI' }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  CA: {
    name: 'Canada',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Alberta',
        code: 'AB'
      },
      {
        name: 'British Columbia',
        code: 'BC'
      },
      {
        name: 'Manitoba',
        code: 'MB'
      },
      {
        name: 'New Brunswick',
        code: 'NB'
      },
      {
        name: 'Newfoundland and Labrador',
        code: 'NL'
      },
      {
        name: 'Northwest Territories',
        code: 'NT'
      },
      {
        name: 'Nova Scotia',
        code: 'NS'
      },
      {
        name: 'Nunavut',
        code: 'NU'
      },
      {
        name: 'Ontario',
        code: 'ON'
      },
      {
        name: 'Prince Edward Island',
        code: 'PE'
      },
      {
        name: 'Quebec',
        code: 'QC'
      },
      {
        name: 'Saskatchewan',
        code: 'SK'
      },
      {
        name: 'Yukon',
        code: 'YT'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  AF: {
    name: 'Afghanistan'
  },
  AX: {
    name: 'Åland Islands'
  },
  AL: {
    name: 'Albania'
  },
  DZ: {
    name: 'Algeria',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  AD: {
    name: 'Andorra'
  },
  AO: {
    name: 'Angola',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  AI: {
    name: 'Anguilla',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  AG: {
    name: 'Antigua & Barbuda',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  AR: {
    name: 'Argentina',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Buenos Aires Province',
        code: 'B'
      },
      {
        name: 'Catamarca',
        code: 'K'
      },
      {
        name: 'Chaco',
        code: 'H'
      },
      {
        name: 'Chubut',
        code: 'U'
      },
      {
        name: 'Buenos Aires',
        code: 'C'
      },
      {
        name: 'Córdoba',
        code: 'X'
      },
      {
        name: 'Corrientes',
        code: 'W'
      },
      {
        name: 'Entre Ríos',
        code: 'E'
      },
      {
        name: 'Formosa',
        code: 'P'
      },
      {
        name: 'Jujuy',
        code: 'Y'
      },
      {
        name: 'La Pampa',
        code: 'L'
      },
      {
        name: 'La Rioja',
        code: 'F'
      },
      {
        name: 'Mendoza',
        code: 'M'
      },
      {
        name: 'Misiones',
        code: 'N'
      },
      {
        name: 'Neuquén',
        code: 'Q'
      },
      {
        name: 'Río Negro',
        code: 'R'
      },
      {
        name: 'Salta',
        code: 'A'
      },
      {
        name: 'San Juan',
        code: 'J'
      },
      {
        name: 'San Luis',
        code: 'D'
      },
      {
        name: 'Santa Cruz',
        code: 'Z'
      },
      {
        name: 'Santa Fe',
        code: 'S'
      },
      {
        name: 'Santiago del Estero',
        code: 'G'
      },
      {
        name: 'Tierra del Fuego',
        code: 'V'
      },
      {
        name: 'Tucumán',
        code: 'T'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  AM: {
    name: 'Armenia'
  },
  AQ: {
    name: 'Antarctica'
  },
  AS: {
    name: 'American Samoa'
  },
  AW: {
    name: 'Aruba',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  AU: {
    name: 'Australia',
    labels: {
      postal: 'Postcode',
      state: 'State/Territory'
    },
    states: [
      {
        name: 'Australian Capital Territory',
        code: 'ACT'
      },
      {
        name: 'New South Wales',
        code: 'NSW'
      },
      {
        name: 'Northern Territory',
        code: 'NT'
      },
      {
        name: 'Queensland',
        code: 'QLD'
      },
      {
        name: 'South Australia',
        code: 'SA'
      },
      {
        name: 'Tasmania',
        code: 'TAS'
      },
      {
        name: 'Victoria',
        code: 'VIC'
      },
      {
        name: 'Western Australia',
        code: 'WA'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  AT: {
    name: 'Austria'
  },
  AZ: {
    name: 'Azerbaijan'
  },
  BS: {
    name: 'Bahamas',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  BH: {
    name: 'Bahrain'
  },
  BD: {
    name: 'Bangladesh'
  },
  BB: {
    name: 'Barbados'
  },
  BY: {
    name: 'Belarus',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  BE: {
    name: 'Belgium'
  },
  BZ: {
    name: 'Belize',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  BJ: {
    name: 'Benin',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  BM: {
    name: 'Bermuda'
  },
  BT: {
    name: 'Bhutan'
  },
  BO: {
    name: 'Bolivia',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  BA: {
    name: 'Bosnia & Herzegovina'
  },
  BW: {
    name: 'Botswana'
  },
  BV: {
    name: 'Bouvet Island'
  },
  BR: {
    name: 'Brazil',
    labels: {
      postal: 'Postal code',
      state: 'State'
    },
    states: [
      {
        name: 'Acre',
        code: 'AC'
      },
      {
        name: 'Alagoas',
        code: 'AL'
      },
      {
        name: 'Amapá',
        code: 'AP'
      },
      {
        name: 'Amazonas',
        code: 'AM'
      },
      {
        name: 'Bahia',
        code: 'BA'
      },
      {
        name: 'Ceará',
        code: 'CE'
      },
      {
        name: 'Federal District',
        code: 'DF'
      },
      {
        name: 'Espírito Santo',
        code: 'ES'
      },
      {
        name: 'Goiás',
        code: 'GO'
      },
      {
        name: 'Maranhão',
        code: 'MA'
      },
      {
        name: 'Mato Grosso',
        code: 'MT'
      },
      {
        name: 'Mato Grosso do Sul',
        code: 'MS'
      },
      {
        name: 'Minas Gerais',
        code: 'MG'
      },
      {
        name: 'Pará',
        code: 'PA'
      },
      {
        name: 'Paraíba',
        code: 'PB'
      },
      {
        name: 'Paraná',
        code: 'PR'
      },
      {
        name: 'Pernambuco',
        code: 'PE'
      },
      {
        name: 'Piauí',
        code: 'PI'
      },
      {
        name: 'Rio Grande do Norte',
        code: 'RN'
      },
      {
        name: 'Rio Grande do Sul',
        code: 'RS'
      },
      {
        name: 'Rio de Janeiro',
        code: 'RJ'
      },
      {
        name: 'Rondônia',
        code: 'RO'
      },
      {
        name: 'Roraima',
        code: 'RR'
      },
      {
        name: 'Santa Catarina',
        code: 'SC'
      },
      {
        name: 'São Paulo',
        code: 'SP'
      },
      {
        name: 'Sergipe',
        code: 'SE'
      },
      {
        name: 'Tocantins',
        code: 'TO'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  IO: {
    name: 'British Indian Ocean Territory'
  },
  VG: {
    name: 'British Virgin Islands'
  },
  BN: {
    name: 'Brunei'
  },
  BG: {
    name: 'Bulgaria'
  },
  BF: {
    name: 'Burkina Faso',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  BI: {
    name: 'Burundi'
  },
  KH: {
    name: 'Cambodia'
  },
  CM: {
    name: 'Cameroon'
  },
  CV: {
    name: 'Cape Verde'
  },
  BQ: {
    name: 'Caribbean Netherlands'
  },
  KY: {
    name: 'Cayman Islands'
  },
  CF: {
    name: 'Central African Republic'
  },
  TD: {
    name: 'Chad',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  CL: {
    name: 'Chile',
    labels: {
      postal: 'Postal code',
      state: 'State'
    }
  },
  CN: {
    name: 'China',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Anhui',
        code: 'AH'
      },
      {
        name: 'Beijing',
        code: 'BJ'
      },
      {
        name: 'Chongqing',
        code: 'CQ'
      },
      {
        name: 'Fujian',
        code: 'FJ'
      },
      {
        name: 'Gansu',
        code: 'GS'
      },
      {
        name: 'Guangdong',
        code: 'GD'
      },
      {
        name: 'Guangxi',
        code: 'GX'
      },
      {
        name: 'Guizhou',
        code: 'GZ'
      },
      {
        name: 'Hainan',
        code: 'HI'
      },
      {
        name: 'Hebei',
        code: 'HE'
      },
      {
        name: 'Heilongjiang',
        code: 'HL'
      },
      {
        name: 'Henan',
        code: 'HA'
      },
      {
        name: 'Hubei',
        code: 'HB'
      },
      {
        name: 'Hunan',
        code: 'HN'
      },
      {
        name: 'Inner Mongolia',
        code: 'NM'
      },
      {
        name: 'Jiangsu',
        code: 'JS'
      },
      {
        name: 'Jiangxi',
        code: 'JX'
      },
      {
        name: 'Jilin',
        code: 'JL'
      },
      {
        name: 'Liaoning',
        code: 'LN'
      },
      {
        name: 'Ningxia',
        code: 'NX'
      },
      {
        name: 'Qinghai',
        code: 'QH'
      },
      {
        name: 'Shaanxi',
        code: 'SN'
      },
      {
        name: 'Shandong',
        code: 'SD'
      },
      {
        name: 'Shanghai',
        code: 'SH'
      },
      {
        name: 'Shanxi',
        code: 'SX'
      },
      {
        name: 'Sichuan',
        code: 'SC'
      },
      {
        name: 'Tianjin',
        code: 'TJ'
      },
      {
        name: 'Xinjiang',
        code: 'XJ'
      },
      {
        name: 'Tibet',
        code: 'YZ'
      },
      {
        name: 'Yunnan',
        code: 'YN'
      },
      {
        name: 'Zhejiang',
        code: 'ZJ'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  CX: {
    name: 'Christmas Island'
  },
  CC: {
    name: 'Cocos (Keeling) Islands'
  },
  CO: {
    name: 'Colombia',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Capital District',
        code: 'DC'
      },
      {
        name: 'Amazonas',
        code: 'AMA'
      },
      {
        name: 'Antioquia',
        code: 'ANT'
      },
      {
        name: 'Arauca',
        code: 'ARA'
      },
      {
        name: 'Atlántico',
        code: 'ATL'
      },
      {
        name: 'Bolívar',
        code: 'BOL'
      },
      {
        name: 'Boyacá',
        code: 'BOY'
      },
      {
        name: 'Caldas',
        code: 'CAL'
      },
      {
        name: 'Caquetá',
        code: 'CAQ'
      },
      {
        name: 'Casanare',
        code: 'CAS'
      },
      {
        name: 'Cauca',
        code: 'CAU'
      },
      {
        name: 'Cesar',
        code: 'CES'
      },
      {
        name: 'Chocó',
        code: 'CHO'
      },
      {
        name: 'Córdoba',
        code: 'COR'
      },
      {
        name: 'Cundinamarca',
        code: 'CUN'
      },
      {
        name: 'Guainía',
        code: 'GUA'
      },
      {
        name: 'Guaviare',
        code: 'GUV'
      },
      {
        name: 'Huila',
        code: 'HUI'
      },
      {
        name: 'La Guajira',
        code: 'LAG'
      },
      {
        name: 'Magdalena',
        code: 'MAG'
      },
      {
        name: 'Meta',
        code: 'MET'
      },
      {
        name: 'Nariño',
        code: 'NAR'
      },
      {
        name: 'Norte de Santander',
        code: 'NSA'
      },
      {
        name: 'Putumayo',
        code: 'PUT'
      },
      {
        name: 'Quindío',
        code: 'QUI'
      },
      {
        name: 'Risaralda',
        code: 'RIS'
      },
      {
        name: 'San Andrés & Providencia',
        code: 'SAP'
      },
      {
        name: 'Santander',
        code: 'SAN'
      },
      {
        name: 'Sucre',
        code: 'SUC'
      },
      {
        name: 'Tolima',
        code: 'TOL'
      },
      {
        name: 'Valle del Cauca',
        code: 'VAC'
      },
      {
        name: 'Vaupés',
        code: 'VAU'
      },
      {
        name: 'Vichada',
        code: 'VID'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  KM: {
    name: 'Comoros'
  },
  CG: {
    name: 'Congo - Brazzaville'
  },
  CD: {
    name: 'Congo - Kinshasa'
  },
  CK: {
    name: 'Cook Islands'
  },
  CR: {
    name: 'Costa Rica'
  },
  HR: {
    name: 'Croatia'
  },
  CU: {
    name: 'Cuba'
  },
  CW: {
    name: 'Curaçao',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  CY: {
    name: 'Cyprus'
  },
  CZ: {
    name: 'Czechia'
  },
  CI: {
    name: 'Côte d’Ivoire'
  },
  DK: {
    name: 'Denmark'
  },
  DJ: {
    name: 'Djibouti'
  },
  DM: {
    name: 'Dominica'
  },
  DO: {
    name: 'Dominican Republic'
  },
  EC: {
    name: 'Ecuador'
  },
  EG: {
    name: 'Egypt',
    labels: {
      postal: 'Postal code',
      state: 'Governorate'
    },
    states: [
      {
        name: '6th of October',
        code: 'SU'
      },
      {
        name: 'Al Sharqia',
        code: 'SHR'
      },
      {
        name: 'Alexandria',
        code: 'ALX'
      },
      {
        name: 'Aswan',
        code: 'ASN'
      },
      {
        name: 'Asyut',
        code: 'AST'
      },
      {
        name: 'Beheira',
        code: 'BH'
      },
      {
        name: 'Beni Suef',
        code: 'BNS'
      },
      {
        name: 'Cairo',
        code: 'C'
      },
      {
        name: 'Dakahlia',
        code: 'DK'
      },
      {
        name: 'Damietta',
        code: 'DT'
      },
      {
        name: 'Faiyum',
        code: 'FYM'
      },
      {
        name: 'Gharbia',
        code: 'GH'
      },
      {
        name: 'Giza',
        code: 'GZ'
      },
      {
        name: 'Helwan',
        code: 'HU'
      },
      {
        name: 'Ismailia',
        code: 'IS'
      },
      {
        name: 'Kafr el-Sheikh',
        code: 'KFS'
      },
      {
        name: 'Luxor',
        code: 'LX'
      },
      {
        name: 'Matrouh',
        code: 'MT'
      },
      {
        name: 'Minya',
        code: 'MN'
      },
      {
        name: 'Monufia',
        code: 'MNF'
      },
      {
        name: 'New Valley',
        code: 'WAD'
      },
      {
        name: 'North Sinai',
        code: 'SIN'
      },
      {
        name: 'Port Said',
        code: 'PTS'
      },
      {
        name: 'Qalyubia',
        code: 'KB'
      },
      {
        name: 'Qena',
        code: 'KN'
      },
      {
        name: 'Red Sea',
        code: 'BA'
      },
      {
        name: 'Sohag',
        code: 'SHG'
      },
      {
        name: 'South Sinai',
        code: 'JS'
      },
      {
        name: 'Suez',
        code: 'SUZ'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  SV: {
    name: 'El Salvador'
  },
  GQ: {
    name: 'Equatorial Guinea'
  },
  ER: {
    name: 'Eritrea'
  },
  EE: {
    name: 'Estonia'
  },
  ET: {
    name: 'Ethiopia'
  },
  FK: {
    name: 'Falkland Islands'
  },
  FO: {
    name: 'Faroe Islands'
  },
  FJ: {
    name: 'Fiji',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  FI: {
    name: 'Finland'
  },
  FR: {
    name: 'France',
    fields: [['address1'], ['address2'], ['postal', 'city', 'countryCode']]
  },
  GF: {
    name: 'French Guiana'
  },
  PF: {
    name: 'French Polynesia'
  },
  TF: {
    name: 'French Southern Territories'
  },
  GA: {
    name: 'Gabon'
  },
  GM: {
    name: 'Gambia'
  },
  GE: {
    name: 'Georgia'
  },
  DE: {
    name: 'Germany',
    fields: [['address1'], ['address2'], ['postal', 'city', 'countryCode']]
  },
  GH: {
    name: 'Ghana',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  GI: {
    name: 'Gibraltar'
  },
  GR: {
    name: 'Greece'
  },
  GL: {
    name: 'Greenland'
  },
  GD: {
    name: 'Grenada'
  },
  GP: {
    name: 'Guadeloupe'
  },
  GU: {
    name: 'Guam'
  },
  GT: {
    name: 'Guatemala',
    states: [
      {
        name: 'Alta Verapaz',
        code: 'AVE'
      },
      {
        name: 'Baja Verapaz',
        code: 'BVE'
      },
      {
        name: 'Chimaltenango',
        code: 'CMT'
      },
      {
        name: 'Chiquimula',
        code: 'CQM'
      },
      {
        name: 'El Progreso',
        code: 'EPR'
      },
      {
        name: 'Escuintla',
        code: 'ESC'
      },
      {
        name: 'Guatemala',
        code: 'GUA'
      },
      {
        name: 'Huehuetenango',
        code: 'HUE'
      },
      {
        name: 'Izabal',
        code: 'IZA'
      },
      {
        name: 'Jalapa',
        code: 'JAL'
      },
      {
        name: 'Jutiapa',
        code: 'JUT'
      },
      {
        name: 'Petén',
        code: 'PET'
      },
      {
        name: 'Quetzaltenango',
        code: 'QUE'
      },
      {
        name: 'Quiché',
        code: 'QUI'
      },
      {
        name: 'Retalhuleu',
        code: 'RET'
      },
      {
        name: 'Sacatepéquez',
        code: 'SAC'
      },
      {
        name: 'San Marcos',
        code: 'SMA'
      },
      {
        name: 'Santa Rosa',
        code: 'SRO'
      },
      {
        name: 'Sololá',
        code: 'SOL'
      },
      {
        name: 'Suchitepéquez',
        code: 'SUC'
      },
      {
        name: 'Totonicapán',
        code: 'TOT'
      },
      {
        name: 'Zacapa',
        code: 'ZAC'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  GG: {
    name: 'Guernsey'
  },
  GN: {
    name: 'Guinea'
  },
  GW: {
    name: 'Guinea-Bissau'
  },
  GY: {
    name: 'Guyana'
  },
  HT: {
    name: 'Haiti'
  },
  HM: {
    name: 'Heard & McDonald Islands'
  },
  HN: {
    name: 'Honduras'
  },
  HK: {
    name: 'Hong Kong SAR China',
    states: [
      {
        name: 'Hong Kong Island',
        code: 'HK'
      },
      {
        name: 'Kowloon',
        code: 'KL'
      },
      {
        name: 'New Territories',
        code: 'NT'
      }
    ],
    fields: [['address1'], ['address2'], ['city'], ['countryCode', 'state']]
  },
  HU: {
    name: 'Hungary'
  },
  IS: {
    name: 'Iceland'
  },
  IN: {
    name: 'India',
    labels: {
      postal: 'PIN code',
      state: 'State'
    },
    states: [
      {
        name: 'Andaman and Nicobar Islands',
        code: 'AN'
      },
      {
        name: 'Andhra Pradesh',
        code: 'AP'
      },
      {
        name: 'Arunachal Pradesh',
        code: 'AR'
      },
      {
        name: 'Assam',
        code: 'AS'
      },
      {
        name: 'Bihar',
        code: 'BR'
      },
      {
        name: 'Chandigarh',
        code: 'CH'
      },
      {
        name: 'Chhattisgarh',
        code: 'CG'
      },
      {
        name: 'Dadra and Nagar Haveli',
        code: 'DN'
      },
      {
        name: 'Daman and Diu',
        code: 'DD'
      },
      {
        name: 'Delhi',
        code: 'DL'
      },
      {
        name: 'Goa',
        code: 'GA'
      },
      {
        name: 'Gujarat',
        code: 'GJ'
      },
      {
        name: 'Haryana',
        code: 'HR'
      },
      {
        name: 'Himachal Pradesh',
        code: 'HP'
      },
      {
        name: 'Jammu and Kashmir',
        code: 'JK'
      },
      {
        name: 'Jharkhand',
        code: 'JH'
      },
      {
        name: 'Karnataka',
        code: 'KA'
      },
      {
        name: 'Kerala',
        code: 'KL'
      },
      {
        name: 'Lakshadweep',
        code: 'LD'
      },
      {
        name: 'Madhya Pradesh',
        code: 'MP'
      },
      {
        name: 'Maharashtra',
        code: 'MH'
      },
      {
        name: 'Manipur',
        code: 'MN'
      },
      {
        name: 'Meghalaya',
        code: 'ML'
      },
      {
        name: 'Mizoram',
        code: 'MZ'
      },
      {
        name: 'Nagaland',
        code: 'NL'
      },
      {
        name: 'Odisha',
        code: 'OR'
      },
      {
        name: 'Puducherry',
        code: 'PY'
      },
      {
        name: 'Punjab',
        code: 'PB'
      },
      {
        name: 'Rajasthan',
        code: 'RJ'
      },
      {
        name: 'Sikkim',
        code: 'SK'
      },
      {
        name: 'Tamil Nadu',
        code: 'TN'
      },
      {
        name: 'Telangana',
        code: 'TS'
      },
      {
        name: 'Tripura',
        code: 'TR'
      },
      {
        name: 'Uttar Pradesh',
        code: 'UP'
      },
      {
        name: 'Uttarakhand',
        code: 'UK'
      },
      {
        name: 'West Bengal',
        code: 'WB'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  ID: {
    name: 'Indonesia',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Aceh',
        code: 'AC'
      },
      {
        name: 'Bali',
        code: 'BA'
      },
      {
        name: 'Bangka–Belitung Islands',
        code: 'BB'
      },
      {
        name: 'Banten',
        code: 'BT'
      },
      {
        name: 'Bengkulu',
        code: 'BE'
      },
      {
        name: 'Gorontalo',
        code: 'GO'
      },
      {
        name: 'Jakarta',
        code: 'JK'
      },
      {
        name: 'Jambi',
        code: 'JA'
      },
      {
        name: 'West Java',
        code: 'JB'
      },
      {
        name: 'Central Java',
        code: 'JT'
      },
      {
        name: 'East Java',
        code: 'JI'
      },
      {
        name: 'West Kalimantan',
        code: 'KB'
      },
      {
        name: 'South Kalimantan',
        code: 'KS'
      },
      {
        name: 'Central Kalimantan',
        code: 'KT'
      },
      {
        name: 'East Kalimantan',
        code: 'KI'
      },
      {
        name: 'North Kalimantan',
        code: 'KU'
      },
      {
        name: 'Riau Islands',
        code: 'KR'
      },
      {
        name: 'Lampung',
        code: 'LA'
      },
      {
        name: 'Maluku',
        code: 'MA'
      },
      {
        name: 'North Maluku',
        code: 'MU'
      },
      {
        name: 'West Nusa Tenggara',
        code: 'NB'
      },
      {
        name: 'East Nusa Tenggara',
        code: 'NT'
      },
      {
        name: 'Papua',
        code: 'PA'
      },
      {
        name: 'West Papua',
        code: 'PB'
      },
      {
        name: 'Riau',
        code: 'RI'
      },
      {
        name: 'West Sulawesi',
        code: 'SR'
      },
      {
        name: 'South Sulawesi',
        code: 'SN'
      },
      {
        name: 'Central Sulawesi',
        code: 'ST'
      },
      {
        name: 'Southeast Sulawesi',
        code: 'SG'
      },
      {
        name: 'North Sulawesi',
        code: 'SA'
      },
      {
        name: 'West Sumatra',
        code: 'SB'
      },
      {
        name: 'South Sumatra',
        code: 'SS'
      },
      {
        name: 'North Sumatra',
        code: 'SU'
      },
      {
        name: 'Yogyakarta',
        code: 'YO'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  IR: {
    name: 'Iran'
  },
  IQ: {
    name: 'Iraq'
  },
  IE: {
    name: 'Ireland',
    labels: {
      postal: 'Postal code',
      state: 'County'
    },
    states: [
      {
        name: 'Carlow',
        code: 'CW'
      },
      {
        name: 'Cavan',
        code: 'CN'
      },
      {
        name: 'Clare',
        code: 'CE'
      },
      {
        name: 'Cork',
        code: 'CO'
      },
      {
        name: 'Donegal',
        code: 'DL'
      },
      {
        name: 'Dublin',
        code: 'D'
      },
      {
        name: 'Galway',
        code: 'G'
      },
      {
        name: 'Kerry',
        code: 'KY'
      },
      {
        name: 'Kildare',
        code: 'KE'
      },
      {
        name: 'Kilkenny',
        code: 'KK'
      },
      {
        name: 'Laois',
        code: 'LS'
      },
      {
        name: 'Leitrim',
        code: 'LM'
      },
      {
        name: 'Limerick',
        code: 'LK'
      },
      {
        name: 'Longford',
        code: 'LD'
      },
      {
        name: 'Louth',
        code: 'LH'
      },
      {
        name: 'Mayo',
        code: 'MO'
      },
      {
        name: 'Meath',
        code: 'MH'
      },
      {
        name: 'Monaghan',
        code: 'MN'
      },
      {
        name: 'Offaly',
        code: 'OY'
      },
      {
        name: 'Roscommon',
        code: 'RN'
      },
      {
        name: 'Sligo',
        code: 'SO'
      },
      {
        name: 'Tipperary',
        code: 'TA'
      },
      {
        name: 'Waterford',
        code: 'WD'
      },
      {
        name: 'Westmeath',
        code: 'WH'
      },
      {
        name: 'Wexford',
        code: 'WX'
      },
      {
        name: 'Wicklow',
        code: 'WW'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  IM: {
    name: 'Isle of Man'
  },
  IL: {
    name: 'Israel'
  },
  IT: {
    name: 'Italy',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Agrigento',
        code: 'AG'
      },
      {
        name: 'Alessandria',
        code: 'AL'
      },
      {
        name: 'Ancona',
        code: 'AN'
      },
      {
        name: 'Aosta',
        code: 'AO'
      },
      {
        name: 'Arezzo',
        code: 'AR'
      },
      {
        name: 'Ascoli Piceno',
        code: 'AP'
      },
      {
        name: 'Asti',
        code: 'AT'
      },
      {
        name: 'Avellino',
        code: 'AV'
      },
      {
        name: 'Bari',
        code: 'BA'
      },
      {
        name: 'Barletta-Andria-Trani',
        code: 'BT'
      },
      {
        name: 'Belluno',
        code: 'BL'
      },
      {
        name: 'Benevento',
        code: 'BN'
      },
      {
        name: 'Bergamo',
        code: 'BG'
      },
      {
        name: 'Biella',
        code: 'BI'
      },
      {
        name: 'Bologna',
        code: 'BO'
      },
      {
        name: 'South Tyrol',
        code: 'BZ'
      },
      {
        name: 'Brescia',
        code: 'BS'
      },
      {
        name: 'Brindisi',
        code: 'BR'
      },
      {
        name: 'Cagliari',
        code: 'CA'
      },
      {
        name: 'Caltanissetta',
        code: 'CL'
      },
      {
        name: 'Campobasso',
        code: 'CB'
      },
      {
        name: 'Carbonia-Iglesias',
        code: 'CI'
      },
      {
        name: 'Caserta',
        code: 'CE'
      },
      {
        name: 'Catania',
        code: 'CT'
      },
      {
        name: 'Catanzaro',
        code: 'CZ'
      },
      {
        name: 'Chieti',
        code: 'CH'
      },
      {
        name: 'Como',
        code: 'CO'
      },
      {
        name: 'Cosenza',
        code: 'CS'
      },
      {
        name: 'Cremona',
        code: 'CR'
      },
      {
        name: 'Crotone',
        code: 'KR'
      },
      {
        name: 'Cuneo',
        code: 'CN'
      },
      {
        name: 'Enna',
        code: 'EN'
      },
      {
        name: 'Fermo',
        code: 'FM'
      },
      {
        name: 'Ferrara',
        code: 'FE'
      },
      {
        name: 'Florence',
        code: 'FI'
      },
      {
        name: 'Foggia',
        code: 'FG'
      },
      {
        name: 'Forlì-Cesena',
        code: 'FC'
      },
      {
        name: 'Frosinone',
        code: 'FR'
      },
      {
        name: 'Genoa',
        code: 'GE'
      },
      {
        name: 'Gorizia',
        code: 'GO'
      },
      {
        name: 'Grosseto',
        code: 'GR'
      },
      {
        name: 'Imperia',
        code: 'IM'
      },
      {
        name: 'Isernia',
        code: 'IS'
      },
      {
        name: 'L’Aquila',
        code: 'AQ'
      },
      {
        name: 'La Spezia',
        code: 'SP'
      },
      {
        name: 'Latina',
        code: 'LT'
      },
      {
        name: 'Lecce',
        code: 'LE'
      },
      {
        name: 'Lecco',
        code: 'LC'
      },
      {
        name: 'Livorno',
        code: 'LI'
      },
      {
        name: 'Lodi',
        code: 'LO'
      },
      {
        name: 'Lucca',
        code: 'LU'
      },
      {
        name: 'Macerata',
        code: 'MC'
      },
      {
        name: 'Mantua',
        code: 'MN'
      },
      {
        name: 'Massa and Carrara',
        code: 'MS'
      },
      {
        name: 'Matera',
        code: 'MT'
      },
      {
        name: 'Medio Campidano',
        code: 'VS'
      },
      {
        name: 'Messina',
        code: 'ME'
      },
      {
        name: 'Milan',
        code: 'MI'
      },
      {
        name: 'Modena',
        code: 'MO'
      },
      {
        name: 'Monza and Brianza',
        code: 'MB'
      },
      {
        name: 'Naples',
        code: 'NA'
      },
      {
        name: 'Novara',
        code: 'NO'
      },
      {
        name: 'Nuoro',
        code: 'NU'
      },
      {
        name: 'Ogliastra',
        code: 'OG'
      },
      {
        name: 'Olbia-Tempio',
        code: 'OT'
      },
      {
        name: 'Oristano',
        code: 'OR'
      },
      {
        name: 'Padua',
        code: 'PD'
      },
      {
        name: 'Palermo',
        code: 'PA'
      },
      {
        name: 'Parma',
        code: 'PR'
      },
      {
        name: 'Pavia',
        code: 'PV'
      },
      {
        name: 'Perugia',
        code: 'PG'
      },
      {
        name: 'Pesaro and Urbino',
        code: 'PU'
      },
      {
        name: 'Pescara',
        code: 'PE'
      },
      {
        name: 'Piacenza',
        code: 'PC'
      },
      {
        name: 'Pisa',
        code: 'PI'
      },
      {
        name: 'Pistoia',
        code: 'PT'
      },
      {
        name: 'Pordenone',
        code: 'PN'
      },
      {
        name: 'Potenza',
        code: 'PZ'
      },
      {
        name: 'Prato',
        code: 'PO'
      },
      {
        name: 'Ragusa',
        code: 'RG'
      },
      {
        name: 'Ravenna',
        code: 'RA'
      },
      {
        name: 'Reggio Calabria',
        code: 'RC'
      },
      {
        name: 'Reggio Emilia',
        code: 'RE'
      },
      {
        name: 'Rieti',
        code: 'RI'
      },
      {
        name: 'Rimini',
        code: 'RN'
      },
      {
        name: 'Rome',
        code: 'RM'
      },
      {
        name: 'Rovigo',
        code: 'RO'
      },
      {
        name: 'Salerno',
        code: 'SA'
      },
      {
        name: 'Sassari',
        code: 'SS'
      },
      {
        name: 'Savona',
        code: 'SV'
      },
      {
        name: 'Siena',
        code: 'SI'
      },
      {
        name: 'Syracuse',
        code: 'SR'
      },
      {
        name: 'Sondrio',
        code: 'SO'
      },
      {
        name: 'Taranto',
        code: 'TA'
      },
      {
        name: 'Teramo',
        code: 'TE'
      },
      {
        name: 'Terni',
        code: 'TR'
      },
      {
        name: 'Turin',
        code: 'TO'
      },
      {
        name: 'Trapani',
        code: 'TP'
      },
      {
        name: 'Trentino',
        code: 'TN'
      },
      {
        name: 'Treviso',
        code: 'TV'
      },
      {
        name: 'Trieste',
        code: 'TS'
      },
      {
        name: 'Udine',
        code: 'UD'
      },
      {
        name: 'Varese',
        code: 'VA'
      },
      {
        name: 'Venice',
        code: 'VE'
      },
      {
        name: 'Verbano-Cusio-Ossola',
        code: 'VB'
      },
      {
        name: 'Vercelli',
        code: 'VC'
      },
      {
        name: 'Verona',
        code: 'VR'
      },
      {
        name: 'Vibo Valentia',
        code: 'VV'
      },
      {
        name: 'Vicenza',
        code: 'VI'
      },
      {
        name: 'Viterbo',
        code: 'VT'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  JM: {
    name: 'Jamaica',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  JP: {
    name: 'Japan',
    labels: {
      postal: 'Postal code',
      state: 'Prefecture'
    },
    states: [
      {
        name: 'Hokkaidō',
        code: 'JP-01'
      },
      {
        name: 'Aomori',
        code: 'JP-02'
      },
      {
        name: 'Iwate',
        code: 'JP-03'
      },
      {
        name: 'Miyagi',
        code: 'JP-04'
      },
      {
        name: 'Akita',
        code: 'JP-05'
      },
      {
        name: 'Yamagata',
        code: 'JP-06'
      },
      {
        name: 'Fukushima',
        code: 'JP-07'
      },
      {
        name: 'Ibaraki',
        code: 'JP-08'
      },
      {
        name: 'Tochigi',
        code: 'JP-09'
      },
      {
        name: 'Gunma',
        code: 'JP-10'
      },
      {
        name: 'Saitama',
        code: 'JP-11'
      },
      {
        name: 'Chiba',
        code: 'JP-12'
      },
      {
        name: 'Tokyo',
        code: 'JP-13'
      },
      {
        name: 'Kanagawa',
        code: 'JP-14'
      },
      {
        name: 'Niigata',
        code: 'JP-15'
      },
      {
        name: 'Toyama',
        code: 'JP-16'
      },
      {
        name: 'Ishikawa',
        code: 'JP-17'
      },
      {
        name: 'Fukui',
        code: 'JP-18'
      },
      {
        name: 'Yamanashi',
        code: 'JP-19'
      },
      {
        name: 'Nagano',
        code: 'JP-20'
      },
      {
        name: 'Gifu',
        code: 'JP-21'
      },
      {
        name: 'Shizuoka',
        code: 'JP-22'
      },
      {
        name: 'Aichi',
        code: 'JP-23'
      },
      {
        name: 'Mie',
        code: 'JP-24'
      },
      {
        name: 'Shiga',
        code: 'JP-25'
      },
      {
        name: 'Kyōto',
        code: 'JP-26'
      },
      {
        name: 'Ōsaka',
        code: 'JP-27'
      },
      {
        name: 'Hyōgo',
        code: 'JP-28'
      },
      {
        name: 'Nara',
        code: 'JP-29'
      },
      {
        name: 'Wakayama',
        code: 'JP-30'
      },
      {
        name: 'Tottori',
        code: 'JP-31'
      },
      {
        name: 'Shimane',
        code: 'JP-32'
      },
      {
        name: 'Okayama',
        code: 'JP-33'
      },
      {
        name: 'Hiroshima',
        code: 'JP-34'
      },
      {
        name: 'Yamaguchi',
        code: 'JP-35'
      },
      {
        name: 'Tokushima',
        code: 'JP-36'
      },
      {
        name: 'Kagawa',
        code: 'JP-37'
      },
      {
        name: 'Ehime',
        code: 'JP-38'
      },
      {
        name: 'Kōchi',
        code: 'JP-39'
      },
      {
        name: 'Fukuoka',
        code: 'JP-40'
      },
      {
        name: 'Saga',
        code: 'JP-41'
      },
      {
        name: 'Nagasaki',
        code: 'JP-42'
      },
      {
        name: 'Kumamoto',
        code: 'JP-43'
      },
      {
        name: 'Ōita',
        code: 'JP-44'
      },
      {
        name: 'Miyazaki',
        code: 'JP-45'
      },
      {
        name: 'Kagoshima',
        code: 'JP-46'
      },
      {
        name: 'Okinawa',
        code: 'JP-47'
      }
    ],
    fields: [
      ['postal'],
      ['countryCode'],
      ['state', 'city'],
      ['address1'],
      ['address2']
    ]
  },
  JE: {
    name: 'Jersey'
  },
  JO: {
    name: 'Jordan'
  },
  KZ: {
    name: 'Kazakhstan'
  },
  KE: {
    name: 'Kenya'
  },
  KI: {
    name: 'Kiribati'
  },
  XK: {
    name: 'Kosovo'
  },
  KW: {
    name: 'Kuwait'
  },
  KG: {
    name: 'Kyrgyzstan'
  },
  LA: {
    name: 'Laos',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  LV: {
    name: 'Latvia'
  },
  LB: {
    name: 'Lebanon'
  },
  LS: {
    name: 'Lesotho'
  },
  LR: {
    name: 'Liberia'
  },
  LY: {
    name: 'Libya'
  },
  LI: {
    name: 'Liechtenstein'
  },
  LT: {
    name: 'Lithuania'
  },
  LU: {
    name: 'Luxembourg'
  },
  MO: {
    name: 'Macau SAR China'
  },
  MK: {
    name: 'Macedonia'
  },
  MG: {
    name: 'Madagascar'
  },
  MW: {
    name: 'Malawi',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  MY: {
    name: 'Malaysia',
    labels: {
      postal: 'Postcode',
      state: 'State/territory'
    },
    states: [
      {
        name: 'Johor',
        code: 'JHR'
      },
      {
        name: 'Kedah',
        code: 'KDH'
      },
      {
        name: 'Kelantan',
        code: 'KTN'
      },
      {
        name: 'Kuala Lumpur',
        code: 'KUL'
      },
      {
        name: 'Labuan',
        code: 'LBN'
      },
      {
        name: 'Malacca',
        code: 'MLK'
      },
      {
        name: 'Negeri Sembilan',
        code: 'NSN'
      },
      {
        name: 'Pahang',
        code: 'PHG'
      },
      {
        name: 'Perak',
        code: 'PRK'
      },
      {
        name: 'Perlis',
        code: 'PLS'
      },
      {
        name: 'Penang',
        code: 'PNG'
      },
      {
        name: 'Putrajaya',
        code: 'PJY'
      },
      {
        name: 'Sabah',
        code: 'SBH'
      },
      {
        name: 'Sarawak',
        code: 'SWK'
      },
      {
        name: 'Selangor',
        code: 'SGR'
      },
      {
        name: 'Terengganu',
        code: 'TRG'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  MV: {
    name: 'Maldives'
  },
  ML: {
    name: 'Mali',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  MT: {
    name: 'Malta'
  },
  MH: {
    name: 'Marshall Islands'
  },
  MQ: {
    name: 'Martinique'
  },
  MR: {
    name: 'Mauritania'
  },
  MU: {
    name: 'Mauritius'
  },
  YT: {
    name: 'Mayotte'
  },
  MX: {
    name: 'Mexico',
    labels: {
      postal: 'Postal code',
      state: 'State'
    },
    states: [
      {
        name: 'Aguascalientes',
        code: 'AGS'
      },
      {
        name: 'Baja California',
        code: 'BC'
      },
      {
        name: 'Baja California Sur',
        code: 'BCS'
      },
      {
        name: 'Campeche',
        code: 'CAMP'
      },
      {
        name: 'Chiapas',
        code: 'CHIS'
      },
      {
        name: 'Chihuahua',
        code: 'CHIH'
      },
      {
        name: 'Ciudad de Mexico',
        code: 'DF'
      },
      {
        name: 'Coahuila',
        code: 'COAH'
      },
      {
        name: 'Colima',
        code: 'COL'
      },
      {
        name: 'Durango',
        code: 'DGO'
      },
      {
        name: 'Guanajuato',
        code: 'GTO'
      },
      {
        name: 'Guerrero',
        code: 'GRO'
      },
      {
        name: 'Hidalgo',
        code: 'HGO'
      },
      {
        name: 'Jalisco',
        code: 'JAL'
      },
      {
        name: 'Mexico State',
        code: 'MEX'
      },
      {
        name: 'Michoacán',
        code: 'MICH'
      },
      {
        name: 'Morelos',
        code: 'MOR'
      },
      {
        name: 'Nayarit',
        code: 'NAY'
      },
      {
        name: 'Nuevo León',
        code: 'NL'
      },
      {
        name: 'Oaxaca',
        code: 'OAX'
      },
      {
        name: 'Puebla',
        code: 'PUE'
      },
      {
        name: 'Querétaro',
        code: 'QRO'
      },
      {
        name: 'Quintana Roo',
        code: 'Q ROO'
      },
      {
        name: 'San Luis Potosí',
        code: 'SLP'
      },
      {
        name: 'Sinaloa',
        code: 'SIN'
      },
      {
        name: 'Sonora',
        code: 'SON'
      },
      {
        name: 'Tabasco',
        code: 'TAB'
      },
      {
        name: 'Tamaulipas',
        code: 'TAMPS'
      },
      {
        name: 'Tlaxcala',
        code: 'TLAX'
      },
      {
        name: 'Veracruz',
        code: 'VER'
      },
      {
        name: 'Yucatán',
        code: 'YUC'
      },
      {
        name: 'Zacatecas',
        code: 'ZAC'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  FM: {
    name: 'Micronesia'
  },
  MD: {
    name: 'Moldova',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  MC: {
    name: 'Monaco'
  },
  MN: {
    name: 'Mongolia',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  ME: {
    name: 'Montenegro'
  },
  MS: {
    name: 'Montserrat'
  },
  MA: {
    name: 'Morocco'
  },
  MZ: {
    name: 'Mozambique'
  },
  MM: {
    name: 'Myanmar (Burma)'
  },
  NA: {
    name: 'Namibia'
  },
  NR: {
    name: 'Nauru'
  },
  NP: {
    name: 'Nepal'
  },
  NL: {
    name: 'Netherlands'
  },
  AN: {
    name: 'Netherlands Antilles'
  },
  NC: {
    name: 'New Caledonia'
  },
  NZ: {
    name: 'New Zealand',
    states: [
      {
        name: 'Auckland',
        code: 'AUK'
      },
      {
        name: 'Bay of Plenty',
        code: 'BOP'
      },
      {
        name: 'Canterbury',
        code: 'CAN'
      },
      {
        name: 'Gisborne',
        code: 'GIS'
      },
      {
        name: 'Hawke’s Bay',
        code: 'HKB'
      },
      {
        name: 'Manawatu-Wanganui',
        code: 'MWT'
      },
      {
        name: 'Marlborough',
        code: 'MBH'
      },
      {
        name: 'Nelson',
        code: 'NSN'
      },
      {
        name: 'Northland',
        code: 'NTL'
      },
      {
        name: 'Otago',
        code: 'OTA'
      },
      {
        name: 'Southland',
        code: 'STL'
      },
      {
        name: 'Taranaki',
        code: 'TKI'
      },
      {
        name: 'Tasman',
        code: 'TAS'
      },
      {
        name: 'Waikato',
        code: 'WKO'
      },
      {
        name: 'Wellington',
        code: 'WGN'
      },
      {
        name: 'West Coast',
        code: 'WTC'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  NI: {
    name: 'Nicaragua'
  },
  NE: {
    name: 'Niger'
  },
  NG: {
    name: 'Nigeria',
    labels: {
      postal: 'Postal code',
      state: 'State'
    },
    states: [
      {
        name: 'Abia',
        code: 'AB'
      },
      {
        name: 'Federal Capital Territory',
        code: 'FC'
      },
      {
        name: 'Adamawa',
        code: 'AD'
      },
      {
        name: 'Akwa Ibom',
        code: 'AK'
      },
      {
        name: 'Anambra',
        code: 'AN'
      },
      {
        name: 'Bauchi',
        code: 'BA'
      },
      {
        name: 'Bayelsa',
        code: 'BY'
      },
      {
        name: 'Benue',
        code: 'BE'
      },
      {
        name: 'Borno',
        code: 'BO'
      },
      {
        name: 'Cross River',
        code: 'CR'
      },
      {
        name: 'Delta',
        code: 'DE'
      },
      {
        name: 'Ebonyi',
        code: 'EB'
      },
      {
        name: 'Edo',
        code: 'ED'
      },
      {
        name: 'Ekiti',
        code: 'EK'
      },
      {
        name: 'Enugu',
        code: 'EN'
      },
      {
        name: 'Gombe',
        code: 'GO'
      },
      {
        name: 'Imo',
        code: 'IM'
      },
      {
        name: 'Jigawa',
        code: 'JI'
      },
      {
        name: 'Kaduna',
        code: 'KD'
      },
      {
        name: 'Kano',
        code: 'KN'
      },
      {
        name: 'Katsina',
        code: 'KT'
      },
      {
        name: 'Kebbi',
        code: 'KE'
      },
      {
        name: 'Kogi',
        code: 'KO'
      },
      {
        name: 'Kwara',
        code: 'KW'
      },
      {
        name: 'Lagos',
        code: 'LA'
      },
      {
        name: 'Nasarawa',
        code: 'NA'
      },
      {
        name: 'Niger',
        code: 'NI'
      },
      {
        name: 'Ogun',
        code: 'OG'
      },
      {
        name: 'Ondo',
        code: 'ON'
      },
      {
        name: 'Osun',
        code: 'OS'
      },
      {
        name: 'Oyo',
        code: 'OY'
      },
      {
        name: 'Plateau',
        code: 'PL'
      },
      {
        name: 'Rivers',
        code: 'RI'
      },
      {
        name: 'Sokoto',
        code: 'SO'
      },
      {
        name: 'Taraba',
        code: 'TA'
      },
      {
        name: 'Yobe',
        code: 'YO'
      },
      {
        name: 'Zamfara',
        code: 'ZA'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  NU: {
    name: 'Niue'
  },
  NF: {
    name: 'Norfolk Island'
  },
  KP: {
    name: 'North Korea'
  },
  MP: {
    name: 'Northern Mariana Islands'
  },
  NO: {
    name: 'Norway'
  },
  OM: {
    name: 'Oman'
  },
  PK: {
    name: 'Pakistan'
  },
  PW: {
    name: 'Palau'
  },
  PS: {
    name: 'Palestinian Territories'
  },
  PA: {
    name: 'Panama',
    states: [
      {
        name: 'Bocas del Toro',
        code: 'PA-1'
      },
      {
        name: 'Chiriquí',
        code: 'PA-4'
      },
      {
        name: 'Coclé',
        code: 'PA-2'
      },
      {
        name: 'Colón',
        code: 'PA-3'
      },
      {
        name: 'Darién',
        code: 'PA-5'
      },
      {
        name: 'Emberá',
        code: 'PA-EM'
      },
      {
        name: 'Herrera',
        code: 'PA-6'
      },
      {
        name: 'Guna Yala',
        code: 'PA-KY'
      },
      {
        name: 'Los Santos',
        code: 'PA-7'
      },
      {
        name: 'Ngöbe-Buglé',
        code: 'PA-NB'
      },
      {
        name: 'Panamá',
        code: 'PA-8'
      },
      {
        name: 'West Panamá',
        code: 'PA-10'
      },
      {
        name: 'Veraguas',
        code: 'PA-9'
      }
    ],
    fields: [['address1'], ['address2'], ['city'], ['countryCode', 'state']]
  },
  PG: {
    name: 'Papua New Guinea'
  },
  PY: {
    name: 'Paraguay',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  PE: {
    name: 'Peru',
    states: [
      {
        name: 'Amazonas',
        code: 'PE-AMA'
      },
      {
        name: 'Ancash',
        code: 'PE-ANC'
      },
      {
        name: 'Apurímac',
        code: 'PE-APU'
      },
      {
        name: 'Arequipa',
        code: 'PE-ARE'
      },
      {
        name: 'Ayacucho',
        code: 'PE-AYA'
      },
      {
        name: 'Cajamarca',
        code: 'PE-CAJ'
      },
      {
        name: 'El Callao',
        code: 'PE-CAL'
      },
      {
        name: 'Cusco',
        code: 'PE-CUS'
      },
      {
        name: 'Huancavelica',
        code: 'PE-HUV'
      },
      {
        name: 'Huánuco',
        code: 'PE-HUC'
      },
      {
        name: 'Ica',
        code: 'PE-ICA'
      },
      {
        name: 'Junín',
        code: 'PE-JUN'
      },
      {
        name: 'La Libertad',
        code: 'PE-LAL'
      },
      {
        name: 'Lambayeque',
        code: 'PE-LAM'
      },
      {
        name: 'Lima Region',
        code: 'PE-LIM'
      },
      {
        name: 'Lima',
        code: 'PE-LMA'
      },
      {
        name: 'Loreto',
        code: 'PE-LOR'
      },
      {
        name: 'Madre de Dios',
        code: 'PE-MDD'
      },
      {
        name: 'Moquegua',
        code: 'PE-MOQ'
      },
      {
        name: 'Pasco',
        code: 'PE-PAS'
      },
      {
        name: 'Piura',
        code: 'PE-PIU'
      },
      {
        name: 'Puno',
        code: 'PE-PUN'
      },
      {
        name: 'San Martín',
        code: 'PE-SAM'
      },
      {
        name: 'Tacna',
        code: 'PE-TAC'
      },
      {
        name: 'Tumbes',
        code: 'PE-TUM'
      },
      {
        name: 'Ucayali',
        code: 'PE-UCA'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  PH: {
    name: 'Philippines'
  },
  PN: {
    name: 'Pitcairn Islands'
  },
  PL: {
    name: 'Poland'
  },
  PT: {
    name: 'Portugal',
    states: [
      {
        name: 'Azores',
        code: 'PT-20'
      },
      {
        name: 'Aveiro',
        code: 'PT-01'
      },
      {
        name: 'Beja',
        code: 'PT-02'
      },
      {
        name: 'Braga',
        code: 'PT-03'
      },
      {
        name: 'Bragança',
        code: 'PT-04'
      },
      {
        name: 'Castelo Branco',
        code: 'PT-05'
      },
      {
        name: 'Coimbra',
        code: 'PT-06'
      },
      {
        name: 'Évora',
        code: 'PT-07'
      },
      {
        name: 'Faro',
        code: 'PT-08'
      },
      {
        name: 'Guarda',
        code: 'PT-09'
      },
      {
        name: 'Leiria',
        code: 'PT-10'
      },
      {
        name: 'Lisbon',
        code: 'PT-11'
      },
      {
        name: 'Madeira',
        code: 'PT-30'
      },
      {
        name: 'Portalegre',
        code: 'PT-12'
      },
      {
        name: 'Porto',
        code: 'PT-13'
      },
      {
        name: 'Santarém',
        code: 'PT-14'
      },
      {
        name: 'Setúbal',
        code: 'PT-15'
      },
      {
        name: 'Viana do Castelo',
        code: 'PT-16'
      },
      {
        name: 'Vila Real',
        code: 'PT-17'
      },
      {
        name: 'Viseu',
        code: 'PT-18'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  PR: {
    name: 'Puerto Rico'
  },
  QA: {
    name: 'Qatar',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  RE: {
    name: 'Réunion'
  },
  RO: {
    name: 'Romania',
    labels: {
      postal: 'Postal code',
      state: 'County'
    },
    states: [
      {
        name: 'Alba',
        code: 'AB'
      },
      {
        name: 'Arad',
        code: 'AR'
      },
      {
        name: 'Argeș',
        code: 'AG'
      },
      {
        name: 'Bacău',
        code: 'BC'
      },
      {
        name: 'Bihor',
        code: 'BH'
      },
      {
        name: 'Bistriţa-Năsăud',
        code: 'BN'
      },
      {
        name: 'Botoşani',
        code: 'BT'
      },
      {
        name: 'Brăila',
        code: 'BR'
      },
      {
        name: 'Braşov',
        code: 'BV'
      },
      {
        name: 'Bucharest',
        code: 'B'
      },
      {
        name: 'Buzău',
        code: 'BZ'
      },
      {
        name: 'Caraș-Severin',
        code: 'CS'
      },
      {
        name: 'Cluj',
        code: 'CJ'
      },
      {
        name: 'Constanța',
        code: 'CT'
      },
      {
        name: 'Covasna',
        code: 'CV'
      },
      {
        name: 'Călărași',
        code: 'CL'
      },
      {
        name: 'Dolj',
        code: 'DJ'
      },
      {
        name: 'Dâmbovița',
        code: 'DB'
      },
      {
        name: 'Galați',
        code: 'GL'
      },
      {
        name: 'Giurgiu',
        code: 'GR'
      },
      {
        name: 'Gorj',
        code: 'GJ'
      },
      {
        name: 'Harghita',
        code: 'HR'
      },
      {
        name: 'Hunedoara',
        code: 'HD'
      },
      {
        name: 'Ialomița',
        code: 'IL'
      },
      {
        name: 'Iași',
        code: 'IS'
      },
      {
        name: 'Ilfov',
        code: 'IF'
      },
      {
        name: 'Maramureş',
        code: 'MM'
      },
      {
        name: 'Mehedinți',
        code: 'MH'
      },
      {
        name: 'Mureş',
        code: 'MS'
      },
      {
        name: 'Neamţ',
        code: 'NT'
      },
      {
        name: 'Olt',
        code: 'OT'
      },
      {
        name: 'Prahova',
        code: 'PH'
      },
      {
        name: 'Sălaj',
        code: 'SJ'
      },
      {
        name: 'Satu Mare',
        code: 'SM'
      },
      {
        name: 'Sibiu',
        code: 'SB'
      },
      {
        name: 'Suceava',
        code: 'SV'
      },
      {
        name: 'Teleorman',
        code: 'TR'
      },
      {
        name: 'Timiș',
        code: 'TM'
      },
      {
        name: 'Tulcea',
        code: 'TL'
      },
      {
        name: 'Vâlcea',
        code: 'VL'
      },
      {
        name: 'Vaslui',
        code: 'VS'
      },
      {
        name: 'Vrancea',
        code: 'VN'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  RU: {
    name: 'Russia',
    states: [
      {
        name: 'Altai Krai',
        code: 'ALT'
      },
      {
        name: 'Altai',
        code: 'AL'
      },
      {
        name: 'Amur',
        code: 'AMU'
      },
      {
        name: 'Arkhangelsk',
        code: 'ARK'
      },
      {
        name: 'Astrakhan',
        code: 'AST'
      },
      {
        name: 'Belgorod',
        code: 'BEL'
      },
      {
        name: 'Bryansk',
        code: 'BRY'
      },
      {
        name: 'Chechen',
        code: 'CE'
      },
      {
        name: 'Chelyabinsk',
        code: 'CHE'
      },
      {
        name: 'Chukotka Okrug',
        code: 'CHU'
      },
      {
        name: 'Chuvash',
        code: 'CU'
      },
      {
        name: 'Irkutsk',
        code: 'IRK'
      },
      {
        name: 'Ivanovo',
        code: 'IVA'
      },
      {
        name: 'Jewish',
        code: 'YEV'
      },
      {
        name: 'Kabardino-Balkar',
        code: 'KB'
      },
      {
        name: 'Kaliningrad',
        code: 'KGD'
      },
      {
        name: 'Kaluga',
        code: 'KLU'
      },
      {
        name: 'Kamchatka Krai',
        code: 'KAM'
      },
      {
        name: 'Karachay-Cherkess',
        code: 'KC'
      },
      {
        name: 'Kemerovo',
        code: 'KEM'
      },
      {
        name: 'Khabarovsk Krai',
        code: 'KHA'
      },
      {
        name: 'Khanty-Mansi',
        code: 'KHM'
      },
      {
        name: 'Kirov',
        code: 'KIR'
      },
      {
        name: 'Komi',
        code: 'KO'
      },
      {
        name: 'Kostroma',
        code: 'KOS'
      },
      {
        name: 'Krasnodar Krai',
        code: 'KDA'
      },
      {
        name: 'Krasnoyarsk Krai',
        code: 'KYA'
      },
      {
        name: 'Kurgan',
        code: 'KGN'
      },
      {
        name: 'Kursk',
        code: 'KRS'
      },
      {
        name: 'Leningrad',
        code: 'LEN'
      },
      {
        name: 'Lipetsk',
        code: 'LIP'
      },
      {
        name: 'Magadan',
        code: 'MAG'
      },
      {
        name: 'Mari El',
        code: 'ME'
      },
      {
        name: 'Moscow',
        code: 'MOW'
      },
      {
        name: 'Moscow Province',
        code: 'MOS'
      },
      {
        name: 'Murmansk',
        code: 'MUR'
      },
      {
        name: 'Nizhny Novgorod',
        code: 'NIZ'
      },
      {
        name: 'Novgorod',
        code: 'NGR'
      },
      {
        name: 'Novosibirsk',
        code: 'NVS'
      },
      {
        name: 'Omsk',
        code: 'OMS'
      },
      {
        name: 'Orenburg',
        code: 'ORE'
      },
      {
        name: 'Oryol',
        code: 'ORL'
      },
      {
        name: 'Penza',
        code: 'PNZ'
      },
      {
        name: 'Perm Krai',
        code: 'PER'
      },
      {
        name: 'Primorsky Krai',
        code: 'PRI'
      },
      {
        name: 'Pskov',
        code: 'PSK'
      },
      {
        name: 'Adygea',
        code: 'AD'
      },
      {
        name: 'Bashkortostan',
        code: 'BA'
      },
      {
        name: 'Buryat',
        code: 'BU'
      },
      {
        name: 'Dagestan',
        code: 'DA'
      },
      {
        name: 'Ingushetia',
        code: 'IN'
      },
      {
        name: 'Kalmykia',
        code: 'KL'
      },
      {
        name: 'Karelia',
        code: 'KR'
      },
      {
        name: 'Khakassia',
        code: 'KK'
      },
      {
        name: 'Mordovia',
        code: 'MO'
      },
      {
        name: 'North Ossetia-Alania',
        code: 'SE'
      },
      {
        name: 'Tatarstan',
        code: 'TA'
      },
      {
        name: 'Rostov',
        code: 'ROS'
      },
      {
        name: 'Ryazan',
        code: 'RYA'
      },
      {
        name: 'Saint Petersburg',
        code: 'SPE'
      },
      {
        name: 'Sakha',
        code: 'SA'
      },
      {
        name: 'Sakhalin',
        code: 'SAK'
      },
      {
        name: 'Samara',
        code: 'SAM'
      },
      {
        name: 'Saratov',
        code: 'SAR'
      },
      {
        name: 'Smolensk',
        code: 'SMO'
      },
      {
        name: 'Stavropol Krai',
        code: 'STA'
      },
      {
        name: 'Sverdlovsk',
        code: 'SVE'
      },
      {
        name: 'Tambov',
        code: 'TAM'
      },
      {
        name: 'Tomsk',
        code: 'TOM'
      },
      {
        name: 'Tula',
        code: 'TUL'
      },
      {
        name: 'Tver',
        code: 'TVE'
      },
      {
        name: 'Tyumen',
        code: 'TYU'
      },
      {
        name: 'Tuva',
        code: 'TY'
      },
      {
        name: 'Udmurt',
        code: 'UD'
      },
      {
        name: 'Ulyanovsk',
        code: 'ULY'
      },
      {
        name: 'Vladimir',
        code: 'VLA'
      },
      {
        name: 'Volgograd',
        code: 'VGG'
      },
      {
        name: 'Vologda',
        code: 'VLG'
      },
      {
        name: 'Voronezh',
        code: 'VOR'
      },
      {
        name: 'Yamalo-Nenets Okrug',
        code: 'YAN'
      },
      {
        name: 'Yaroslavl',
        code: 'YAR'
      },
      {
        name: 'Zabaykalsky Krai',
        code: 'ZAB'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  RW: {
    name: 'Rwanda'
  },
  WS: {
    name: 'Samoa'
  },
  SM: {
    name: 'San Marino'
  },
  ST: {
    name: 'São Tomé & Príncipe'
  },
  SA: {
    name: 'Saudi Arabia'
  },
  SN: {
    name: 'Senegal'
  },
  RS: {
    name: 'Serbia'
  },
  SC: {
    name: 'Seychelles'
  },
  SL: {
    name: 'Sierra Leone'
  },
  SG: {
    name: 'Singapore'
  },
  SX: {
    name: 'Sint Maarten'
  },
  SK: {
    name: 'Slovakia'
  },
  SI: {
    name: 'Slovenia'
  },
  SB: {
    name: 'Solomon Islands'
  },
  SO: {
    name: 'Somalia'
  },
  ZA: {
    name: 'South Africa',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Eastern Cape',
        code: 'EC'
      },
      {
        name: 'Free',
        code: 'FS'
      },
      {
        name: 'Gauteng',
        code: 'GT'
      },
      {
        name: 'KwaZulu-Natal',
        code: 'NL'
      },
      {
        name: 'Limpopo',
        code: 'LP'
      },
      {
        name: 'Mpumalanga',
        code: 'MP'
      },
      {
        name: 'North West',
        code: 'NW'
      },
      {
        name: 'Northern Cape',
        code: 'NC'
      },
      {
        name: 'Western Cape',
        code: 'WC'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  GS: {
    name: 'South Georgia & South Sandwich Islands'
  },
  KR: {
    name: 'South Korea',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Busan',
        code: 'KR-26'
      },
      {
        name: 'North Chungcheong',
        code: 'KR-43'
      },
      {
        name: 'South Chungcheong',
        code: 'KR-44'
      },
      {
        name: 'Daegu',
        code: 'KR-27'
      },
      {
        name: 'Daejeon',
        code: 'KR-30'
      },
      {
        name: 'Gangwon',
        code: 'KR-42'
      },
      {
        name: 'Gwangju City',
        code: 'KR-29'
      },
      {
        name: 'North Gyeongsang',
        code: 'KR-47'
      },
      {
        name: 'Gyeonggi',
        code: 'KR-41'
      },
      {
        name: 'South Gyeongsang',
        code: 'KR-48'
      },
      {
        name: 'Incheon',
        code: 'KR-28'
      },
      {
        name: 'Jeju',
        code: 'KR-49'
      },
      {
        name: 'North Jeolla',
        code: 'KR-45'
      },
      {
        name: 'South Jeolla',
        code: 'KR-46'
      },
      {
        name: 'Sejong',
        code: 'KR-50'
      },
      {
        name: 'Seoul',
        code: 'KR-11'
      },
      {
        name: 'Ulsan',
        code: 'KR-31'
      }
    ],
    fields: [
      ['postal'],
      ['countryCode'],
      ['state', 'city'],
      ['address1'],
      ['address2']
    ]
  },
  SS: {
    name: 'South Sudan',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  ES: {
    name: 'Spain',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'A Coruña',
        code: 'C'
      },
      {
        name: 'Álava',
        code: 'VI'
      },
      {
        name: 'Albacete',
        code: 'AB'
      },
      {
        name: 'Alicante',
        code: 'A'
      },
      {
        name: 'Almería',
        code: 'AL'
      },
      {
        name: 'Asturias Province',
        code: 'O'
      },
      {
        name: 'Ávila',
        code: 'AV'
      },
      {
        name: 'Badajoz',
        code: 'BA'
      },
      {
        name: 'Balears Province',
        code: 'PM'
      },
      {
        name: 'Barcelona',
        code: 'B'
      },
      {
        name: 'Burgos',
        code: 'BU'
      },
      {
        name: 'Cáceres',
        code: 'CC'
      },
      {
        name: 'Cádiz',
        code: 'CA'
      },
      {
        name: 'Cantabria Province',
        code: 'S'
      },
      {
        name: 'Castellón',
        code: 'CS'
      },
      {
        name: 'Ceuta',
        code: 'CE'
      },
      {
        name: 'Ciudad Real',
        code: 'CR'
      },
      {
        name: 'Córdoba',
        code: 'CO'
      },
      {
        name: 'Cuenca',
        code: 'CU'
      },
      {
        name: 'Girona',
        code: 'GI'
      },
      {
        name: 'Granada',
        code: 'GR'
      },
      {
        name: 'Guadalajara',
        code: 'GU'
      },
      {
        name: 'Gipuzkoa',
        code: 'SS'
      },
      {
        name: 'Huelva',
        code: 'H'
      },
      {
        name: 'Huesca',
        code: 'HU'
      },
      {
        name: 'Jaén',
        code: 'J'
      },
      {
        name: 'La Rioja Province',
        code: 'LO'
      },
      {
        name: 'Las Palmas',
        code: 'GC'
      },
      {
        name: 'León',
        code: 'LE'
      },
      {
        name: 'Lleida',
        code: 'L'
      },
      {
        name: 'Lugo',
        code: 'LU'
      },
      {
        name: 'Madrid Province',
        code: 'M'
      },
      {
        name: 'Málaga',
        code: 'MA'
      },
      {
        name: 'Melilla',
        code: 'ML'
      },
      {
        name: 'Murcia',
        code: 'MU'
      },
      {
        name: 'Navarra',
        code: 'NA'
      },
      {
        name: 'Ourense',
        code: 'OR'
      },
      {
        name: 'Palencia',
        code: 'P'
      },
      {
        name: 'Pontevedra',
        code: 'PO'
      },
      {
        name: 'Salamanca',
        code: 'SA'
      },
      {
        name: 'Santa Cruz de Tenerife',
        code: 'TF'
      },
      {
        name: 'Segovia',
        code: 'SG'
      },
      {
        name: 'Seville',
        code: 'SE'
      },
      {
        name: 'Soria',
        code: 'SO'
      },
      {
        name: 'Tarragona',
        code: 'T'
      },
      {
        name: 'Teruel',
        code: 'TE'
      },
      {
        name: 'Toledo',
        code: 'TO'
      },
      {
        name: 'Valencia',
        code: 'V'
      },
      {
        name: 'Valladolid',
        code: 'VA'
      },
      {
        name: 'Biscay',
        code: 'BI'
      },
      {
        name: 'Zamora',
        code: 'ZA'
      },
      {
        name: 'Zaragoza',
        code: 'Z'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  LK: {
    name: 'Sri Lanka'
  },
  BL: {
    name: 'St. Barthélemy'
  },
  SH: {
    name: 'St. Helena'
  },
  KN: {
    name: 'St. Kitts & Nevis'
  },
  LC: {
    name: 'St. Lucia'
  },
  MF: {
    name: 'St. Martin'
  },
  PM: {
    name: 'St. Pierre & Miquelon'
  },
  VC: {
    name: 'St. Vincent & Grenadines'
  },
  SD: {
    name: 'Sudan'
  },
  SR: {
    name: 'Suriname'
  },
  SJ: {
    name: 'Svalbard & Jan Mayen'
  },
  SZ: {
    name: 'Swaziland'
  },
  SE: {
    name: 'Sweden'
  },
  CH: {
    name: 'Switzerland'
  },
  SY: {
    name: 'Syria'
  },
  TW: {
    name: 'Taiwan'
  },
  TJ: {
    name: 'Tajikistan'
  },
  TZ: {
    name: 'Tanzania'
  },
  TH: {
    name: 'Thailand',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    },
    states: [
      {
        name: 'Amnat Charoen',
        code: 'TH-37'
      },
      {
        name: 'Ang Thong',
        code: 'TH-15'
      },
      {
        name: 'Bangkok',
        code: 'TH-10'
      },
      {
        name: 'Bueng Kan',
        code: 'TH-38'
      },
      {
        name: 'Buri Ram',
        code: 'TH-31'
      },
      {
        name: 'Chachoengsao',
        code: 'TH-24'
      },
      {
        name: 'Chai Nat',
        code: 'TH-18'
      },
      {
        name: 'Chaiyaphum',
        code: 'TH-36'
      },
      {
        name: 'Chanthaburi',
        code: 'TH-22'
      },
      {
        name: 'Chiang Mai',
        code: 'TH-50'
      },
      {
        name: 'Chiang Rai',
        code: 'TH-57'
      },
      {
        name: 'Chon Buri',
        code: 'TH-20'
      },
      {
        name: 'Chumphon',
        code: 'TH-86'
      },
      {
        name: 'Kalasin',
        code: 'TH-46'
      },
      {
        name: 'Kamphaeng Phet',
        code: 'TH-62'
      },
      {
        name: 'Kanchanaburi',
        code: 'TH-71'
      },
      {
        name: 'Khon Kaen',
        code: 'TH-40'
      },
      {
        name: 'Krabi',
        code: 'TH-81'
      },
      {
        name: 'Lampang',
        code: 'TH-52'
      },
      {
        name: 'Lamphun',
        code: 'TH-51'
      },
      {
        name: 'Loei',
        code: 'TH-42'
      },
      {
        name: 'Lopburi',
        code: 'TH-16'
      },
      {
        name: 'Mae Hong Son',
        code: 'TH-58'
      },
      {
        name: 'Maha Sarakham',
        code: 'TH-44'
      },
      {
        name: 'Mukdahan',
        code: 'TH-49'
      },
      {
        name: 'Nakhon Nayok',
        code: 'TH-26'
      },
      {
        name: 'Nakhon Pathom',
        code: 'TH-73'
      },
      {
        name: 'Nakhon Phanom',
        code: 'TH-48'
      },
      {
        name: 'Nakhon Ratchasima',
        code: 'TH-30'
      },
      {
        name: 'Nakhon Sawan',
        code: 'TH-60'
      },
      {
        name: 'Nakhon Si Thammarat',
        code: 'TH-80'
      },
      {
        name: 'Nan',
        code: 'TH-55'
      },
      {
        name: 'Narathiwat',
        code: 'TH-96'
      },
      {
        name: 'Nong Bua Lam Phu',
        code: 'TH-39'
      },
      {
        name: 'Nong Khai',
        code: 'TH-43'
      },
      {
        name: 'Nonthaburi',
        code: 'TH-12'
      },
      {
        name: 'Pathum Thani',
        code: 'TH-13'
      },
      {
        name: 'Pattani',
        code: 'TH-94'
      },
      {
        name: 'Pattaya',
        code: 'TH-S'
      },
      {
        name: 'Phang Nga',
        code: 'TH-82'
      },
      {
        name: 'Phatthalung',
        code: 'TH-93'
      },
      {
        name: 'Phayao',
        code: 'TH-56'
      },
      {
        name: 'Phetchabun',
        code: 'TH-67'
      },
      {
        name: 'Phetchaburi',
        code: 'TH-76'
      },
      {
        name: 'Phichit',
        code: 'TH-66'
      },
      {
        name: 'Phitsanulok',
        code: 'TH-65'
      },
      {
        name: 'Phra Nakhon Si Ayutthaya',
        code: 'TH-14'
      },
      {
        name: 'Phrae',
        code: 'TH-54'
      },
      {
        name: 'Phuket',
        code: 'TH-83'
      },
      {
        name: 'Prachin Buri',
        code: 'TH-25'
      },
      {
        name: 'Prachuap Khiri Khan',
        code: 'TH-77'
      },
      {
        name: 'Ranong',
        code: 'TH-85'
      },
      {
        name: 'Ratchaburi',
        code: 'TH-70'
      },
      {
        name: 'Rayong',
        code: 'TH-21'
      },
      {
        name: 'Roi Et',
        code: 'TH-45'
      },
      {
        name: 'Sa Kaeo',
        code: 'TH-27'
      },
      {
        name: 'Sakon Nakhon',
        code: 'TH-47'
      },
      {
        name: 'Samut Prakan',
        code: 'TH-11'
      },
      {
        name: 'Samut Sakhon',
        code: 'TH-74'
      },
      {
        name: 'Samut Songkhram',
        code: 'TH-75'
      },
      {
        name: 'Saraburi',
        code: 'TH-19'
      },
      {
        name: 'Satun',
        code: 'TH-91'
      },
      {
        name: 'Sing Buri',
        code: 'TH-17'
      },
      {
        name: 'Si Sa Ket',
        code: 'TH-33'
      },
      {
        name: 'Songkhla',
        code: 'TH-90'
      },
      {
        name: 'Sukhothai',
        code: 'TH-64'
      },
      {
        name: 'Suphanburi',
        code: 'TH-72'
      },
      {
        name: 'Surat Thani',
        code: 'TH-84'
      },
      {
        name: 'Surin',
        code: 'TH-32'
      },
      {
        name: 'Tak',
        code: 'TH-63'
      },
      {
        name: 'Trang',
        code: 'TH-92'
      },
      {
        name: 'Trat',
        code: 'TH-23'
      },
      {
        name: 'Ubon Ratchathani',
        code: 'TH-34'
      },
      {
        name: 'Udon Thani',
        code: 'TH-41'
      },
      {
        name: 'Uthai Thani',
        code: 'TH-61'
      },
      {
        name: 'Uttaradit',
        code: 'TH-53'
      },
      {
        name: 'Yala',
        code: 'TH-95'
      },
      {
        name: 'Yasothon',
        code: 'TH-35'
      }
    ],
    fields: [
      ['address1'],
      ['address2'],
      ['city'],
      ['countryCode', 'state', 'postal']
    ]
  },
  TL: {
    name: 'Timor-Leste'
  },
  TG: {
    name: 'Togo',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  TK: {
    name: 'Tokelau'
  },
  TO: {
    name: 'Tonga'
  },
  TT: {
    name: 'Trinidad & Tobago',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  TN: {
    name: 'Tunisia'
  },
  TR: {
    name: 'Turkey'
  },
  TM: {
    name: 'Turkmenistan'
  },
  TC: {
    name: 'Turks & Caicos Islands'
  },
  TV: {
    name: 'Tuvalu',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  UM: {
    name: 'U.S. Outlying Islands',
    labels: {
      postal: 'Postal code',
      state: 'State'
    }
  },
  UG: {
    name: 'Uganda',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  UA: {
    name: 'Ukraine'
  },
  AE: {
    name: 'United Arab Emirates',
    labels: {
      postal: 'Postal code',
      state: 'Emirate'
    },
    states: [
      {
        name: 'Abu Dhabi',
        code: 'AZ'
      },
      {
        name: 'Ajman',
        code: 'AJ'
      },
      {
        name: 'Dubai',
        code: 'DU'
      },
      {
        name: 'Fujairah',
        code: 'FU'
      },
      {
        name: 'Ras al-Khaimah',
        code: 'RK'
      },
      {
        name: 'Sharjah',
        code: 'SH'
      },
      {
        name: 'Umm al-Quwain',
        code: 'UQ'
      }
    ],
    fields: [['address1'], ['address2'], ['city'], ['countryCode', 'state']]
  },
  GB: {
    name: 'United Kingdom',
    labels: {
      postal: 'Postcode',
      state: 'Region'
    }
  },
  UY: {
    name: 'Uruguay'
  },
  UZ: {
    name: 'Uzbekistan',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  VU: {
    name: 'Vanuatu',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  VA: {
    name: 'Vatican City'
  },
  VE: {
    name: 'Venezuela'
  },
  VN: {
    name: 'Vietnam'
  },
  VI: {
    name: 'U.S. Virgin Islands'
  },
  WF: {
    name: 'Wallis & Futuna'
  },
  EH: {
    name: 'Western Sahara'
  },
  YE: {
    name: 'Yemen',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  },
  ZM: {
    name: 'Zambia',
    labels: {
      postal: 'Postal code',
      state: 'Province'
    }
  },
  ZW: {
    name: 'Zimbabwe',
    fields: [['address1'], ['address2'], ['city'], ['countryCode']]
  }
};

export default function getAddressFormat(countryCode: string) {
  const labels = countryCode ? {
    ...defaultFormat.labels,
    ...formats[countryCode].labels,
  } : defaultFormat.labels;
  return {
    ...defaultFormat,
    ...formats[countryCode],
    labels
  };
}
