import React from 'react';
import './Header.scss';
import ReactSelect from 'react-select';
const options = [
  { value: 'AFG', label: 'Afghanistan' },
  { value: 'ALB', label: 'Albania' },
  { value: 'DZA', label: 'Algeria' },
  { value: 'ASM', label: 'American Samoa' },
  { value: 'AND', label: 'Andorra' },
  { value: 'AGO', label: 'Angola' },
  { value: 'AIA', label: 'Anguilla' },
  { value: 'ATG', label: 'Antigua and Barbuda' },
  { value: 'ARG', label: 'Argentina' },
  { value: 'ARM', label: 'Armenia' },
  { value: 'ABW', label: 'Aruba' },
  { value: 'AUS', label: 'Australia' },
  { value: 'AUT', label: 'Austria' },
  { value: 'AZE', label: 'Azerbaijan' },
  { value: 'BHS', label: 'Bahamas' },
  { value: 'BHR', label: 'Bahrain' },
  { value: 'BGD', label: 'Bangladesh' },
  { value: 'BRB', label: 'Barbados' },
  { value: 'BLR', label: 'Belarus' },
  { value: 'BEL', label: 'Belgium' },
  { value: 'BLZ', label: 'Belize' },
  { value: 'BEN', label: 'Benin' },
  { value: 'BMU', label: 'Bermuda' },
  { value: 'BTN', label: 'Bhutan' },
  { value: 'BOL', label: 'Bolivia (Plurinational State of)' },
  { value: 'BES', label: 'Bonaire, Sint Eustatius and Saba' },
  { value: 'BIH', label: 'Bosnia and Herzegovina' },
  { value: 'BWA', label: 'Botswana' },
  { value: 'BRA', label: 'Brazil' },
  { value: 'BRN', label: 'Brunei Darussalam' },
  { value: 'BGR', label: 'Bulgaria' },
  { value: 'BFA', label: 'Burkina Faso' },
  { value: 'BDI', label: 'Burundi' },
  { value: 'CPV', label: 'Cabo Verde' },
  { value: 'KHM', label: 'Cambodia' },
  { value: 'CMR', label: 'Cameroon' },
  { value: 'CAN', label: 'Canada' },
  { value: 'CYM', label: 'Cayman Islands' },
  { value: 'CAF', label: 'Central African Republic' },
  { value: 'TCD', label: 'Chad' },
  { value: 'CHL', label: 'Chile' },
  { value: 'CHN', label: 'China' },
  { value: 'CXR', label: 'Christmas Island' },
  { value: 'CCK', label: 'Cocos (Keeling) Islands' },
  { value: 'COL', label: 'Colombia' },
  { value: 'COM', label: 'Comoros' },
  { value: 'COG', label: 'Congo' },
  { value: 'COD', label: 'Congo (Democratic Republic of the)' },
  { value: 'COK', label: 'Cook Islands' },
  { value: 'CRI', label: 'Costa Rica' },
  { value: 'HRV', label: 'Croatia' },
  { value: 'CUB', label: 'Cuba' },
  { value: 'CUW', label: 'Curaçao' },
  { value: 'CYP', label: 'Cyprus' },
  { value: 'CZE', label: 'Czech Republic' },
  { value: 'CIV', label: 'Côte d\'Ivoire' },
  { value: 'DNK', label: 'Denmark' },
  { value: 'DJI', label: 'Djibouti' },
  { value: 'DMA', label: 'Dominica' },
  { value: 'DOM', label: 'Dominican Republic' },
  { value: 'ECU', label: 'Ecuador' },
  { value: 'EGY', label: 'Egypt' },
  { value: 'SLV', label: 'El Salvador' },
  { value: 'GNQ', label: 'Equatorial Guinea' },
  { value: 'ERI', label: 'Eritrea' },
  { value: 'EST', label: 'Estonia' },
  { value: 'ETH', label: 'Ethiopia' },
  { value: 'FLK', label: 'Falkland Islands (Malvinas)' },
  { value: 'FRO', label: 'Faroe Islands' },
  { value: 'FJI', label: 'Fiji' },
  { value: 'FIN', label: 'Finland' },
  { value: 'FRA', label: 'France' },
  { value: 'GUF', label: 'French Guiana' },
  { value: 'PYF', label: 'French Polynesia' },
  { value: 'ATF', label: 'French Southern Territories' },
  { value: 'GAB', label: 'Gabon' },
  { value: 'GMB', label: 'Gambia' },
  { value: 'GEO', label: 'Georgia' },
  { value: 'DEU', label: 'Germany' },
  { value: 'GHA', label: 'Ghana' },
  { value: 'GIB', label: 'Gibraltar' },
  { value: 'GRC', label: 'Greece' },
  { value: 'GRL', label: 'Greenland' },
  { value: 'GRD', label: 'Grenada' },
  { value: 'GLP', label: 'Guadeloupe' },
  { value: 'GUM', label: 'Guam' },
  { value: 'GTM', label: 'Guatemala' },
  { value: 'GIN', label: 'Guinea' },
  { value: 'GNB', label: 'Guinea-Bissau' },
  { value: 'GUY', label: 'Guyana' },
  { value: 'HTI', label: 'Haiti' },
  { value: 'VAT', label: 'Holy See' },
  { value: 'HND', label: 'Honduras' },
  { value: 'HKG', label: 'Hong Kong' },
  { value: 'HUN', label: 'Hungary' },
  { value: 'ISL', label: 'Iceland' },
  { value: 'IND', label: 'India' },
  { value: 'IDN', label: 'Indonesia' },
  { value: 'IRN', label: 'Iran (Islamic Republic of)' },
  { value: 'IRQ', label: 'Iraq' },
  { value: 'IRL', label: 'Ireland' },
  { value: 'IMN', label: 'Isle of Man' },
  { value: 'ISR', label: 'Israel' },
  { value: 'ITA', label: 'Italy' },
  { value: 'JAM', label: 'Jamaica' },
  { value: 'JPN', label: 'Japan' },
  { value: 'JEY', label: 'Jersey' },
  { value: 'JOR', label: 'Jordan' },
  { value: 'KAZ', label: 'Kazakhstan' },
  { value: 'KEN', label: 'Kenya' },
  { value: 'KIR', label: 'Kiribati' },
  { value: 'PRK', label: 'Korea (Democratic People\'s Republic of)' },
  { value: 'KOR', label: 'Korea (Republic of)' },
  { value: 'KWT', label: 'Kuwait' },
  { value: 'KGZ', label: 'Kyrgyzstan' },
  { value: 'LAO', label: 'Lao People\'s Democratic Republic' },
  { value: 'LVA', label: 'Latvia' },
  { value: 'LBN', label: 'Lebanon' },
  { value: 'LSO', label: 'Lesotho' },
  { value: 'LBR', label: 'Liberia' },
  { value: 'LBY', label: 'Libya' },
  { value: 'LIE', label: 'Liechtenstein' },
  { value: 'LTU', label: 'Lithuania' },
  { value: 'LUX', label: 'Luxembourg' },
  { value: 'MKD', label: 'Macedonia (the former Yugoslav Republic of)' },
  { value: 'MDG', label: 'Madagascar' },
  { value: 'MWI', label: 'Malawi' },
  { value: 'MYS', label: 'Malaysia' },
  { value: 'MDV', label: 'Maldives' },
  { value: 'MLI', label: 'Mali' },
  { value: 'MLT', label: 'Malta' },
  { value: 'MHL', label: 'Marshall Islands' },
  { value: 'MTQ', label: 'Martinique' },
  { value: 'MRT', label: 'Mauritania' },
  { value: 'MUS', label: 'Mauritius' },
  { value: 'MYT', label: 'Mayotte' },
  { value: 'MEX', label: 'Mexico' },
  { value: 'FSM', label: 'Micronesia (Federated States of)' },
  { value: 'MDA', label: 'Moldova (Republic of)' },
  { value: 'MCO', label: 'Monaco' },
  { value: 'MNG', label: 'Mongolia' },
  { value: 'MNE', label: 'Montenegro' },
  { value: 'MSR', label: 'Montserrat' },
  { value: 'MAR', label: 'Morocco' },
  { value: 'MOZ', label: 'Mozambique' },
  { value: 'MMR', label: 'Myanmar' },
  { value: 'NAM', label: 'Namibia' },
  { value: 'NRU', label: 'Nauru' },
  { value: 'NPL', label: 'Nepal' },
  { value: 'NLD', label: 'Netherlands' },
  { value: 'NCL', label: 'New Caledonia' },
  { value: 'NZL', label: 'New Zealand' },
  { value: 'NIC', label: 'Nicaragua' },
  { value: 'NER', label: 'Niger' },
  { value: 'NGA', label: 'Nigeria' },
  { value: 'NIU', label: 'Niue' },
  { value: 'NFK', label: 'Norfolk Island' },
  { value: 'MNP', label: 'Northern Mariana Islands' },
  { value: 'NOR', label: 'Norway' },
  { value: 'OMN', label: 'Oman' },
  { value: 'PAK', label: 'Pakistan' },
  { value: 'PLW', label: 'Palau' },
  { value: 'PSE', label: 'Palestine, State of' },
  { value: 'PAN', label: 'Panama' },
  { value: 'PNG', label: 'Papua New Guinea' },
  { value: 'PRY', label: 'Paraguay' },
  { value: 'PER', label: 'Peru' },
  { value: 'PHL', label: 'Philippines' },
  { value: 'PCN', label: 'Pitcairn' },
  { value: 'POL', label: 'Poland' },
  { value: 'PRT', label: 'Portugal' },
  { value: 'PRI', label: 'Puerto Rico' },
  { value: 'QAT', label: 'Qatar' },
  { value: 'KOS', label: 'Republic of Kosovo' },
  { value: 'ROU', label: 'Romania' },
  { value: 'RUS', label: 'Russian Federation' },
  { value: 'RWA', label: 'Rwanda' },
  { value: 'REU', label: 'Réunion' },
  { value: 'BLM', label: 'Saint Barthélemy' },
  { value: 'SHN', label: 'Saint Helena, Ascension and Tristan da Cunha' },
  { value: 'KNA', label: 'Saint Kitts and Nevis' },
  { value: 'LCA', label: 'Saint Lucia' },
  { value: 'MAF', label: 'Saint Martin (French part)' },
  { value: 'SPM', label: 'Saint Pierre and Miquelon' },
  { value: 'VCT', label: 'Saint Vincent and the Grenadines' },
  { value: 'WSM', label: 'Samoa' },
  { value: 'SMR', label: 'San Marino' },
  { value: 'STP', label: 'Sao Tome and Principe' },
  { value: 'SAU', label: 'Saudi Arabia' },
  { value: 'SEN', label: 'Senegal' },
  { value: 'SRB', label: 'Serbia' },
  { value: 'SYC', label: 'Seychelles' },
  { value: 'SLE', label: 'Sierra Leone' },
  { value: 'SGP', label: 'Singapore' },
  { value: 'SXM', label: 'Sint Maarten (Dutch part)' },
  { value: 'SVK', label: 'Slovakia' },
  { value: 'SVN', label: 'Slovenia' },
  { value: 'SLB', label: 'Solomon Islands' },
  { value: 'SOM', label: 'Somalia' },
  { value: 'ZAF', label: 'South Africa' },
  { value: 'SGS', label: 'South Georgia and the South Sandwich Islands' },
  { value: 'SSD', label: 'South Sudan' },
  { value: 'ESP', label: 'Spain' },
  { value: 'LKA', label: 'Sri Lanka' },
  { value: 'SDN', label: 'Sudan' },
  { value: 'SUR', label: 'Suriname' },
  { value: 'SJM', label: 'Svalbard and Jan Mayen' },
  { value: 'SWZ', label: 'Swaziland' },
  { value: 'SWE', label: 'Sweden' },
  { value: 'CHE', label: 'Switzerland' },
  { value: 'SYR', label: 'Syrian Arab Republic' },
  { value: 'TWN', label: 'Taiwan' },
  { value: 'TJK', label: 'Tajikistan' },
  { value: 'TZA', label: 'Tanzania, United Republic of' },
  { value: 'THA', label: 'Thailand' },
  { value: 'TLS', label: 'Timor-Leste' },
  { value: 'TGO', label: 'Togo' },
  { value: 'TKL', label: 'Tokelau' },
  { value: 'TON', label: 'Tonga' },
  { value: 'TTO', label: 'Trinidad and Tobago' },
  { value: 'TUN', label: 'Tunisia' },
  { value: 'TUR', label: 'Turkey' },
  { value: 'TKM', label: 'Turkmenistan' },
  { value: 'TCA', label: 'Turks and Caicos Islands' },
  { value: 'TUV', label: 'Tuvalu' },
  { value: 'UGA', label: 'Uganda' },
  { value: 'UKR', label: 'Ukraine' },
  { value: 'ARE', label: 'United Arab Emirates' },
  { value: 'GBR', label: 'United Kingdom of Great Britain and Northern Ireland' },
  { value: 'USA', label: 'United States of America' },
  { value: 'URY', label: 'Uruguay' },
  { value: 'UZB', label: 'Uzbekistan' },
  { value: 'VUT', label: 'Vanuatu' },
  { value: 'VEN', label: 'Venezuela (Bolivarian Republic of)' },
  { value: 'VNM', label: 'Viet Nam' },
  { value: 'VGB', label: 'Virgin Islands (British)' },
  { value: 'VIR', label: 'Virgin Islands (U.S.)' },
  { value: 'WLF', label: 'Wallis and Futuna' },
  { value: 'ESH', label: 'Western Sahara' },
  { value: 'YEM', label: 'Yemen' },
  { value: 'ZMB', label: 'Zambia' },
  { value: 'ZWE', label: 'Zimbabwe' },
  { value: 'ALA', label: 'Åland Islands' }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setCountry = this.setCountry.bind(this);
  }

  setCountry(option) {
    this.props.onGetCountry(option.value, this.props.history);
  }

  componentDidMount() {
    this.setCountry({value: this.props.code});
  }

  render() {
    return (
      <div className="app-header">
        <div className="app-header_col-left">
          <h1>{this.props.country}</h1>
          <div className="app-header_col-left_half">
            <ReactSelect
              options={options}
              onChange={this.setCountry}
            />
          </div>
          <h2>The capital city: {this.props.capital}</h2>
        </div>
        <div className="app-header_col-right">
          <img src={this.props.flag} width="200" height="134" alt="flag"/>
        </div>
      </div>
    );
  }
}

export default Header;